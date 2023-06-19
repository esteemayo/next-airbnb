import { Nunito } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import RegisterModal from '@/components/modals/RegisterModal';
import ClientOnly from '@/components/ClientOnly';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modals/LoginModal';
import AuthProvider from '@/providers/AuthProvider';
import RentModal from '@/components/modals/RentModal';
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
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
