import React, { useContext, useEffect } from 'react'
import {UserContext} from '../../context/UserContext'
import useInput from '../../hooks/useInput'
import './index.css'

const LoginPage = ({history}) => {

  const [name, ] = useInput('')
  const {user, setUserToContext, errorUser} = useContext(UserContext)

  const handleUserToContext = e => {
    e.preventDefault()
    setUserToContext(name.value)
  }
  useEffect(() => {
    if (user) {
      history.push('/')
    }

  }, [user, history])

  return (
    <div className="login">
      <h3>Identificarse</h3>
      <form className="form">
        <div className="form__control">
          {errorUser &&
            <div className="error">{errorUser}</div>
          }
          <label 
            htmlFor="name"
          >
            Solo debes identificarte con un nombre
          </label>
          <input
            type="text"
            {...name}
            id="name"
            placeholder="Debe contener al menos 4 caracteres"
          />
        </div>
        <div className="form__control">
          <button
            onClick={handleUserToContext}
          >
            Ingresar
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default LoginPage
