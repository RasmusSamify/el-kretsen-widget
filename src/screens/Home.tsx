import { Sparkles, Coins, MapPin, ClipboardCheck, BookOpen, Workflow, BarChart3, ArrowRight, Phone, Mail } from 'lucide-react';
import { Tile } from '../components/Tile';
import type { ScreenProps } from './types';

const STATS = [
  { num: '5,5', label: 'kg/person', sub: 'samlas in årligen' },
  { num: '#1', label: 'i Norden', sub: 'av insamlingssystem' },
  { num: '20+ år', label: 'erfarenhet', sub: 'sedan 2001' },
];

export function HomeScreen({ navigate }: ScreenProps) {
  return (
    <div className="space-y-3 px-4 pb-4 pt-3 animate-fade-up">
      <section className="relative overflow-hidden rounded-2xl bg-ink-900 px-5 py-5 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(6,180,228,0.06) 0 1px, transparent 1px 16px)',
          }}
        />
        <div className="relative">
          <div className="font-condensed text-[28px] font-bold leading-[1.05]">
            Vi tar hand om<br />
            <span className="text-brand-400">Sveriges</span><br />
            elektronik &amp; batterier.
          </div>
          <p className="mt-2 text-sm leading-snug text-white/70">
            Producentansvar gjort enkelt sedan 2001.
          </p>
          <button
            onClick={() => navigate('chat')}
            className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-95"
          >
            Fråga oss vad som helst
            <ArrowRight size={15} strokeWidth={2.2} />
          </button>
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-condensed text-xl font-bold leading-none">{s.num}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wider text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-2.5">
        <Tile
          icon={Sparkles}
          label="Fråga ELvis"
          sub="AI · live"
          variant="featured"
          className="col-span-2"
          onClick={() => navigate('chat')}
          trailing={
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-400/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Live nu
            </div>
          }
        />
        <Tile
          icon={ClipboardCheck}
          label="Bli producent"
          sub="Anmäl"
          badge="Snabbt"
          onClick={() => navigate('producent')}
        />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <Tile icon={Coins} label="Avgifter" sub="2026" onClick={() => navigate('avgifter')} />
        <Tile icon={MapPin} label="Insamling" sub="Hitta plats" onClick={() => navigate('insamling')} />
        <Tile icon={BookOpen} label="Lagar" sub="Producentansvar" onClick={() => navigate('chat')} />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <Tile icon={Workflow} label="Så funkar det" sub="3 steg" onClick={() => navigate('chat')} />
        <button
          onClick={() => navigate('chat')}
          className="group col-span-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-left shadow-tile transition hover:shadow-tile-hover hover:-translate-y-0.5"
        >
          <div>
            <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg text-brand-500">
              <BarChart3 size={20} strokeWidth={1.7} />
            </div>
            <div className="font-condensed text-base font-bold uppercase leading-tight tracking-wide text-ink-900">
              Insamlingsstatistik
            </div>
          </div>
          <div className="text-right">
            <div className="font-condensed text-2xl font-bold leading-none text-brand-500">35 000</div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">ton/år</div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <a
          href="tel:+4684455100"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-95"
        >
          <Phone size={15} strokeWidth={2.2} />
          Ring oss
        </a>
        <button
          onClick={() => navigate('kontakt')}
          className="flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide text-ink-700 transition hover:border-brand-300 hover:bg-brand-50/60 hover:text-brand-700"
        >
          <Mail size={15} strokeWidth={2.2} />
          Kontakt
        </button>
      </div>
    </div>
  );
}
