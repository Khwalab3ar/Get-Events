import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UserEdit from '../components/UserEdit'
import CreateEvent from '../components/CreateEvent'
import Events from '../components/Events'

const UserHome = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const userData = location.state.found
  const [editDets, setEditDets] = useState(false)
  let form

  const handleEdit = () => {
    setEditDets(true)
  }

  const handleClick = () => {
    setEditDets(false)
  }

  const handleLogout = () => {
    navigate('/')
  }
  if (editDets) {
    form = <UserEdit id={userData._id} finish={handleClick} />
  }
  return (
    <div className="user-home-page">
      <div className="user-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>
        Welcome {userData.firstName} {userData.lastName}
      </h1>
      <p>Glad to have you back. Here are your events.</p>
      {form}
      {/*<Events id={userData._id} />*/}
      <h2>All Events</h2>
      <Events />
    </div>
  )
}

export default UserHome
