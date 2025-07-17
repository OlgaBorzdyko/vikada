import { CssBaseline, ThemeProvider } from '@mui/material'

import Test from './src/test'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Test />
    </ThemeProvider>
  )
}
export default App
