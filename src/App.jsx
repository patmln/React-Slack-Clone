import AuthProvider from './contexts/AuthProvider'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/Routes'
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
