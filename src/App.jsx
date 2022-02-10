import AppRoutes from './components/routes/Routes'
import AuthProvider from './contexts/AuthProvider'
import {BrowserRouter} from 'react-router-dom'
import {StrictMode} from 'react'

export default() => (
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
