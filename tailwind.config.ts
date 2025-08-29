import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			fontSize: {
				'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'hero-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				'display-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Luxury accent colors
				amber: {
					700: "#B45309",
					600: "#D97706",
				},
			},
			backgroundImage: {
				'gradient-amber': 'var(--gradient-amber)',
				'gradient-moroccan': 'var(--gradient-moroccan)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-charcoal': 'var(--gradient-charcoal)'
			},
			boxShadow: {
				'subtle': 'var(--shadow-subtle)',
				'medium': 'var(--shadow-medium)',
				'elevated': 'var(--shadow-elevated)',
				'amber': 'var(--shadow-amber)',
				'emerald': 'var(--shadow-emerald)'
			},
			borderRadius: {
				'moroccan': '12px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			letterSpacing: {
				'luxury': '0.05em',
				'wide': '0.1em'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'120': '30rem',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { opacity: '1', transform: 'translateX(0)' },
					'100%': { opacity: '0', transform: 'translateX(100%)' }
				},
				'luxury-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'draw-line': {
					'0%': { strokeDasharray: '0 100' },
					'100%': { strokeDasharray: '100 0' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'slide-down': 'slide-down 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'slide-out-right': 'slide-out-right 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'luxury-float': 'luxury-float 4s ease-in-out infinite',
				'draw-line': 'draw-line 1.5s ease-out',
				'scale-in': 'scale-in 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elegant': 'cubic-bezier(0.25, 0.8, 0.25, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
