import React from 'react'
import { NavLink } from 'react-router-dom'

const more = () => {
  return (
    <div>
            <div className="clicked">
        <NavLink to="/home" >
        <button className='btn1'>Click to know more</button>
        </NavLink>
      </div>
    </div>
  )
}

export default more;
