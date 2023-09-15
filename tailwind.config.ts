import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
  
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    extend: {
      borderRadius:{
        xlPlus:"20px",
        lgPlus:"10px"
      },
      fontSize:{
        xxs:"10px"
      }
    },
  },
  plugins: [],
}
export default config
