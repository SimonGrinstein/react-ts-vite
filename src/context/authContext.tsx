import { createContext, useContext, useState } from "react";

interface IUser {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}

const initialUser:IUser = {
  accessToken: "",
  email: "",
  firstName: "",
  gender: "",
  id: 0,
  image: "",
  lastName: "",
  refreshToken: "",
  username: ""
}

interface IAuthContextType {
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
}

export const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const[user, setUser] = useState<IUser>(initialUser);

  // const handleLogout = () => {
  //   setUser(React.SetStateAction<IUser>)
  // }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {/* за место children придут обернутые в provider компоненты */}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context) {
    throw new Error("no such context!😮")
  }
  return context;
}