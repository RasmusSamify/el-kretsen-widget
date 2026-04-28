import { MessageCircle, X } from 'lucide-react';

export function LauncherButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Stäng assistent' : 'Öppna assistent'}
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-elk-forest text-elk-cream shadow-widget transition hover:bg-elk-moss"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-elk-moss/40 animate-breathe" />
      {open ? <X size={22} strokeWidth={1.8} /> : <MessageCircle size={22} strokeWidth={1.8} />}
    </button>
  );
}
