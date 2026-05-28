import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';

export const metadata: Metadata = {
  title: 'Smart Curtains Kenya | Automated Blinds & Motorized Curtains',
  description: 'Upgrade your home with premium smart curtains and automated blinds in Kenya. Smart home window treatments with remote and voice control on smartcurtains.co.ke.',
  keywords: 'smart curtains Kenya, automated blinds Nairobi, motorized curtains, electric curtains Kenya, smart home window treatments',
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
