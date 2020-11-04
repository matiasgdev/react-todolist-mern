import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <span>
        404 📛
      </span>
      <Link to="/">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
