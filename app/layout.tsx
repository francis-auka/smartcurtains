import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';

export const metadata: Metadata = {
  metadataBase: new URL('https://smartcurtains.co.ke'),
  title: {
    default: 'Smart Curtains Kenya | Automated Blinds & Motorized Curtains',
    template: '%s | Smart Curtains Kenya',
  },
  description: 'Upgrade your home with premium smart curtains and automated blinds in Kenya. Smart home window treatments with remote and voice control on smartcurtains.co.ke.',
  keywords: 'smart curtains Kenya, automated blinds Nairobi, motorized curtains, electric curtains Kenya, smart home window treatments, intelligent blinds Kenya',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://smartcurtains.co.ke',
    siteName: 'Smart Curtains Kenya',
    title: 'Smart Curtains Kenya | Automated Blinds & Motorized Curtains',
    description: 'Upgrade your home with premium smart curtains and automated blinds in Kenya. Smart home window treatments with remote and voice control.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Smart Curtains Kenya Logo',
      },
    ],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Curtains Kenya',
    description: 'Motorized smart curtains and automated blinds. Shop now at smartcurtains.co.ke.',
    images: ['/images/logo.png'],
  },
  verification: {
    google: "UXUPKp0xu1zyNcbUiRDVda2pXAk_ssvilNUDUR2NI78"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
