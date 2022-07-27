const Org =(props)=>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor='orgName'>Organization Name: </label>
      <input type='text' id="orgName" name='orgName' required/>
      <label htmlFor='industry'>Industry:  </label>
      <input type='text' id="industry" name='industry' required/>
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

export default Org