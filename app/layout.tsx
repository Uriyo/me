import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import CustomCursor from '@/components/CustomCursor';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kushagra Gangwar",
  description: 'Kushagra Gangwar is a Software Engineer with expertise in full-stack development, specializing in Next.js, React.js, Node.js, and cloud platforms. Explore insights into web development and software design. Interested in working together? Connect with Kushagra to collaborate on innovative projects and turn ideas into reality.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <CustomCursor />
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}