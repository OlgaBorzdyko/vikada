import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import theme from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  )
}
export default App
