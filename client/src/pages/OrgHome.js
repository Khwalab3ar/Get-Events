import { useLocation } from 'react-router-dom'

const OrgHome = () => {
  const location = useLocation()
  const userData = location.state.found
  return (
    <div>
      <h1>You made it! {userData.name}</h1>
    </div>
  )
}

export default OrgHome
