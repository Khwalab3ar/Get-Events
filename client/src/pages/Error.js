import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>Your Account was not create</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default Error
