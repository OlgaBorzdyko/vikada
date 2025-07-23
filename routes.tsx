import { Route, Routes } from 'react-router-dom'

import AuthorizationPage from './src/components/authorization/AuthorizationPage'
import HomePage from './src/components/home/HomePage'
import MapPage from './src/MapPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<MapPage />} path="/map" />
      <Route element={<AuthorizationPage />} path="/auth" />
    </Routes>
  )
}

export default AppRoutes
