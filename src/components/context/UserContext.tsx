import {createContext,useState} from 'react';

type AuthUser = {
    name: string,
    email: string
}

type UserContext = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps = {
    children: React.ReactNode;
}
export const UserContext = createContext< UserContext | null>(null)

export const UserContextProvider = ({children}:UserContextProviderProps)=>{
    const [ user,setUser ] = useState<AuthUser | null>(null)
    return (
          <UserContext.Provider value={{user,setUser}}>
            {children}
          </UserContext.Provider>
    )
}