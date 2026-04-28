import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; text: string };

const SUGGESTIONS = [
  'Vad innebär producentansvar för elektronik?',
  'Vilka regler gäller för batteriinsamling?',
  'Hur räknas avgifterna ut för 2026?',
];

export function ChatScreen() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: 'Hej! Jag är ELvis — fråga mig om producentansvar, batterier, avgifter eller insamling.',
    },
  ]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, pending]);

  const send = (text: string) => {
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
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex animate-fade-up ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-white shadow-sm'
                  : 'bg-white text-ink-800 ring-1 ring-ink-100'
              }`}
            >
              {m.role === 'assistant' && i === 0 && (
                <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
                  <Sparkles size={12} strokeWidth={2} />
                  ELvis
                </div>
              )}
              {m.text}
            </div>
          </div>
        ))}
        {pending && (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 ring-1 ring-ink-100">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400" />
            </div>
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="space-y-2 px-5 pb-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Förslag</div>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2 text-left text-sm text-ink-700 transition hover:border-brand-200 hover:bg-brand-50/60 hover:text-brand-700"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-ink-100 bg-white px-4 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv en fråga…"
          className="flex-1 bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
        />
        <button
          type="submit"
          disabled={!input.trim() || pending}
          aria-label="Skicka"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-white transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
        >
          <Send size={15} strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}
