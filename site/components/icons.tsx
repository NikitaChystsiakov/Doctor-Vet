// Иконки одной толщины линии (1.8), рисованные.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" /></svg>
);
export const CrossIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" fill="currentColor" /></svg>
);
export const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
);
export const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor" /></svg>
);
