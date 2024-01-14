import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()
function AppContextProvider({children}) {
    const [ authState, setAuthState] = useState({
        isAuth: false,
        token:null
    })
    
    const loginUser=(token)=>{
     
        setAuthState({ token: token, isAuth: true})
    }

    const logoutUser = () => {
        setAuthState({token:null, isAuth:false})
    }

    return <AppContext.Provider value={{authState, loginUser,logoutUser}}>
        {children }
    </AppContext.Provider>


    
}

export default AppContextProvider;
