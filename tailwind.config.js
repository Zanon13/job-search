/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Open Sans', ..._fontFamily.sans]
    },
    colors: {
      'brand-gray-1': '#DADCE0',
      'brand-blue-1': '#1967D2',
      'brand-green-1': '#137333'
    }
  }
}
export const plugins = []
