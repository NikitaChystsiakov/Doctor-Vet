'use client';

import { CLINICS, dayLabel, hm, isNight, nearLabel, windows, type ClinicId } from '@/lib/schedule';
import { ArrowIcon, MoonIcon } from './icons';
import { requestBooking, useNow } from './useNow';

// Ближайшее свободное время (по всей сети или по клинике)
export function Nearest({ clinic }: { clinic?: ClinicId }) {
  const now = useNow();
  if (!now) return <>…</>;
  return <>{nearLabel(windows({ now, clinic })[0])}</>;
}

// Ночной блок: после 21:00 запись не нужна
export function NightNote() {
  const now = useNow();
  if (!now || !isNight(now)) return null;
  return (
    <div className="night" role="status">
      <MoonIcon />
      <div>
        <b>Сейчас ночь — можно приезжать без записи</b>
        <p>Дежурный врач принимает в обеих клиниках по живой очереди, действует ночной тариф. Запись — на утро.</p>
      </div>
    </div>
  );
}

export function BookHere({ clinic, children, className }: { clinic: ClinicId; children: React.ReactNode; className?: string }) {
  return <button className={className} onClick={() => requestBooking({ clinic })}>{children}</button>;
}

// Первый экран: три ближайших окна по сети → открывают форму с уже выбранным временем
export function NearestSlots() {
  const now = useNow();
  const seen = new Set<string>();
  const list = now ? windows({ now }).filter(w => { const key = `${w.k}-${w.m}`; if (seen.has(key)) return false; seen.add(key); return true; }).slice(0, 3) : [];
  return (
    <div className="ns">
      <div className="ns-h"><b>Ближайшее свободное время</b>{list[0] && <span>{list[0].k === 0 ? 'сегодня' : list[0].k === 1 ? 'завтра' : dayLabel(list[0].date, list[0].k)}</span>}</div>
      <div className="ns-row">
        {(now ? list : [null, null, null]).map((w, i) => w ? (
          <button key={i} onClick={() => requestBooking({ doctor: w.doc.id, clinic: '', k: w.k, m: w.m })}>
            <b>{hm(w.m)}</b><span>{w.doc.short.split(' ')[0]}</span><span>{CLINICS[w.clinic].short}</span>
          </button>
        ) : <span key={i} className="ns-ph" aria-hidden="true" />)}
      </div>
      <a className="ns-more" href="#book">Выбрать услугу, врача или дату <ArrowIcon /></a>
    </div>
  );
}
