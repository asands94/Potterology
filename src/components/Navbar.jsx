import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="navbar-text" to="/search">Directory</Link>
        <Link className="navbar-text" to="/">Diagon Alley</Link>
        <Link className="navbar-text" to="/platform">Kings Cross</Link>
      </div>




    </>

  )
}
