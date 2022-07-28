import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const EventDetails = () => {
  const [org, setOrg] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const eventData = location.state.event
  const orgId = eventData.organization

  useEffect(() => {
    const getOrgData = async () => {
      const res = await axios.get(`${BASE_URL}organization/search/${orgId}`)
      setOrg(res.data)
      console.log(res.data)
    }
    getOrgData()
  }, [])
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <img className="detail-image" src={eventData.image}></img>
      <h1>{eventData.name}</h1>
      <h3>Event by: {org.name}</h3>
      <h3>Questions or Concerns :</h3>
      <p> Email: {org.email}</p>
      <p>Phone: {org.phone}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}

export default EventDetails
