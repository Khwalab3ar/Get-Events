import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Edit from '../components/Edit'
import CreateEvent from '../components/CreateEvent'
import Events from '../components/Events'
import axios from 'axios'
import { BASE_URL } from '../globals'

const OrgHome = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const user = location.state.found
  const [editDets, setEditDets] = useState(false)
  const [eventDet, setEventDet] = useState(false)
  const [userData, setUserData] = useState(user)
  let form

  /*useEffect(() => {
    const getOrgData = async () => {
      const res = await axios.get(`${BASE_URL}organization/search/${user._id}`)
      setUserData(res.data)
    }
    getOrgData()
  }, [editDets])*/

  const handleEdit = () => {
    setEditDets(true)
  }
  const handleCreateEvent = () => {
    setEventDet(true)
  }

  const handleClick = () => {
    setEditDets(false)
    setEventDet(false)
    window.location.reload(true)
    form = ''
  }

  const handleLogout = () => {
    navigate('/')
  }
  //form = ''
  if (editDets) {
    form = <Edit id={user._id} finish={handleClick} />
  }
  if (eventDet) {
    form = <CreateEvent orgData={userData} finish={handleClick} />
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
      <Events id={user._id} />
      <h2>All Events</h2>
      <Events />
    </div>
  )
}

export default OrgHome
