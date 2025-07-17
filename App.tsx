import { CssBaseline, ThemeProvider } from '@mui/material'

import MapPage from './src/MapPage'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MapPage />
    </ThemeProvider>
  )
}
export default App
