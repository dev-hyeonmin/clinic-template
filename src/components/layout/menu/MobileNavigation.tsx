import FullScreenMenu from '@/components/layout/menu/FullScreenMenu';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function MobileNavigation() {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);

  const toggleFullScreenMenu = () => {
    setIsFullScreenMenuOpen((curr) => !curr);
  };

  return (
    <div className="md:hidden">
      <Menu onClick={toggleFullScreenMenu} className="text-foreground" />
      {isFullScreenMenuOpen && <FullScreenMenu closeFullScreenMenu={toggleFullScreenMenu} />}
    </div>
  );
}
