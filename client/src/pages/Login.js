import CreateAccount from '../components/CreateAccount'
import UserLogin from '../components/UserLogin'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Login = () => {
  const [newUser, toggleNewUser] = useState(false)
  const [users, setUsers] = useState([])
  const [typeOf, setTypeOf] = useState('')
  useEffect(() => {
    const getAllPersonals = async () => {
      const res = await axios.get(`${BASE_URL}/personals`)
      setUsers(res.data)
    }
    const getAllOrgs = async () => {
      const res = await axios.get(`${BASE_URL}/organizations`)
      setUsers(res.data)
    }
  }, [])
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
