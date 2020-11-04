import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const { user } = useContext(UserContext)
  return (
    <header className="header">
      <h1>
        <Link to="/">
          Tuuduu 
        </Link>
      </h1>
      <ul className="navbar">
        {user ? (
          <li>
            <Link to="/perfil">
              Perfil
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/identificarse">
              Ingresar
            </Link>
          </li>
        )
      }
      </ul>
    </header>
  )
}

export default Header
