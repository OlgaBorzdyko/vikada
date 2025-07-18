import { createTheme } from '@mui/material/styles'

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
    fontSize: 14, //basic

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
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '.15px'
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
          padding: '0 72px 42px 72px'
        }
      }
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true
      }
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
})

export default theme
