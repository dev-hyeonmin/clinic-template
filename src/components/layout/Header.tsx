'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/layout/Logo';
import MobileNavigation from '@/components/layout/menu/MobileNavigation';
import PCNavigation from '@/components/layout/menu/PCNavigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-10 w-full border-b border-zinc-100 transition-colors duration-200 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="site-width flex items-center justify-between py-4">
        <Logo />

        <PCNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
