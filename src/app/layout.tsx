import { Nunito } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import './globals.css';
import Modal from '@/components/modals/Modal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
          <Modal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
