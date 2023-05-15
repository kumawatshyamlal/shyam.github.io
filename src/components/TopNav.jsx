import React from 'react'
import './TopNav.css'
import { Link, NavLink } from 'react-router-dom'
export const TopNav = () => {
  return (
    <div className='left'>
      <p className='shyam'><b> Shaymlal kumawat</b></p>
      
      <div className="aa">
        <div className='right'>
          <div className='nav1'>
            <Link to="/Home" className='hom'>Home</Link>
            <Link to="/About" className='hom'>About</Link>
            <Link to="/Contact" className='hom'>Contact</Link>
            <Link to="/Experience" className='hom'>Experience</Link>
            <Link to="/Projects" className='hom'>Project</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopNav
