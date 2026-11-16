import { Cormorant_Garamond, Playfair_Display, Amiri, Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/animations.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-amiri',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F4F1EA',
};

export const metadata = {
  metadataBase: new URL('https://nesmin-ribin-wedding.com'),
  title: 'Nesmin & Ribin | Wedding Reception | 29 November 2026',
  description:
    'Join us to celebrate the wedding reception of Nesmin and Ribin on 29 November 2026 at Maharaja Convention Centre, Nilambur, Kerala.',
  keywords: [
    'Nesmin and Ribin Wedding',
    'Nesmin CP',
    'Ribin P',
    'Wedding Reception',
    'Maharaja Convention Centre',
    'Nilambur Kerala Wedding',
    'Islamic Wedding Invitation'
  ],
  authors: [{ name: 'Nesmin & Ribin' }],
  openGraph: {
    title: 'Nesmin & Ribin | Wedding Reception | 29 November 2026',
    description:
      'Join us to celebrate the wedding reception of Nesmin and Ribin on 29 November 2026 at Maharaja Convention Centre, Nilambur, Kerala.',
    url: 'https://nesmin-ribin-wedding.com',
    siteName: 'Nesmin & Ribin Wedding',
    images: [
      {
        url: '/images/card/invitation-card.jpg',
        width: 682,
        height: 1024,
        alt: 'Nesmin & Ribin Wedding Reception Invitation'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nesmin & Ribin | Wedding Reception',
    description:
      'Wedding Reception of Nesmin & Ribin on 29 November 2026 at Maharaja Convention Centre, Nilambur, Kerala.',
    images: ['/images/card/invitation-card.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/icon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${amiri.variable} ${inter.variable}`}
    >
      <body className="antialiased selection:bg-[#D8C8A9] selection:text-[#55432F]">
        {children}
      </body>
    </html>
  );
}
