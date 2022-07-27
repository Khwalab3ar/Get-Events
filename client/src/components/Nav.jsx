import {Link} from 'react-router-dom'
import Home from '../pages/Home'

const Nav = () =>{
  return(
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>Login</Link></li>
  </ul>
)
}

export default Nav