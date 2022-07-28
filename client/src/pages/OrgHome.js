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
    console.log(editDets)
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
    <div>
      {form}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleCreateEvent}>Create Event</button>
      <button onClick={handleLogout}>Logout</button>
      <Events id={userData._id} />
    </div>
  )
}

export default OrgHome
