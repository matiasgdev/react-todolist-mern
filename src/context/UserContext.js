import React, { useState } from 'react'

export const UserContext = React.createContext()

function UserContextProvider({children}) {
  const [user, setUser] = useState(() => {
    // get user from localStorage
    let userFromCache = window.localStorage.getItem('user')
    if (userFromCache) {
      return JSON.parse(userFromCache)
    } else {
      return null
    }
  })
  const [errorUser, setErrorUser] = useState(null)

  const setUserToContext = (value) => {
    // eslint-disable-next-line
    if (value === '' || value && value.length < 4) { 
      setErrorUser('Tu nombre debe contener al menos 4 caracteres')
      return 
    }
    // add user to context && client storage
    window.localStorage.setItem('user', JSON.stringify(value))
    setUser(value)
    setErrorUser(null)
  }

  return (
    <UserContext.Provider value={{user, setUserToContext, errorUser}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider