const UserLogin = (props) =>{
  return(
    <div className="login-form">
      <form>
        <label htmlFor='email'>Email: </label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' name='password' placeholder="future release"/>
        <button type="submit"> Login</button>
      </form>
      <button onClick={props.signUp}>Sign up</button>
    </div>
  )
}

export default UserLogin