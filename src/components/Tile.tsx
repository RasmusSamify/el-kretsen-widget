import type { ComponentType, ReactNode } from 'react';
import type { LucideProps } from 'lucide-react';

type Variant = 'featured' | 'default';

interface Props {
  icon: ComponentType<LucideProps>;
  label: string;
  sub?: string;
  badge?: string;
  variant?: Variant;
  className?: string;
  onClick: () => void;
  trailing?: ReactNode;
}

const VARIANT_STYLES: Record<Variant, string> = {
  featured:
    'relative overflow-hidden bg-ink-900 text-white shadow-tile hover:shadow-tile-hover',
  default:
    'bg-white text-ink-900 shadow-tile hover:shadow-tile-hover hover:-translate-y-0.5',
};

export function Tile({ icon: Icon, label, sub, badge, variant = 'default', className = '', onClick, trailing }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col justify-between rounded-2xl px-4 py-3.5 text-left transition ${VARIANT_STYLES[variant]} ${className}`}
    >
      {variant === 'featured' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)',
          }}
        />
      )}
      {badge && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-ink-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {badge}
        </span>
      )}
      <div className="relative">
        <div
          className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${
            variant === 'featured' ? 'text-brand-400' : 'text-brand-500'
          }`}
        >
          <Icon size={20} strokeWidth={1.7} />
        </div>
        <div className="font-condensed text-base font-bold uppercase leading-tight tracking-wide">
          {label}
        </div>
        {sub && (
          <div className={`mt-1 text-[11px] uppercase tracking-wider ${variant === 'featured' ? 'text-white/60' : 'text-ink-400'}`}>
            {sub}
          </div>
        )}
      </div>
      {trailing && <div className="relative mt-2">{trailing}</div>}
    </button>
  );
}
