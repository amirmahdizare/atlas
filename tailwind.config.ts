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
        'mobile': '28px',
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


      },
      borderRadius: {
        'circle': '50%'
      },
      colors: {
        'tomato': '#F3643C',
        'coral': '#FF734C',
        'robin-egg': '#05BAC6',
        'mint-green': '#00A3AD',
        'robin-egg-lighter': '#3FD5DF',
        'raisin-black': '#1C1C28',
        'space-codet': '#28293D',
        'ultra-violet': '#555770',
        'french-gray': '#C7C9D9',
        'ghost-white': '#E4E4EB',
        'anti-flash-white': '#EBEBF0',
        'anti-flash-white-lighter': '#F2F2F5',
        'seasalt': '#FAFAFC',
        'imperial-red': '#E53535',
        'vermilion': '#FF3B3B',
        'bittersweet': '#FF5C5C',
        'light-red': '#FF8080',
        'misty-rose': '#FFE5E5',
        'jade': '#05A660',
        'emerald': '#06C270',
        'emerald-lighter': '#39D98A',
        'aquamarine': '#57EBA1',
        'honeydew': '#E3FFF1',
        'tangerine': '#E57A00',
        'dark-orange': '#FF8800',
        'orange': '#FDAC42',
        'jasmine': '#FCCC75',
        'cosmic-latte': '#FFF8E5',
        'seashell': '#FFF2EE',
        'sapphire': '#004FC4',
        'royal-blue': '#0063F7',
        'cornflower-blue': '#5B8DEF',
        'jordy-blue': '#9DBFF9',
        'alice-blue': '#E5F0FF',
        'saffron': "#E5B800",
        'jonquil': '#FFCC00',
        'mustard': '#FDDD48',
        'maize': '#FDED72',
        'beige': '#FFFEE5',
        'verdigris': '#00B7C4',
        'robin-egg-blue-00': '#00CFDE',
        'electric-blue': '#73DFE7',
        'celeste': '#A9EFF2',
        'celeste-lighter': '#E5FFFF',
        'indigo': '#4D0099',
        'chrysler-blue': '#6600CC',
        'amethyst': '#AC5DD9',
        'plum': '#DDA5E9',
        'pale-purple': '#FFE5FF'
      }
    },
  },
  plugins: [],
}
export default config
