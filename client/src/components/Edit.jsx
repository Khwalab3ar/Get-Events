import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { BASE_URL } from "../globals"
import { useState } from "react"

const Edit = (props) =>{
  const navigate = useNavigate()
  const [updated, toggleUpdated] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const json = {}
    if(document.querySelector('#orgName').value){
      json.name = document.querySelector('#orgName').value
    }
    if(document.querySelector('#industry').value){
      json.industry = document.querySelector('#industry').value
    }
    if(document.querySelector('#phone').value){
      json.phone = document.querySelector('#phone').value
    }
    if(document.querySelector('#email').value){
      json.email = document.querySelector('#email').value
    }
    console.log(json)
    const updateOrg = async () =>{
      const res = await axios.put(`${BASE_URL}organization/${props.id}`,json)
      toggleUpdated(true)
    }
    updateOrg()
    if(updated){
      props.finish()
    }

  }
  const handleCancel = () =>{
    props.finish()
  }
  const handleDelete =() =>{
    let wantDelete  = prompt('Enter "Yes" to delete')
    if (wantDelete === "Yes"){
      const deleteOrg = async () =>{
        const res = await axios.delete(`${BASE_URL}organization/${props.id}`)
      }
      deleteOrg()
      navigate('/login')
    }
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='orgName'>Organization Name: </label>
      <input type='text' id="orgName" name='orgName'/>
      <label htmlFor='industry'>Industry:  </label>
      <input type='text' id="industry" name='industry'/>
      <label htmlFor='phone'>Phone Number: </label>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
      <label htmlFor='email'>Email: </label>
      <input type='email' id='email' name='email'/>
      <button type='Submit'>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
    <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Edit