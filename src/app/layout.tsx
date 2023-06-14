import { Nunito } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Modal from '@/components/modals/Modal';
import RegisterModal from '@/components/modals/RegisterModal';
import ClientOnly from '@/components/ClientOnly';
import './globals.css';
import ToasterProvider from '@/providers/ToasterProvider';

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
          <ToasterProvider />
          <Navbar />
          <RegisterModal />
          {/* <Modal actionLabel='Submit' isOpen title='Login Page' /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
