const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lexend', ...fontFamily.sans]
			},
			backgroundImage: {
				'mesh-pattern': "url('./src/lib/static/mesh.svg')"
			}
		},
		colors: {
			neutral: {
				one: '#F8FAFC',
				two: '#F1F5F9',
				three: '#E2E8F0',
				four: '#CBD5E1',
				five: '#94A3B8',
				six: '#64748B',
				seven: '#475569',
				eight: '#334155',
				nine: '#1E293B',
				ten: '#0F172A'
			},
			brand: {
				one: '#EFEFFB',
				two: '#DEDFF7',
				three: '#B6B6ED',
				four: '#8D8EE2',
				five: '#6466D8',
				six: '#3B3ECE',
				seven: '#2B2DAB',
				eight: '#212283',
				nine: '#16185A',
				ten: '#0C0D31'
			}
		},
		fontSize: {
			'button-sm': [
				'1rem',
				{
					lineHeight: '1.5rem',
					fontWeight: '600'
				}
			],
			'button-base': [
				'1.125rem',
				{
					lineHeight: '1.75rem',
					fontWeight: '600'
				}
			],
			'headline-base': ['1.25rem', '1.75rem'],
			'headline-lg': ['1.5rem', '2rem'],
			'headline-xl': ['1.875rem', '2.25rem'],
			'headline-2xl': ['2.25rem', '2.5rem'],
			'headline-3xl': ['3rem', '1'],
			'headline-4xl': ['3.75rem', '1'],
			'paragraph-xsm': ['0.75rem', '1rem'],
			'paragraph-sm': ['0.875rem', '1.25rem'],
			'paragraph-base': ['1rem', '1.5rem'],
			'paragraph-lg': ['1.125rem', '1.75rem']
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
