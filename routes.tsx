import { Route, Routes } from 'react-router-dom'

import AuthorizationPage from './src/components/authorization/AuthorizationPage'
import HomePage from './src/components/home/HomePage'
import RegistrationForm from './src/components/registration/RegistrationForm'
import MapPage from './src/MapPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<MapPage />} path="/map" />
      <Route element={<AuthorizationPage />} path="/auth" />
      <Route element={<RegistrationForm />} path="/registration" />
    </Routes>
  )
}

export default AppRoutes
