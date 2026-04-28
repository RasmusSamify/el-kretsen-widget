import { MessageCircle, X } from 'lucide-react';

export function LauncherButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Stäng assistent' : 'Öppna El-kretsens hjälp'}
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-widget transition hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 rounded-full animate-breathe" />
      {open ? <X size={22} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={2} fill="currentColor" fillOpacity={0.15} />}
    </button>
  );
}
