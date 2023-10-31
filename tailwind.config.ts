import type { Config } from 'tailwindcss'

const rem = 35

const createTypography = (name: string, sizeRem: number) => {
  let fontWeight = [{
    name: 'normal', value: 400,
  },
  { name: 'bolder', value: 700, },
  { name: 'light', value: 300, }
  ]
  let obj: { [key: string]: any } = {}
  fontWeight.forEach(weight => {
    obj[`${name}-${weight.name}`] = [sizeRem + 'rem', {
      lineHeight: '1',
      fontWeight: weight.value,
    }]
  });
  return obj
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'desktop': '35px',
        'mobile': '25px',
        ...createTypography('h1', rem / rem),
        ...createTypography('h2', 31 / rem),
        ...createTypography('h3', 23 / rem),
        ...createTypography('h4', 13 / rem),
        ...createTypography('h5', 15 / rem),
        ...createTypography('h6', 17 / rem),
        ...createTypography('hero-h1', 41 / rem),
        ...createTypography('hero-h2', 39 / rem),
        ...createTypography('body-1', 17 / rem),
        ...createTypography('body-2', 15 / rem),
        ...createTypography('body-3', 13 / rem),
        // 'h1-normal':
        //   ['1rem', { fontWeight: '700', lineHeight: '150%' },
        //   ]


      }
    },
  },
  plugins: [],
}
export default config
