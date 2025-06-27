'use client';

import Logo from '@/components/layout/Logo';
import FullScreenMenu from '@/components/layout/FullScreenMenu';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);

  const toggleFullScreenMenu = () => {
    setIsFullScreenMenuOpen((curr) => !curr);
  };

  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="site-width flex items-center justify-between border-b border-zinc-100 py-4">
        <Logo />
        <Menu onClick={toggleFullScreenMenu} className="text-foreground md:none" />
      </div>

      {isFullScreenMenuOpen && <FullScreenMenu closeFullScreenMenu={toggleFullScreenMenu} />}
    </header>
  );
}
