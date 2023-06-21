import { Nunito } from 'next/font/google';

import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import RentModal from '@/components/modals/RentModal';

import ToasterProvider from '@/providers/ToasterProvider';
import Navbar from '@/components/navbar/Navbar';
import AuthProvider from '@/providers/AuthProvider';
import ClientOnly from '@/components/ClientOnly';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb',
};

export default async function RootLayout({
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
            <Navbar />
            <RentModal />
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
          <div className='pb-20 pt-28'>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
