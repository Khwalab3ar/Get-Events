import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Edit from '../components/Edit'

const OrgHome = () => {
  const location = useLocation()
  console.log(location)
  const userData = location.state.found
  const [editDets, setEditDets] = useState(false)
  let form

  const handleEdit = () => {
    setEditDets(true)
  }
  const handleCreateEvent = () => {}

  const handleClick = () => {
    console.log('handleClick is good')
  }
  if (editDets) {
    form = <Edit id={userData._id} finish={handleClick} />
  } else {
    form = ''
  }

  return (
    <div>
      {form}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  )
}

export default OrgHome
