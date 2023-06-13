import { Nunito } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Modal from '@/components/modals/Modal';
import ClientOnly from '@/components/ClientOnly';
import './globals.css';

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
          <Modal actionLabel='Submit' isOpen title='Login Page' />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
