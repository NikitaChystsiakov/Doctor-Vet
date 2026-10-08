'use client';

import { useEffect, useState } from 'react';

// Текущее время только на клиенте (без расхождения с серверным HTML).
// ?now=2026-10-07T23:10 — заморозить время для показа ночного режима.
export function useNow(): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('now');
    const fixed = q ? new Date(q) : null;
    setNow(fixed ?? new Date());
    if (fixed) return;
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

// Связь секций с формой записи: «записаться к этому врачу / в эту клинику».
export type BookIntent = { clinic?: 'p' | 's' | ''; doctor?: string; service?: string; k?: number; m?: number };
export const bookEvent = 'dv:book';
export function requestBooking(intent: BookIntent) {
  window.dispatchEvent(new CustomEvent<BookIntent>(bookEvent, { detail: intent }));
  const el = document.getElementById('book');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.classList.remove('flash');
  void el.offsetWidth;
  el.classList.add('flash');
}
