'use client';

import { useEffect, useMemo, useState } from 'react';
import { CLINICS, DOCTORS, SERVICES, dayLabel, hm, plural, windows, type ClinicId, type Window } from '@/lib/schedule';
import { bookEvent, useNow, type BookIntent } from './useNow';
import { ArrowIcon } from './icons';

type Step = 'pick' | 'contact' | 'done';
const PETS = ['Собака', 'Кошка', 'Другое'];

function Chevron() {
  return (
    <svg className="chev" width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Booking() {
  const now = useNow();
  const [clinic, setClinic] = useState<ClinicId | ''>('');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [day, setDay] = useState<number | null>(null);
  const [pick, setPick] = useState<Window | null>(null);
  const [all, setAll] = useState(false);
  const [step, setStep] = useState<Step>('pick');
  const [pet, setPet] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pendingM, setPendingM] = useState<number | null>(null);

  // запросы из других секций: «записаться в эту клинику / к этому врачу»
  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<BookIntent>).detail;
      if (d.clinic !== undefined) setClinic(d.clinic);
      if (d.doctor !== undefined) { setDoctor(d.doctor); setService(''); }
      if (d.service !== undefined) { setService(d.service); setDoctor(''); }
      setPick(null); setStep('pick'); setAll(false);
      if (d.k !== undefined) setDay(d.k);
      setPendingM(d.m ?? null);
    };
    window.addEventListener(bookEvent, on);
    return () => window.removeEventListener(bookEvent, on);
  }, []);

  // взаимная фильтрация: клиника → врачи; услуга ↔ врач
  const docsInClinic = useMemo(() => DOCTORS.filter(d => !clinic || d.clinics.includes(clinic)), [clinic]);
  const docs = useMemo(() => docsInClinic.filter(d => !service || d.services.includes(service)), [docsInClinic, service]);
  const doc = docs.find(d => d.id === doctor);
  useEffect(() => { if (doctor && !doc) setDoctor(''); }, [doctor, doc]);
  const services = SERVICES.filter(s => (doc ? doc.services.includes(s) : docsInClinic.some(d => d.services.includes(s))));

  const days = useMemo(() => {
    if (!now) return [];
    const ws = windows({ service, doctor: doc?.id, clinic, now });
    const out: { k: number; date: Date; byM: Map<number, Window> }[] = [];
    for (const w of ws) {
      let d = out.find(x => x.k === w.k);
      if (!d) out.push((d = { k: w.k, date: w.date, byM: new Map() }));
      if (!d.byM.has(w.m)) d.byM.set(w.m, w);
    }
    return out;
  }, [now, service, doc, clinic]);

  const cur = days.find(d => d.k === day) ?? days[0];
  useEffect(() => { if (cur && cur.k !== day) setDay(cur.k); }, [cur, day]);
  useEffect(() => {
    if (pendingM === null || !cur || cur.k !== day) return;
    const w = cur.byM.get(pendingM);
    if (w) setPick(w);
    setPendingM(null);
  }, [pendingM, cur, day]);
  const times = cur ? [...cur.byM.values()] : [];
  const shown = all ? times : times.slice(0, 12);
  const picked = pick && cur && pick.k === cur.k && cur.byM.get(pick.m) ? pick : null;

  const reset = () => { setPick(null); setAll(false); };
  const where = (w: Window) => `${w.doc.short} · ${CLINICS[w.clinic].addr}`;

  const pd = picked?.doc ?? doc;
  const pc = picked?.clinic ?? (clinic || null);
  const preview = (
    <aside className="bk-preview" aria-live="polite">
      {pd ? (
        <div className="pv-doc">
          <img src={pd.photo} alt="" width="120" height="120" />
          <div><b>{pd.name}</b><p>{pd.role}</p><p className="pv-where">{(pc ? [pc] : pd.clinics).map(c => CLINICS[c].addr).join(' · ')}</p></div>
        </div>
      ) : pc ? (
        <div className="pv-clinic">
          <img src={pc === 'p' ? '/img/0O9A6174.webp' : '/img/0O9A6286.webp'} alt="" />
          <b>{CLINICS[pc].addr}</b>
          <p>Круглосуточно. По записи — 9:00–21:00, ночью принимает дежурный врач.</p>
        </div>
      ) : (
        <div className="pv-both">
          <div><img src="/img/0O9A6174.webp" alt="" /><span>Подшипниковый пр., 9</span></div>
          <div><img src="/img/0O9A6286.webp" alt="" /><span>ул. Скрипникова, 39</span></div>
          <p>Выберите врача — здесь появится его фото и специализация.</p>
        </div>
      )}
    </aside>
  );

  if (step === 'done' && picked) {
    return (<>{preview}
      <div className="bk bk-done" aria-live="polite">
        <svg className="bk-stamp" viewBox="0 0 120 120" aria-hidden="true">
          <g fill="none" stroke="currentColor"><circle cx="60" cy="60" r="56" strokeWidth="3" /><circle cx="60" cy="60" r="44" strokeWidth="1.5" /></g>
          <text x="60" y="66" textAnchor="middle" fontWeight="700" fontSize="13" letterSpacing=".5" fill="currentColor">ЗАПИСАН</text>
        </svg>
        <h3>Заявка принята</h3>
        <p className="bk-sum"><b>{dayLabel(picked.date, picked.k)}, {hm(picked.m)}</b><br />{where(picked)}</p>
        <p className="bk-note">Администратор перезвонит, чтобы подтвердить запись. Это прототип — заявка никуда не отправляется.</p>
        <button className="bk-link" onClick={() => { setStep('pick'); reset(); }}>Записаться ещё раз</button>
      </div>
    </>);
  }

  if (step === 'contact' && picked) {
    const ok = name.trim().length > 1 && phone.replace(/\D/g, '').length >= 9 && pet;
    return (<>{preview}
      <form className="bk bk-contact" onSubmit={e => { e.preventDefault(); if (ok) setStep('done'); }}>
        <p className="bk-sum"><b>{dayLabel(picked.date, picked.k)}, {hm(picked.m)}</b><br />{where(picked)}</p>
        <label className="bk-f"><span className="lbl">Ваше имя</span><input value={name} onChange={e => setName(e.target.value)} autoComplete="given-name" required /></label>
        <label className="bk-f"><span className="lbl">Телефон</span><input value={phone} onChange={e => setPhone(e.target.value)} type="tel" inputMode="tel" placeholder="+375 __ ___-__-__" autoComplete="tel" required /></label>
        <fieldset className="bk-pets"><legend className="lbl">Питомец</legend>
          {PETS.map(p => <button type="button" key={p} aria-pressed={pet === p} onClick={() => setPet(p)}>{p}</button>)}
        </fieldset>
        <button className="bk-go" type="submit" disabled={!ok}>Отправить заявку</button>
        <button type="button" className="bk-link" onClick={() => setStep('pick')}><ArrowIcon />изменить время</button>
      </form>
    </>);
  }

  return (<>{preview}
    <div className="bk">
      <div className="bk-clin" role="group" aria-label="Клиника">
        {([['', 'Любая клиника', ''], ['p', 'Подшипниковый', ', 9'], ['s', 'Скрипникова', ', 39']] as const).map(([id, t, n]) => (
          <button key={id} aria-pressed={clinic === id} onClick={() => { setClinic(id); reset(); }}>{t}<span className="n">{n}</span></button>
        ))}
      </div>

      <label className="bk-row">
        <span className="lbl">Услуга</span>
        <span className="v">{service || <>Любая услуга<small>не уверены — выберите «Терапия»</small></>}</span>
        <Chevron />
        <select value={service} onChange={e => { setService(e.target.value); reset(); }} aria-label="Услуга">
          <option value="">Любая услуга</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>

      <label className="bk-row">
        <span className="lbl">Врач</span>
        <span className="v">
          {doc ? <span className="bk-doc"><img src={doc.photo} alt="" width="36" height="36" /><span>{doc.short}<small>{doc.role}</small></span></span>
            : <>Любой врач<small>{docs.length} {plural(docs.length, 'врач подходит', 'врача подходят', 'врачей подходят')}</small></>}
        </span>
        <Chevron />
        <select value={doc?.id ?? ''} onChange={e => { setDoctor(e.target.value); reset(); }} aria-label="Врач">
          <option value="">Любой врач ({docs.length})</option>
          {docs.map(d => <option key={d.id} value={d.id}>{d.short} — {d.role}</option>)}
        </select>
      </label>

      <label className="bk-row">
        <span className="lbl">Дата</span>
        <span className="v">
          {!now ? '…' : cur ? <>{dayLabel(cur.date, cur.k)}<small>{cur.byM.size} {plural(cur.byM.size, 'свободное окно', 'свободных окна', 'свободных окон')}</small></>
            : <>Нет свободного времени<small>попробуйте другую клинику или врача</small></>}
        </span>
        <Chevron />
        <select value={cur?.k ?? ''} onChange={e => { setDay(+e.target.value); reset(); }} aria-label="Дата">
          {days.map(d => <option key={d.k} value={d.k}>{dayLabel(d.date, d.k)} — {d.byM.size} {plural(d.byM.size, 'окно', 'окна', 'окон')}</option>)}
        </select>
      </label>

      <div className="bk-times">
        <span className="lbl">Свободное время</span>
        <div className="bk-grid" key={`${cur?.k}-${service}-${doc?.id}-${clinic}`}>
          {shown.map((w, i) => (
            <button key={w.m} style={{ animationDelay: `${i * 18}ms` }} aria-pressed={picked?.m === w.m} onClick={() => setPick(w)}>{hm(w.m)}</button>
          ))}
        </div>
        {times.length > 12 && !all && <button className="bk-link" onClick={() => setAll(true)}>Показать всё время ({times.length})</button>}
      </div>

      <p className="bk-sum">
        {picked ? <><b>{dayLabel(picked.date, picked.k)}, {hm(picked.m)}</b><br />{picked.doc.short}, {picked.doc.role}<br />{CLINICS[picked.clinic].addr}</> : 'Выберите время — покажем врача и адрес'}
      </p>
      <button className="bk-go" disabled={!picked} onClick={() => setStep('contact')}>{picked ? `Записаться на ${hm(picked.m)}` : 'Записаться'}</button>
    </div>
  </>);
}
