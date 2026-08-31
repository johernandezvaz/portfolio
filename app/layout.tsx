import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/hooks/use-language';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'José de Jesús Hernández Vázquez - Portfolio Académico',
  description: 'Portfolio académico de José de Jesús Hernández Vázquez, ingeniero en sistemas informáticos especializado en IoT, desarrollo web e inteligencia artificial.',
  keywords: 'portfolio, ingeniero, sistemas informáticos, IoT, desarrollo web, inteligencia artificial, José Hernández',
  authors: [{ name: 'José de Jesús Hernández Vázquez' }],
  openGraph: {
    title: 'José de Jesús Hernández Vázquez - Portfolio Académico',
    description: 'Descubre mi trayectoria en ingeniería informática y mis proyectos innovadores en IoT e IA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}