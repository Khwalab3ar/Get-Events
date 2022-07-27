import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div>
      <h1>You have sucessfully created an Account!</h1>
      <button onClick={handleClick}>Click to Login!</button>
    </div>
  )
}

export default Success
