import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../globals"


const UserLogin = (props) =>{
  const[acc, setAcc]= useState([])
  const[accType,setAccType]= useState('')
  const[verified,toggleVerified] = useState(false)
  const[errMessage,setErrMessage] = useState('')
  const navigate = useNavigate()
  let found

  const handleChange = (e) =>{
    const a = document.querySelector('input[name="type"]:checked').value
    setAccType(a)
  } 

  const handleSubmit = (e) =>{
    const userEmail = document.querySelector('#email').value
    e.preventDefault()
    let urlEnd = ''
    if(accType ==='personal'){
      urlEnd = 'personals'
    }else{
      urlEnd = 'organizations'
    }
    const getAll = async () =>{
      const res = await axios.get(`${BASE_URL}${urlEnd}`)
      setAcc(res.data)
      console.log(res.data)
    }
    getAll()
    found = acc.find(e => e.email === userEmail)
    console.log(found)
    if(found){
      console.log('id: ',found._id)
      navigate(`/${found._id}`)
    }else{
      setErrMessage('You do not have an account.')
    }
  }
  console.log(errMessage)

  return(
    <div className="login-form">
      <form onSubmit={handleSubmit}>
      <fieldset>
        <input className="type-of" type='radio' id='personal' name='type' value='personal' onChange={handleChange}/><label htmlFor='personal'>Individual</label>
        <input className="type-of" type='radio' id='org' name='type' value='org'onChange={handleChange}/> <label htmlFor='org'>Organization</label>
      </fieldset>
        <label htmlFor='email'>Email: </label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' name='password' placeholder="future release"/>
        <button type="Submit"> Login</button>
      </form>
      <div>
      <h1>{errMessage}</h1>
      </div>
      <button onClick={props.signUp}>Sign up</button>
    </div>
  )
}

export default UserLogin