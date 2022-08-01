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
    const  type= document.querySelector('#type').value
    const price = document.querySelector('#price').value
    const date = document.querySelector('#date').value
    const image = document.querySelector('#image').value
    const json = {
      name: name,
      industry: props.orgData.industry,
      type: type,
      price: price,
      date: date,
      organization: props.orgData._id,
      image: image
    }


    const createEvent = async ()=>{
      const res  = await axios.post(`${BASE_URL}event`, json)
      toggleCreated(true)
    }
    createEvent()
  }
  if(created){ props.finish()}
  
    const handleCancel = () =>{
      props.finish()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='eventName'>Event Name: </label>
      <input type='text' id="eventName" name='orgName'/>
      <label htmlFor='type'>Type: </label>
      <input type="text" id="type" name="type"/>
      <label htmlFor='price'>Price: </label>
      <input type='number' id='price' name='price'/>
      <label htmlFor='date'>Date: </label>
      <input type='date' id='date' name='date'/>
      <label htmlFor='image'>Image Url: </label>
      <input type='text' id='image' name='image'/>
      <button type='Submit'>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
    </div>
  )

}

export default CreateEvent