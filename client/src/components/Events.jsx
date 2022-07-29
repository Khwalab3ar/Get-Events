import { useState,useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import {useNavigate,useParams} from "react-router-dom"


const Event = (props) =>{
  const navigate = useNavigate()
  const[events,setEvents]= useState([])
  const[isDelete, setIsDelete] = useState(false)
  useEffect(()=>{
    const getAllEvent = async () =>{
      const res = await axios.get(`${BASE_URL}events`) 
      setEvents(res.data)  
    }
    const searchEvent =  async () =>{
      const res = await axios.get(`${BASE_URL}event/search/${props.id}`)
      setEvents(res.data) 
    }
    if(props.id === undefined){
      getAllEvent()
    }else{ 
      searchEvent()
    }
  },[isDelete])

    const handleClick=(event)=>{
      navigate('/eventDetails', {state:{event}})
    }

    const handleDelete = (id)=>{
      let confirm = prompt('Enter "Yes" to delete')
      const deleteEvent = async () => {
        const deleted = await axios.delete(`${BASE_URL}event/${id}`)
      }
      (confirm === "Yes")&& deleteEvent()
      setIsDelete(true)
    }
  return(
    <div className="events-grid">
      {events.map((event)=>(
        <div className='event-items' key={event._id}>
          <img src= {event.image}/>
          <h1>{event.name}</h1>
          <h3>Industry: {event.industry}</h3>
          <h3>Price: <span className="price">${event.price}</span></h3>
          <button onClick={()=>handleClick(event)}>Details</button>
          {(props.id !== undefined)&&<button onClick={()=>handleDelete(event._id)}>Delete</button>}
      </div>
      ))}
    </div>
  )
}

export default Event