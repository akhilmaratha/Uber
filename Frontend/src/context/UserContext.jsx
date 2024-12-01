import { createContext } from "react"

export const UserDataContext=createContext();
const UserContext = ({children}) => {
    
    const [user, setUser] = useState({
        email:'',
        fullName:'',
        lastName:''
    })

  return (
    <div>
        <UserDataContext.Provider>
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext