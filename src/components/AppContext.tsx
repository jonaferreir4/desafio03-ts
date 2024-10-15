import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

    useEffect(() => {
      const storage = getAllLocalStorage()
      if(storage){
        const { token } = JSON.parse(storage)
        console.log(token)
        if(token) {
          setIsLoggedIn(true)
        }
      }
    }, [])

  
    return (
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
