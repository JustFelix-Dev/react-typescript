import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    Component : React.ComponentType<ProfileProps>
}
const Private = ({ isLoggedIn,Component }:PrivateProps) => {
    return ( 
           <>
               {isLoggedIn ? <Component name='Felix'/>:<Login/>}
           
           </>
     );
}
 
export default Private;