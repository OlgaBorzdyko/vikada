import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalStyles from './GlobalStyles'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
)
