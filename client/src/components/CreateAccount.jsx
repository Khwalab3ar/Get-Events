import axios from 'axios'
import {useState} from 'react'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'


const CreateAccount = (props) =>{
  const[created,toggleCreated] = useState(false)
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
    const fname = document.querySelector('#fname').value
    const lname = document.querySelector('#lname').value
    const phoneNum = document.querySelector('#phone').value
    const emailAdd = document.querySelector('#email').value
    const json = {
      firstName : fname,
      lastName : lname,
      phone : phoneNum,
      email : emailAdd
    }
    let success
    console.log('json post', json)
    const create = async () =>{
      const account = await axios.post(`${BASE_URL}/personal`,json)
      toggleCreated = true
    }
    create()
    (created)&& navigate('/success')
  }
return(
<div className="create-account-form">
  <h1>Sign up</h1>
<form onSubmit={handleSubmit}>
  <label htmlFor='fname'>First Name: </label>
  <input type='text' id="fname" name='fname' required/>
  <label htmlFor='lName'>Last Name: </label>
  <input type='text' id="lname" name='lname' required/>
  <label htmlFor='phone'>Phone Number: </label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
  <label htmlFor='email'>Email: </label>
  <input type='email' id='email' name='email' required/>
  <button type='Submit'>Sign up</button>
</form>
<button onClick={props.login}>Already have an account</button>
</div>
)
}

export default CreateAccount