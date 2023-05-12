import './globals.css';


export const metadata = {
  title: 'Laptop shop',
  description: 'Created by next and nest js!',
  viewport: 'width-device-width',
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
    <body>{children}</body>
    </html>
  );
}
