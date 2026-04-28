import { useState } from 'react';
import { LauncherButton } from './components/LauncherButton';
import { ChatPanel } from './components/ChatPanel';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[2147483000] flex flex-col items-end gap-3 font-sans">
      {open && <ChatPanel onClose={() => setOpen(false)} />}
      <LauncherButton open={open} onClick={() => setOpen((o) => !o)} />
    </div>
  );
}
