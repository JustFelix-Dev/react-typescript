import {useState} from 'react';

type AuthUser = {
    name:string;
    email:string;
}

const User = () => {
    const [ user,setUser ] = useState<AuthUser | null>(null);
            //   Type Assertion
    // const [ user,setUser ] = useState<AuthUser>({} as AuthUser);

 
    const handleLogIn=()=>{
        setUser({name:'Felix',email:'owolabifelix78@gmail.com'})
    }
    const handleLogOut=()=>{
        setUser(null)
    }
    return ( 
            <>
             <button onClick={handleLogIn}>Log In</button>
             <button onClick={handleLogOut}>Log Out</button>
               <div>User name is {user?.name}</div>
               <div>User email is {user?.email}</div>
            </>
            );
}
 
export default User;