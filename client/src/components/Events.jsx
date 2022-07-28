import { useState,useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"


const Event = (props) =>{
  const[events,setEvents]= useState([])
  useEffect(()=>{
    const getAllEvent = async () =>{
      const res = await axios.get(`${BASE_URL}events`) 
      setEvents(res.data)  
    }
    const searchEvent =  async () =>{
      const res = await axios.get(`${BASE_URL}event/search`, {params:{organization:props.id}})
      setEvents(res.data) 
      console.log(res)
    }
    (props.id)? searchEvent(): getAllEvent()
  },[])
  return(
  <section>
          <h1>EVENTS</h1>
    <div className="events-grid">
      {events.map((event)=>(
        <div className='event-items' key={event._id}>
          <img src={event.image}/>
          <h1>{event.name}</h1>
          <h3>Industry: {event.industy}</h3>
          <h3>Price: <span className="price">${event.price}</span></h3>
      </div>
      ))}
    </div>
    </section>
  )
}

export default Event