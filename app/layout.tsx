import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'José de Jesús Hernández Vázquez - Portfolio Académique',
  description: 'Portfolio académique de José de Jesús Hernández Vázquez, ingénieur en systèmes informatiques spécialisé en IoT, développement web et intelligence artificielle.',
  keywords: 'portfolio, ingénieur, systèmes informatiques, IoT, développement web, intelligence artificielle, José Hernández',
  authors: [{ name: 'José de Jesús Hernández Vázquez' }],
  openGraph: {
    title: 'José de Jesús Hernández Vázquez - Portfolio Académique',
    description: 'Découvrez mon parcours en ingénierie informatique et mes projets innovants en IoT et IA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}