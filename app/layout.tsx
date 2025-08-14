import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/hooks/use-language';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
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