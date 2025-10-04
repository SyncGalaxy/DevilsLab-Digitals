import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/client-layout';

export const metadata: Metadata = {
  title: "DevilsLab - Engineering Digital Realities",
  description:
    "DevilsLab pioneers AI solutions, Web3 innovation, business transformation, and cutting-edge research to shape the digital future.",
  icons: {
    // favicon for the browser tab / URL bar
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "38x38" },
      // Optional extra sizes if you have them:
      // { url: "/images/icondsl-16.png", type: "image/png", sizes: "16x16" },
      // { url: "/images/icondsl-48.png", type: "image/png", sizes: "48x48" },
    ],
    // nice-to-haves:
    shortcut: "/images/logo.png",
    apple: "/images/logo.png", // iOS home screen icon (ideally 180x180)
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
