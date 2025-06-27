import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </body>
  );
}
