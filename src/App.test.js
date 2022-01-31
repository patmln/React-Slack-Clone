import {render} from '@testing-library/react'
import App from './App'

const mockFetch = data => 
  jest(() => Promise.resolve({ json: () => data }))

describe('API testing', () => {
  test('should POST new registered user', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
})
