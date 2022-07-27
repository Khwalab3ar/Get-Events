import CreateAccount from '../components/CreateAccount'
import UserLogin from '../components/UserLogin'
import { useState } from 'react'

const Login = () => {
  const [newUser, toggleNewUser] = useState(false)
  let form
  const handleSignUp = () => {
    toggleNewUser(true)
  }
  const handleLogin = () => {
    toggleNewUser(false)
  }
  form = newUser ? (
    <CreateAccount login={handleLogin} />
  ) : (
    <UserLogin signUp={handleSignUp} />
  )
  return <div>{form}</div>
}

export default Login
