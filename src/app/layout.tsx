import { Nunito } from 'next/font/google';

import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import Navbar from '@/components/navbar/Navbar';
import SearchModal from '@/components/modals/SearchModal';
import ClientOnly from '@/components/ClientOnly';
import RentModal from '@/components/modals/RentModal';

import ToasterProvider from '@/providers/ToasterProvider';
import AuthProvider from '@/providers/AuthProvider';

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
        <AuthProvider>
          <ClientOnly>
            <ToasterProvider />
            <SearchModal />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar />
          </ClientOnly>
          <div className='pb-20 pt-28'>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
