import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import { Sparkles, ArrowRight } from 'lucide-react';
import type { ScreenProps } from './types';

interface StubProps extends ScreenProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  hint: string;
}

export function StubScreen({ navigate, icon: Icon, title, description, hint }: StubProps) {
  return (
    <div className="flex h-full flex-col px-5 pb-5 pt-5 animate-fade-up">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
        <Icon size={22} strokeWidth={1.7} />
      </div>
      <h2 className="mt-3 font-condensed text-2xl font-bold leading-tight text-ink-900">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>

      <div className="mt-5 rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">Kommer snart</div>
        <div className="mt-1 text-sm text-ink-700">{hint}</div>
      </div>

      <div className="mt-auto pt-5">
        <button
          onClick={() => navigate('chat')}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          <Sparkles size={15} strokeWidth={2} />
          Fråga ELvis under tiden
          <ArrowRight size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
