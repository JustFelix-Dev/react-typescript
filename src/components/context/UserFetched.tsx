import { useContext } from "react"
import { UserContext } from "./UserContext"

 
 const UserFetched = ()=>{
    const userContext = useContext(UserContext);
    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({name:'Felix',email:'owolabifelix78@gmail.com'})
        }
    }
    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User name is </div>
            <div>User email is </div>
        </div>
    )
}

export default UserFetched;
