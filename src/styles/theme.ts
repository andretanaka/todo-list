import { DefaultTheme as Theme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    fontFamily: { [key in keyof typeof fontFamily]: string }
    mediaQueries: { [key in keyof typeof mediaQueries]: string }
    spacing: (space: number) => number
  }
}

export const fontFamily = {
  Poppins: 'Poppins Regular',
  'Poppins Bold': 'Poppins Bold',
}

export const themeColors = {
  red: '#FF0000',
  black: '000',
  white: '#FFF',
  gray1: '#d3dae2',
}

export const gridConfig = {
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
}

export const mediaQueries = {
  xs: `(max-width: ${gridConfig.breakpoints.xs}px)`,
  smUp: `(min-width: ${gridConfig.breakpoints.sm}px)`,
  mdUp: `(min-width: ${gridConfig.breakpoints.md}px)`,
  lgUp: `(min-width: ${gridConfig.breakpoints.lg}px)`,
  xlUp: `(min-width: ${gridConfig.breakpoints.xl}px)`,
}

const theme: Theme = {
  colors: themeColors,
  fontFamily,
  mediaQueries,
  spacing: (number) => number * 8,
}

export default theme
