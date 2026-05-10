import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: '#0b1020',
        surface2: '#11182d',
        border: 'rgba(255,255,255,0.08)',
        accent: '#8b5cf6',
        accent2: '#22d3ee',
        text: '#e5e7eb',
        muted: '#9ca3af'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,0.25), 0 10px 40px rgba(139,92,246,0.15)'
      },
      backgroundImage: {
        premium: 'radial-gradient(circle at top, rgba(139,92,246,0.22), transparent 35%), radial-gradient(circle at right, rgba(34,211,238,0.15), transparent 25%)'
      }
    }
  },
  plugins: []
} satisfies Config;
