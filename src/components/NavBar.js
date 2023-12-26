import React from 'react'
import './css/style.css'
export default function NavBar() {
  return (
    <div className='nav'>
        <div className='title'>
            <h2>Weather</h2>
        </div>
        <div className='elements'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact</a></li>
        </div>

    </div>
  )
}
