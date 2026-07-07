import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/client-layout';

export const metadata: Metadata = {
  title: "DevilsLab — Launch Online. Build Your Systems. Generate Qualified Leads.",
  description:
    "DevilsLab helps startups, agencies, and small businesses build websites, MVPs, mailing systems, CRM trackers, dashboards, and lead-generation systems. Book a free 15-minute Growth Audit.",
  keywords: "website development, MVP development, lead generation system, CRM setup, business launch, growth system, startup website, agency website, mailing setup, dashboard build, devilslab",
  icons: {
    icon: [
      { url: "/images/icondsl.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/images/icondsl.png",
    apple: "/images/icondsl.png",
  },
  openGraph: {
    title: "DevilsLab — Launch Online. Build Your Systems. Generate Qualified Leads.",
    description: "We build websites, MVPs, lead-generation systems, CRM trackers, and dashboards for startups, agencies, and small businesses. Book a 15-minute Growth Audit.",
    type: "website",
    locale: "en_US",
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
