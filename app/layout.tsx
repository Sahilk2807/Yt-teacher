// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import AdBlockDetector from './components/AdBlockDetector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YouTube Teacher - Free Tools for YouTube Creators',
  description: 'The ultimate free toolkit for YouTube creators. Check channel monetization, calculate earnings, extract video tags, and get tips to grow your channel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* AdBlock Detector Component */}
        <AdBlockDetector />
        
        {/* Header Adsterra Ad Code */}
        <div className="ad-container text-center py-2 bg-gray-100">
           {/* PASTE YOUR ADSTERRA BANNER AD CODE HERE */}
           <p className="text-sm text-gray-500">Advertisement</p>
        </div>

        <Header />
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Footer Adsterra Popunder/Social Bar Ad Code */}
        {/* Note: Place popunder scripts just before the closing </body> tag */}
        <Script
          id="adsterra-popunder"
          strategy="lazyOnload"
        >
          {`
            // PASTE YOUR ADSTERRA POPUNDER OR SOCIAL BAR SCRIPT HERE
          `}
        </Script>
      </body>
    </html>
  );
}