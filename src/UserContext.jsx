import {createContext, useState} from 'react';

let UserContext = createContext();


export const UserProvider = ({children}) => {
    
    const [userName,setUserName] = useState("Kumar");

    return <UserContext.Provider value={{userName,setUserName}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;