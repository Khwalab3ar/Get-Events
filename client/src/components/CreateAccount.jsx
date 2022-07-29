import axios from 'axios'
import {useState} from 'react'
import {BASE_URL} from '../globals'
import {useNavigate} from 'react-router-dom'
import Personal from './Personal'
import Org from './Org'


const CreateAccount = (props) =>{
  //const[created,toggleCreated] = useState()
  const[accType,setAccType]= useState('')
  const navigate = useNavigate()
  let formType

  const handleChange = (e) =>{
    const a = document.querySelector('input[name="type"]:checked').value
    setAccType(a)
  }  

  const handleClick = () => {
    navigate('/login')
  }


  const handleSubmit =(e)=>{
    let fname
    let lname
    let orgName
    let industyType
    e.preventDefault()
    if(accType ==='personal'){
      fname = document.querySelector('#fname').value
      lname = document.querySelector('#lname').value
    }else{
      orgName = document.querySelector('#orgName').value
      industyType = document.querySelector('#industry').value
    }
    const phoneNum = document.querySelector('#phone').value
    const emailAdd = document.querySelector('#email').value
    const perJson = {
      firstName : fname,
      lastName : lname,
      phone : phoneNum,
      email : emailAdd
    }
    const orgJson={
      name: orgName,
      industry : industyType,
      email : emailAdd,
      phone : phoneNum
    }
    
    const createPer = async () =>{
      const account = await axios.post(`${BASE_URL}personal`,perJson)
      navigate('/Success')
    }
    const createOrg = async () =>{
      const account = await axios.post(`${BASE_URL}organization`,orgJson)
      navigate('/Success')
    }

    (accType === 'personal')? createPer() : createOrg() 
  }


    if(accType === 'personal'){
      formType = <Personal handleSubmit = {handleSubmit} login={props.login}/>
    }else if(accType === 'org'){
      formType =  <Org handleSubmit={handleSubmit} login={props.login}/>
    }else{
      formType =''
    }

    return(
      <div className="create-account-form">
  <h1>Sign up</h1>
<form onSubmit={handleSubmit}>
  <fieldset>
  <input className="type-of" type='radio' id='personal' name='type' value='personal' onChange={handleChange}/><label className="types" htmlFor='personal'>Individual</label>
  <input className="type-of" type='radio' id='org' name='type' value='org'onChange={handleChange}/> <label className="types" htmlFor='org'>Organization</label>
</fieldset>
</form>
{formType}
</div>

)
}

export default CreateAccount