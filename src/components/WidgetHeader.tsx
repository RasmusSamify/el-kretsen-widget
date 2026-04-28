import { ArrowLeft, X } from 'lucide-react';
import { ElkretsenLogo } from './Logo';

interface Props {
  canGoBack: boolean;
  onBack: () => void;
  onClose: () => void;
}

export function WidgetHeader({ canGoBack, onBack, onClose }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-ink-100 bg-white px-4 py-3">
      <button
        onClick={onBack}
        aria-label="Tillbaka"
        className={`flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition hover:bg-ink-100 hover:text-ink-700 ${
          canGoBack ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ArrowLeft size={18} strokeWidth={1.8} />
      </button>
      <ElkretsenLogo height={20} color="#0369A1" />
      <button
        onClick={onClose}
        aria-label="Stäng"
        className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition hover:bg-ink-100 hover:text-ink-700"
      >
        <X size={18} strokeWidth={1.8} />
      </button>
    </header>
  );
}
