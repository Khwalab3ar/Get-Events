import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../globals"
import {useState} from "react"

const CreateEvent = (props)=>{
const navigate = useNavigate()
const [created, toggleCreated] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = document.querySelector('#eventName').value
    const industry = document.querySelector('#industry').value
    const  type= document.querySelector('#type').value
    const price = document.querySelector('#price').value
    const date = document.querySelector('#date').value
    const image = document.querySelector('#image').value
    const json = {
      name: name,
      industry: industry,
      type: type,
      price: price,
      date: date,
      organization: props.id,
      image: image
    }

    console.log(json)
    const createEvent = async ()=>{
      const res  = await axios.post(`${BASE_URL}/event`, json)
      toggleCreated(true)
      console.log('create')
    }
    createEvent()
    if(created){ props.finish()}
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='eventName'>Event Name: </label>
      <input type='text' id="eventName" name='orgName'/>
      <label htmlFor='industry'>Industry:  </label>
      <input type='text' id="industry" name='industry'/>
      <label htmlFor='type'>Type: </label>
      <input type="text" id="type" name="type"/>
      <label htmlFor='price'>Price: </label>
      <input type='number' id='price' name='price'/>
      <label htmlFor='date'>Date: </label>
      <input type='text' id='date' name='date'/>
      <label htmlFor='image'>Image Url: </label>
      <input type='text' id='image' name='image'/>
      <button type='Submit'>Save</button>
    </form>
    </div>
  )

}

export default CreateEvent