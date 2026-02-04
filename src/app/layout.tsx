import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/client-layout';

export const metadata: Metadata = {
  title: "Lead Generation Services in Hyderabad | Get Quality Inquiries in 7-10 Days - DevilsLab",
  description:
    "DevilsLab helps Hyderabad businesses get consistent, qualified leads through Google/Meta ads, landing pages & WhatsApp automation. Book your free lead strategy call today.",
  keywords: "lead generation hyderabad, b2b lead generation, google ads hyderabad, facebook ads services, landing page optimization, whatsapp business automation, local marketing agency hyderabad",
  icons: {
    icon: [
      { url: "/images/icondsl.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/images/icondsl.png",
    apple: "/images/icondsl.png",
  },
  openGraph: {
    title: "Lead Generation Services in Hyderabad | DevilsLab",
    description: "Get 20-30 qualified leads monthly with our 30-Day Lead Surge System. Trusted by 50+ Hyderabad businesses.",
    type: "website",
    locale: "en_IN",
    url: "https://devilslab.co.in",
    siteName: "DevilsLab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
