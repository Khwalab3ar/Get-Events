import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../globals"


const UserLogin = (props) =>{
  const[acc, setAcc]= useState()
  const[accType,setAccType]= useState('')
  const[verified,toggleVerified] = useState(false)
  const[errMessage,setErrMessage] = useState('')
  const[userEmail,setUserEmail] = useState('')
  const navigate = useNavigate()
  let found

  const handleChange = (e) =>{
    const a = document.querySelector('input[name="type"]:checked').value
    setAccType(a)
  } 

  const handleEmailchange = (e)=>{
    setUserEmail(e.currentTarget.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const getAll = async () =>{
      const res = await axios.get(`${BASE_URL}${accType}`)
      setAcc(res.data)
    }
    getAll()
  }
  if(acc){
    found = acc.find(e => e.email === userEmail)
    if(found){
      navigate(`/${accType}/${found._id}`,{state:{found}})
    }else{
      setErrMessage('You do not have an account.')
    }
  }

  return(
    <div className="login-form">
      <form onSubmit={handleSubmit}>
      <fieldset>
        <input className="type-of" type='radio' id='personal' name='type' value='personals' onChange={handleChange}/><label htmlFor='personal'>Individual</label>
        <input className="type-of" type='radio' id='org' name='type' value='organizations'onChange={handleChange}/> <label htmlFor='org'>Organization</label>
      </fieldset>
        <label htmlFor='email'>Email: </label>
        <input type="email" id="email" name="email" onChange={handleEmailchange} required/>
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