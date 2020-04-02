import React from 'react'
import { NavLink } from 'react-router-dom'

export default NotFound404 => {
    return (
        <div>
            Page not found please login...
            <NavLink to='/' exact activeClassName='active' className="nav-link">
                Login
                </NavLink>
        </div>
    )

}