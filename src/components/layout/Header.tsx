'use client';

import Logo from '@/components/layout/Logo';
import MobileNavigation from '@/components/layout/menu/MobileNavigation';
import PCNavigation from '@/components/layout/menu/PCNavigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-zinc-100">
      <div className="site-width flex items-center justify-between py-4">
        <Logo />

        <PCNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
