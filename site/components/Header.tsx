'use client';

import { useEffect, useRef, useState } from 'react';
import { NAV, PHONES, VIBER } from '@/lib/content';
import { PhoneIcon, CrossIcon, MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [open, setOpen] = useState<'' | 'phones' | 'menu'>('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen('');
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(''); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open]);

  const phones = (
    <div className="hd-phones">
      <p className="lbl">Единый колл-центр, круглосуточно</p>
      <ul>
        {PHONES.map(p => (
          <li key={p.tel}><a href={`tel:${p.tel}`}><b>{p.value}</b><span>{p.label}{p.note ? ` · ${p.note}` : ''}</span></a></li>
        ))}
        <li><a href={VIBER.href}><b>{VIBER.value}</b><span>{VIBER.note}</span></a></li>
      </ul>
    </div>
  );

  return (
    <header className="hd" ref={ref}>
      <div className="wrap hd-in">
        <a className="hd-logo" href="#top" aria-label="Доктор Вет — на главную"><img src="/img/logo.png" alt="Доктор Вет — ветеринарные клиники" width="178" height="31" /></a>
        <nav className="hd-nav" aria-label="Разделы">{NAV.map(n => <a key={n.t} href={n.href}>{n.t}</a>)}</nav>
        <span className="sp" />
        <span className="hd-open"><i aria-hidden="true" />Круглосуточно</span>
        <button className="hd-call" aria-expanded={open === 'phones'} onClick={() => setOpen(open === 'phones' ? '' : 'phones')}>
          <PhoneIcon /><span>7031</span>
        </button>
        <a className="hd-urgent" href="tel:7031"><CrossIcon /><span>Срочно</span></a>
        <a className="hd-book" href="#book">Записаться</a>
        <button className="hd-menu" aria-label="Меню" aria-expanded={open === 'menu'} onClick={() => setOpen(open === 'menu' ? '' : 'menu')}>
          {open === 'menu' ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open === 'phones' && <div className="hd-pop wrap">{phones}</div>}
      {open === 'menu' && (
        <div className="hd-sheet">
          <nav aria-label="Меню">{NAV.map(n => <a key={n.t} href={n.href} onClick={() => setOpen('')}>{n.t}</a>)}</nav>
          {phones}
        </div>
      )}
    </header>
  );
}
