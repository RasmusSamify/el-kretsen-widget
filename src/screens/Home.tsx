import { Sparkles, Coins, MapPin, ClipboardCheck, BarChart3, Phone, Mail } from 'lucide-react';
import { Tile } from '../components/Tile';
import type { ScreenProps } from './types';

const STATS = [
  { num: '35K', label: 'ton/år' },
  { num: '#1', label: 'i Norden' },
  { num: '20+ år', label: 'sedan 2001' },
];

export function HomeScreen({ navigate }: ScreenProps) {
  return (
    <div className="space-y-2.5 px-4 pb-4 pt-3 animate-fade-up">
      <section className="relative overflow-hidden rounded-2xl bg-ink-900 px-4 py-4 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(6,180,228,0.06) 0 1px, transparent 1px 16px)',
          }}
        />
        <div className="relative">
          <div className="font-condensed text-[22px] font-bold leading-[1.05]">
            Vi tar hand om <span className="text-brand-400">Sveriges</span> elektronik &amp; batterier.
          </div>
          <p className="mt-1.5 text-[12px] leading-snug text-white/60">
            Producentansvar gjort enkelt sedan 2001.
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-condensed text-base font-bold leading-none">{s.num}</div>
                <div className="mt-0.5 text-[9px] font-semibold uppercase leading-tight tracking-wider text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-2">
        <Tile
          icon={Sparkles}
          label="Fråga ELvis"
          sub="AI · live"
          variant="featured"
          className="col-span-2"
          onClick={() => navigate('chat')}
          trailing={
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Live nu
            </div>
          }
        />
        <Tile
          icon={ClipboardCheck}
          label="Bli producent"
          sub="Anmäl"
          onClick={() => navigate('producent')}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Tile icon={Coins} label="Avgifter" sub="2026" onClick={() => navigate('avgifter')} />
        <Tile icon={MapPin} label="Insamling" sub="Hitta plats" onClick={() => navigate('insamling')} />
        <Tile icon={BarChart3} label="Statistik" sub="Insamling" onClick={() => navigate('chat')} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+4684455100"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition hover:opacity-95"
        >
          <Phone size={14} strokeWidth={2.2} />
          Ring oss
        </a>
        <button
          onClick={() => navigate('kontakt')}
          className="flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-ink-700 transition hover:border-brand-300 hover:bg-brand-50/60 hover:text-brand-700"
        >
          <Mail size={14} strokeWidth={2.2} />
          Kontakt
        </button>
      </div>
    </div>
  );
}
