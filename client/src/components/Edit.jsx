const Edit = (props) =>{
  const handleSubmit = (e) => {
    e.preventDefault()

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