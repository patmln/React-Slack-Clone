import {render, fireEvent} from '@testing-library/react'
import AuthProvider from '../contexts/AuthProvider'
import Login from '../components/routes/Login'

describe('API testing', () => {
  test('should log a user in', async() => {
    const {getByText} = render(
      <AuthProvider>
        <Login/>
      </AuthProvider>
    )
    const submit = getByText('Sign In')
    fireEvent.click(submit)
  })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
  test('renders learn react link', () => { })
})
