import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import CustomCursor from '@/components/CustomCursor';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kushagra Gangwar",
  description: 'Welcome to my universe of code and creativity',
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
        </ThemeProvider>
      </body>
    </html>
  );
}