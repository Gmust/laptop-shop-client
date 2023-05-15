import { EffectorNext } from '@effector/next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

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
    <EffectorNext>
      <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
      {children}
    </EffectorNext>
    </body>
    </html>
  );
}
