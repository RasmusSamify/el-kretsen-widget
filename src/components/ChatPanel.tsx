import { useEffect, useRef, useState } from 'react';
import { Send, X, Sparkles, Recycle, Battery, MapPin } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; text: string };

const QUICK_ACTIONS = [
  { icon: Recycle, label: 'Producentansvar', prompt: 'Vad innebär producentansvar för elektronik?' },
  { icon: Battery, label: 'Batterier', prompt: 'Vilka regler gäller för batteriinsamling?' },
  { icon: MapPin, label: 'Insamlingsplatser', prompt: 'Hitta närmaste insamlingsplats' },
];

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: 'Hej! Jag är ELvis — El-kretsens digitala assistent. Fråga mig om producentansvar, batterier, avgifter eller hitta närmaste insamlingsplats.',
    },
  ]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, pending]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || pending) return;
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setPending(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: 'Backend ej kopplad än — i nästa steg svarar jag mot el-kretsen.se via RAG.',
        },
      ]);
      setPending(false);
    }, 700);
  };

  return (
    <div className="flex h-[640px] w-[400px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl bg-elk-cream font-sans shadow-widget">
      <header className="relative flex items-center justify-between bg-elk-forest px-5 py-4 text-elk-cream">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-elk-moss">
            <Sparkles size={18} strokeWidth={1.6} />
          </div>
          <div>
            <div className="font-condensed text-lg font-semibold uppercase tracking-wider">ELvis</div>
            <div className="text-xs text-elk-sage">El-kretsens assistent</div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Stäng"
          className="rounded-full p-1.5 text-elk-sage transition hover:bg-elk-moss/40 hover:text-elk-cream"
        >
          <X size={18} strokeWidth={1.6} />
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-elk-forest text-elk-cream'
                  : 'bg-white text-elk-ink shadow-sm'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {pending && (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-elk-moss [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-elk-moss [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-elk-moss" />
            </div>
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="px-5 pb-2">
          <div className="grid grid-cols-3 gap-2">
            {QUICK_ACTIONS.map(({ icon: Icon, label, prompt }) => (
              <button
                key={label}
                onClick={() => send(prompt)}
                className="flex flex-col items-center gap-1 rounded-xl bg-white px-2 py-3 text-xs font-medium text-elk-forest shadow-sm transition hover:bg-elk-sage/20"
              >
                <Icon size={18} strokeWidth={1.6} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-elk-sage/20 bg-white px-4 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ställ en fråga…"
          className="flex-1 bg-transparent text-sm text-elk-ink outline-none placeholder:text-elk-sage"
        />
        <button
          type="submit"
          disabled={!input.trim() || pending}
          aria-label="Skicka"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-elk-forest text-elk-cream transition hover:bg-elk-moss disabled:opacity-40"
        >
          <Send size={16} strokeWidth={1.8} />
        </button>
      </form>
    </div>
  );
}
