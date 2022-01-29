import {render} from '@testing-library/react'
import App from './App'

const mockFetch = data => 
  jest(() => Promise.resolve({ json: () => data }))

test('renders learn react link', () => {
  render(<App />)
})
