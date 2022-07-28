import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Edit from '../components/Edit'
import CreateEvent from '../components/CreateEvent'
import Events from '../components/Events'

const OrgHome = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const userData = location.state.found
  const [editDets, setEditDets] = useState(false)
  const [eventDet, setEventDet] = useState(false)
  let form

  const handleEdit = () => {
    setEditDets(true)
  }
  const handleCreateEvent = () => {
    setEventDet(true)
  }

  const handleClick = () => {
    setEditDets(false)
    setEventDet(false)
  }

  const handleLogout = () => {
    navigate('/')
  }
  form = ''
  if (editDets) {
    form = <Edit id={userData._id} finish={handleClick} />
  }
  if (eventDet) {
    form = <CreateEvent id={userData._id} finish={handleClick} />
  }
  return (
    <div className="org-home-page">
      <h1>Welcome {userData.name}</h1>
      <div className="user-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleCreateEvent}>Create Event</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {form}
      <h2>Company's Events</h2>
      <Events id={userData._id} />
      <h2>All Events</h2>
      <Events />
    </div>
  )
}

export default OrgHome
