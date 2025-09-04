import { createTheme } from '@mui/material/styles'

const DESIGN_WIDTH = 1440

const clampFont = (px: number, minPx = px * 0.8, maxPx = px * 1.2) =>
  `clamp(${minPx}px, ${(px / DESIGN_WIDTH) * 100}vw, ${maxPx}px)`

const clampVW = (px: number, minPx = 16, maxPx = px) =>
  `clamp(${minPx}px, ${(px / DESIGN_WIDTH) * 100}vw, ${maxPx}px)`

declare module '@mui/material/styles' {
  interface Theme {
    fn: {
      clampVW: (px: number, minPx?: number, maxPx?: number) => string
      clampFont: (px: number, minPx?: number, maxPx?: number) => string
    }
  }
  interface ThemeOptions {
    fn?: {
      clampVW?: (px: number, minPx?: number, maxPx?: number) => string
      clampFont?: (px: number, minPx?: number, maxPx?: number) => string
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
      fontSize: clampFont(14, 12, 16),
      fontWeight: 400,
      lineHeight: clampFont(16, 14, 18)
    },
    h1: {
      fontSize: clampFont(20, 18, 28),
      fontWeight: 400,
      lineHeight: clampFont(24, 20, 32)
    },
    h2: {
      fontSize: clampFont(16, 14, 20),
      fontWeight: 500,
      lineHeight: clampFont(20, 18, 24),
      letterSpacing: '.15px'
    },
    h3: {
      fontSize: clampFont(20, 18, 28),
      fontWeight: 700,
      lineHeight: clampFont(24, 20, 32)
    },
    h4: {
      fontWeight: 600,
      fontStyle: 'Medium',
      fontSize: clampFont(48, 32, 64),
      lineHeight: '100%',
      color: '#4F4F4F'
    },
    h5: {
      fontWeight: 500,
      fontStyle: 'Regular',
      fontSize: clampFont(32, 24, 40),
      lineHeight: '100%',
      color: '#4F4F4F'
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
        '*': { boxSizing: 'border-box' },
        '*::before': { boxSizing: 'border-box' },
        '*::after': { boxSizing: 'border-box' }
      }
    }
  },

  fn: {
    clampVW,
    clampFont
  }
})

export default theme
