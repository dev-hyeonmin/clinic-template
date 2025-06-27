import Link from 'next/link';
import Menu from '@/components/layout/Menu';
import { X } from 'lucide-react';

interface FullScreenMenuProps {
  closeFullScreenMenu: () => void;
}

export default function FullScreenMenu({ closeFullScreenMenu }: FullScreenMenuProps) {
  return (
    <div className="bg-background fixed inset-0 z-10 h-full w-full px-6">
      <button type="button" onClick={closeFullScreenMenu} className="absolute top-4 right-4">
        <X className="text-foreground" strokeWidth={1.5} size={30} />
      </button>

      <div className="flex h-full flex-col justify-center gap-10 pb-16">
        <Menu />
      </div>

      <div className="border-foreground/40 absolute bottom-0 left-0 flex w-full border-t">
        <Link
          href={`/`}
          className="text-foreground border-foreground/40 flex flex-1 justify-center border-r py-6"
        >
          Reservation
        </Link>

        <Link href={`/`} className="text-foreground flex flex-1 justify-center py-6">
          Contact
        </Link>
      </div>
    </div>
  );
}
