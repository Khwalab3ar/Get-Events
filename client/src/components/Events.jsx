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
      const res = await axios.get(`${BASE_URL}event/search/${props.id}`)
      setEvents(res.data) 
      console.log(res)
    }
    if(props.id === undefined){
      getAllEvent()
    }else{ 
      searchEvent()}
  },[])
  return(
    <div className="events-grid">
      {events.map((event)=>(
        <div className='event-items' key={event._id}>
          <img src= {event.image}/>
          <h1>{event.name}</h1>
          <h3>Industry: {event.industry}</h3>
          <h3>Price: <span className="price">${event.price}</span></h3>
          {/*<h4>org: {event.organization}</h4>*/}
      </div>
      ))}
    </div>
  )
}

export default Event