import { useState,useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"


const Event = () =>{
  const[events,setEvents]= useState([])
  useEffect(()=>{
    const getAllEvent = async () =>{
      const res = await axios.get(`${BASE_URL}events`) 
      setEvents(res.data)  
    }
    getAllEvent()
    console.log(events)
  },[])
  return(
    <div className="events-grid">
      {events.map((event)=>(
        <div key={event._id}>
          <h1>{event.name}</h1>
          <h3>Industry: {event.industy}</h3>
          <h3>Price: <span className="price">${event.price}</span></h3>
      </div>
      ))}
    </div>
  )
}

export default Event