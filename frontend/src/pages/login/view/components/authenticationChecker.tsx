import Home from "../../../home/view";
import { authenticationLogic } from "../../Logic/authenticationLogic";
interface AuthenticatedProps{
    children:React.ReactNode | React.ReactElement 
}

function Authenticated({children}:AuthenticatedProps) {


const isAutheticated = authenticationLogic.isAuthenticated()

if(isAutheticated) return <>{children}</>
return <Home />
  }
  
  export default Authenticated;
  