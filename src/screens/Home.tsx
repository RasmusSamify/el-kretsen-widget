import { Sparkles, Coins, MapPin, ClipboardCheck, Phone, BookOpen, ArrowRight } from 'lucide-react';
import { Tile } from '../components/Tile';
import type { ScreenProps } from './types';

export function HomeScreen({ navigate }: ScreenProps) {
  return (
    <div className="space-y-4 px-5 pb-4 pt-5 animate-fade-up">
      <section>
        <div className="font-condensed text-2xl font-bold leading-tight text-ink-900">
          Sveriges insamlings&shy;system för
          <span className="text-brand-500"> elektronik &amp; batterier</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
          Hitta svar direkt — eller fråga ELvis, vår AI-assistent.
        </p>
      </section>

      <Tile
        icon={Sparkles}
        label="Fråga ELvis"
        sub="AI-assistent · svar på sekunder"
        variant="featured"
        onClick={() => navigate('chat')}
        trailing={
          <div className="mt-3 flex items-center gap-2 text-xs text-white/85">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Live nu
            <ArrowRight size={14} strokeWidth={2} className="ml-auto transition group-hover:translate-x-0.5" />
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-3">
        <Tile
          icon={Coins}
          label="Avgifter 2026"
          sub="Aktuell prislista"
          onClick={() => navigate('avgifter')}
        />
        <Tile
          icon={MapPin}
          label="Insamlingsplats"
          sub="Hitta närmaste"
          onClick={() => navigate('insamling')}
        />
        <Tile
          icon={ClipboardCheck}
          label="Bli producent"
          sub="Anmäl ditt företag"
          badge="Snabbt"
          onClick={() => navigate('producent')}
        />
        <Tile
          icon={BookOpen}
          label="Producentansvar"
          sub="Lagar &amp; regler"
          onClick={() => navigate('chat')}
        />
      </div>

      <button
        onClick={() => navigate('kontakt')}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-200 hover:bg-brand-50/60 hover:text-brand-700"
      >
        <Phone size={16} strokeWidth={2} />
        Kontakta El-kretsen
      </button>
    </div>
  );
}
