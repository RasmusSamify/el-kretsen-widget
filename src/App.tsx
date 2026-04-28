import { useCallback, useState } from 'react';
import { Coins, MapPin, ClipboardCheck, Phone } from 'lucide-react';
import { LauncherButton } from './components/LauncherButton';
import { WidgetHeader } from './components/WidgetHeader';
import { HomeScreen } from './screens/Home';
import { ChatScreen } from './screens/Chat';
import { StubScreen } from './screens/Stub';
import type { ScreenId } from './screens/types';

export default function App() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<ScreenId[]>(['home']);
  const current = history[history.length - 1];

  const navigate = useCallback((target: ScreenId) => {
    setHistory((prev) => {
      if (target === 'home') return ['home'];
      if (prev[prev.length - 1] === target) return prev;
      return [...prev, target];
    });
  }, []);

  const back = useCallback(() => {
    setHistory((prev) => (prev.length <= 1 ? ['home'] : prev.slice(0, -1)));
  }, []);

  const renderScreen = () => {
    switch (current) {
      case 'home':
        return <HomeScreen navigate={navigate} />;
      case 'chat':
        return <ChatScreen />;
      case 'avgifter':
        return (
          <StubScreen
            navigate={navigate}
            icon={Coins}
            title="Avgifter 2026"
            description="Här kommer aktuell avgiftslista per produktkategori, med uppslag för enskilda produkter."
            hint="Avgiftskalkylator + nedladdningsbar prislista kopplas in i nästa steg."
          />
        );
      case 'insamling':
        return (
          <StubScreen
            navigate={navigate}
            icon={MapPin}
            title="Hitta insamlingsplats"
            description="Sök på postnummer eller ort för att hitta närmaste insamlingsplats för elektronik och batterier."
            hint="Sökfält och karta över insamlingsplatser kopplas in i nästa steg."
          />
        );
      case 'producent':
        return (
          <StubScreen
            navigate={navigate}
            icon={ClipboardCheck}
            title="Bli producent"
            description="Anmäl ditt företag till El-kretsens producentansvarssystem och få direktåtkomst till rapportering och fakturor."
            hint="Anmälningsflöde med stegvis formulär kopplas in i nästa steg."
          />
        );
      case 'kontakt':
        return (
          <StubScreen
            navigate={navigate}
            icon={Phone}
            title="Kontakta oss"
            description="Få direktkontakt med rätt avdelning på El-kretsen — kundservice, producentanmälan eller fakturafrågor."
            hint="Smart routing baserad på frågetyp kopplas in i nästa steg."
          />
        );
    }
  };

  const isChat = current === 'chat';

  return (
    <div className="fixed bottom-5 right-5 z-[2147483000] flex flex-col items-end gap-3 font-sans">
      {open && (
        <div className="flex w-[400px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-brand-50 to-white shadow-widget animate-fade-up max-h-[calc(100dvh-100px)]">
          <WidgetHeader
            canGoBack={history.length > 1}
            onBack={back}
            onClose={() => setOpen(false)}
          />
          <div className={`flex-1 ${isChat ? 'flex flex-col overflow-hidden' : 'overflow-y-auto'}`}>
            {renderScreen()}
          </div>
          <footer className="flex items-center justify-center gap-1.5 border-t border-ink-100 bg-white py-2 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Powered by Samify
          </footer>
        </div>
      )}
      <LauncherButton open={open} onClick={() => setOpen((o) => !o)} />
    </div>
  );
}
