import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
}
