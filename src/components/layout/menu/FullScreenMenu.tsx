import Link from 'next/link';
import Menu from '@/components/layout/menu/Menu';
import { X } from 'lucide-react';
import Logo from '@/components/layout/Logo';

interface FullScreenMenuProps {
  closeFullScreenMenu: () => void;
}

export default function FullScreenMenu({ closeFullScreenMenu }: FullScreenMenuProps) {
  return (
    <div className="bg-background fixed inset-0 z-10 h-full w-full px-6">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <Logo />

        <button type="button" onClick={closeFullScreenMenu}>
          <X className="text-foreground" strokeWidth={1.5} size={30} />
        </button>
      </div>

      {/* Menu */}
      <div className="flex h-full flex-col justify-center gap-10 pb-32">
        <Menu className="text-foreground text-3xl font-medium" />
      </div>

      {/* SNS */}
      <div className="absolute bottom-0 left-0 flex w-full">
        <Link href={`/`} className="text-foreground flex flex-1 justify-center py-6 text-sm">
          Instagram
        </Link>

        <Link href={`/`} className="text-foreground flex flex-1 justify-center py-6 text-sm">
          Youtube
        </Link>

        <Link href={`/`} className="text-foreground flex flex-1 justify-center py-6 text-sm">
          Facebook
        </Link>
      </div>
    </div>
  );
}
