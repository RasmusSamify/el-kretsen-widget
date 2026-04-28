import type { ComponentType, ReactNode } from 'react';
import type { LucideProps } from 'lucide-react';

type Variant = 'featured' | 'default' | 'soft';

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
    'bg-brand-gradient text-white shadow-tile hover:shadow-tile-hover',
  default:
    'bg-white text-ink-900 shadow-tile hover:shadow-tile-hover hover:-translate-y-0.5',
  soft:
    'bg-brand-50 text-brand-700 hover:bg-brand-100',
};

export function Tile({ icon: Icon, label, sub, badge, variant = 'default', className = '', onClick, trailing }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl px-4 py-4 text-left transition ${VARIANT_STYLES[variant]} ${className}`}
    >
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-600">
          {badge}
        </span>
      )}
      <div>
        <div
          className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl ${
            variant === 'featured'
              ? 'bg-white/20'
              : variant === 'soft'
                ? 'bg-white/70'
                : 'bg-brand-50 text-brand-500'
          }`}
        >
          <Icon size={18} strokeWidth={1.7} />
        </div>
        <div className={`font-condensed text-base font-semibold leading-tight ${variant === 'featured' ? '' : 'text-ink-900'}`}>
          {label}
        </div>
        {sub && (
          <div className={`mt-0.5 text-xs ${variant === 'featured' ? 'text-white/80' : 'text-ink-500'}`}>
            {sub}
          </div>
        )}
      </div>
      {trailing}
    </button>
  );
}
