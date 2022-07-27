import axios from "axios"
import { BASE_URL } from "../globals"

const Edit = (props) =>{
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
      console.log(res)
    }
    updateOrg()
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
      <button type='Submit' onClick={props.handleClick}>Save</button>
    </form>
    </div>
  )
}

export default Edit