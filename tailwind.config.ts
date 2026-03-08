import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/*.{ts,tsx}', './app/src/*.{ts,tsx}'],
  theme: {
    extend: {
      // Your custom theme extensions go here
    },
  },
  plugins: [],
}

export default config
