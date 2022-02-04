import {BrowserRouter} from 'react-router-dom'
import {StrictMode} from 'react'
import {render} from 'react-dom'
import App from './App'
import './index.css'

const root = document.getElementById('root')

render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>, 
  root
)
