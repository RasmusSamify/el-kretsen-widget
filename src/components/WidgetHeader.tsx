import { ArrowLeft, X } from 'lucide-react';
import { ElkretsenLogo } from './Logo';

interface Props {
  canGoBack: boolean;
  onBack: () => void;
  onClose: () => void;
  subtitle?: string;
}

export function WidgetHeader({ canGoBack, onBack, onClose, subtitle }: Props) {
  return (
    <header className="relative bg-brand-gradient px-5 pb-5 pt-4 text-white">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          aria-label="Tillbaka"
          className={`flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 ${
            canGoBack ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ArrowLeft size={18} strokeWidth={1.8} />
        </button>
        <ElkretsenLogo height={22} color="#FFFFFF" />
        <button
          onClick={onClose}
          aria-label="Stäng"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15"
        >
          <X size={18} strokeWidth={1.8} />
        </button>
      </div>
      {subtitle && (
        <div className="mt-3 text-center font-condensed text-sm font-medium uppercase tracking-[0.18em] text-white/80">
          {subtitle}
        </div>
      )}
    </header>
  );
}
