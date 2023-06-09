import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Providers } from '@/app/Providers';
import { Header } from '@components/modules/Header/Header';
import { SearchBar } from '@components/modules/SearchBar/SearchBar';
import { Footer } from '@components/modules/Footer/Footer';
import { EffectorNext } from '@effector/next';

export const metadata = {
  title: 'Laptop shop',
  description: 'Created by next and nest js!',
  viewport: 'width=device-width, initial-scale=1, user-scalable=no',
  icons: {
    icon: '/img/logo.svg'
  }
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang='en'>
    <body>
    <Providers>
        <Toaster
          position='bottom-left'
          reverseOrder={true}
        />
        <Header />
        <SearchBar />
        {children}
        <Footer />
    </Providers>
    </body>
    </html>
  );
}
