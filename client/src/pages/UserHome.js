import { useLocation } from 'react-router-dom'

const UserHome = () => {
  const location = useLocation()
  const userData = location.state.found
  console.log(location.state.found)
  return (
    <div>
      <h1>You made it! {userData.firstName}</h1>
    </div>
  )
}

export default UserHome
