import { createTheme } from '@mui/material/styles'

const DESIGN_WIDTH = 1440

const clampVW = (px: number, minPx = 16, maxPx = px) =>
  `clamp(${minPx}px, ${(px / DESIGN_WIDTH) * 100}vw, ${maxPx}px)`

declare module '@mui/material/styles' {
  interface Theme {
    fn: {
      clampVW: (px: number, minPx?: number, maxPx?: number) => string
    }
  }
  interface ThemeOptions {
    fn?: {
      clampVW?: (px: number, minPx?: number, maxPx?: number) => string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#7174CD'
    },
    text: {
      primary: '#000000',
      secondary: '#999999'
    },
    background: {
      default: '#ffffff'
    }
  },

  typography: {
    fontFamily: `'Rubik', sans-serif`,
    fontSize: 14,

    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px'
    },

    h1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px'
    },
    h2: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '.15px'
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '24px'
    }
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true
      },
      styleOverrides: {
        root: {
          padding: '0 72px 42px 72px',
          boxSizing: 'border-box'
        }
      }
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `'Rubik', sans-serif`,
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '16px',
          color: '#000',
          backgroundColor: '#fff'
        },
        '*': {
          boxSizing: 'border-box'
        },
        '*::before': {
          boxSizing: 'border-box'
        },
        '*::after': {
          boxSizing: 'border-box'
        }
      }
    }
  },

  fn: {
    clampVW
  }
})

export default theme
