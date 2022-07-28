import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { BASE_URL } from "../globals"
import { useState } from "react"

const UserEdit = (props) =>{
  const navigate = useNavigate()
  const [updated, toggleUpdated] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const json = {}
    if(document.querySelector('#fname').value){
      json.name = document.querySelector('#fname').value
    }
    if(document.querySelector('#lname').value){
      json.industry = document.querySelector('#lname').value
    }
    if(document.querySelector('#phone').value){
      json.phone = document.querySelector('#phone').value
    }
    if(document.querySelector('#email').value){
      json.email = document.querySelector('#email').value
    }
    console.log(json)
    const updatePersonal = async () =>{
      const res = await axios.put(`${BASE_URL}personal/${props.id}`,json)
      toggleUpdated(true)
    }
    updatePersonal()
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
      <label htmlFor='fname'>First Name: </label>
      <input type='text' id="fname" name='fname'/>
      <label htmlFor='lname'>Last Name:  </label>
      <input type='text' id="lname" name='lname'/>
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

export default UserEdit