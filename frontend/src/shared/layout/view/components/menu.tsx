import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping,faUser,faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import {Link, useNavigate} from 'react-router-dom'
import { authenticationLogic } from "../../../../pages/login/Logic/authenticationLogic";
function Menu() {
 const isAuthenticated =  authenticationLogic.isAuthenticated()
  
 const navigate = useNavigate()
 const onLogout = () =>{
  authenticationLogic.logOut()
  navigate('/')
 }
  return (
 
        <ul className="flex flex-row gap-2 cursor-pointer">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            {isAuthenticated && <li><Link to={'/profile'}>Profile</Link></li>}
            <li><Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /></Link></li>
            <li>{isAuthenticated?<FontAwesomeIcon icon={faRightFromBracket}  onClick={onLogout}/>:<Link to={'/login'}><FontAwesomeIcon icon={faUser} /></Link>}</li>
        </ul>
      
  );
}

export default Menu;
