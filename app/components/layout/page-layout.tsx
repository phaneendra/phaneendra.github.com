import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { BlurEffect } from '@/components/widgets/blur-effect';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      <BlurEffect />
    </div>
  );
}
