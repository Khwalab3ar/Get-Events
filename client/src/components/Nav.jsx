import {Link} from 'react-router-dom'


const Nav = () =>{
  return(
  <nav>
    <ul>
      <li>Get Events</li>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  </nav>
)
}

export default Nav