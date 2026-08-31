import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        design: {
          primary: '#494fdf',
          'primary-bright': '#4f55f1',
          'primary-deep': '#3a40c4',
          'canvas-dark': '#000000',
          'canvas-light': '#ffffff',
          'surface-soft': '#f4f4f4',
          'surface-card': '#ffffff',
          'surface-elevated': '#16181a',
          ink: '#191c1f',
          body: '#1f2226',
          charcoal: '#3a3d40',
          mute: '#505a63',
          ash: '#5c5e60',
          stone: '#8d969e',
          faint: '#c9c9cd',
          'on-dark': '#ffffff',
          'hairline-light': '#e2e2e7',
          'hairline-strong': '#191c1f',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        none: '0px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        full: '9999px',
        DEFAULT: 'var(--r-lg)',
      },
      spacing: {
        'section': '88px',
        'band': '120px',
        'card': '32px',
      },
      fontSize: {
        'display-xl': ['clamp(48px,6vw,80px)', { lineHeight: '1.0', letterSpacing: '-0.8px', fontWeight: '500' }],
        'display-lg': ['clamp(32px,4vw,48px)', { lineHeight: '1.21', letterSpacing: '-0.48px', fontWeight: '500' }],
        'display-md': ['clamp(28px,3.5vw,40px)', { lineHeight: '1.2', letterSpacing: '-0.4px', fontWeight: '500' }],
        'heading-lg': ['32px', { lineHeight: '1.19', letterSpacing: '-0.32px', fontWeight: '500' }],
        'heading-md': ['24px', { lineHeight: '1.33', letterSpacing: '0', fontWeight: '500' }],
        'heading-sm': ['20px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.56', letterSpacing: '-0.09px' }],
        'body-md': ['16px', { lineHeight: '1.5', letterSpacing: '0.24px' }],
        'body-sm': ['14px', { lineHeight: '1.43' }],
        'caption': ['13px', { lineHeight: '1.4' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;