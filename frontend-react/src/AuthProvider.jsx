import { useState, useContext, createContext} from 'react'

// Create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        // the !! give the bolean state 'true or false'
        !!localStorage.getItem('accessToken')
    )
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
       {children} 
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};