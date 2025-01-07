import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import CustomCursor from '@/components/CustomCursor';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kushagra Gangwar",
  description: 'Explore the portfolio of Kushagra Gangwar, a passionate Software Engineer specializing in full-stack development with expertise in Nextjs, React.js, Node.js, cloud services, and more. Discover projects, achievements, and insights into the world of technology and innovation.',
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