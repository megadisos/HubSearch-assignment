import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping,faUser} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
function Menu() {
  return (
 
        <ul className="flex flex-row gap-2 cursor-pointer">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /></Link></li>
            <li><Link to={'/login'}><FontAwesomeIcon icon={faUser} /></Link></li>
        </ul>
      
  );
}

export default Menu;
