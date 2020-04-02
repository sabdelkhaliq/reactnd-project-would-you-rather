import React from 'react'
import { NavLink } from 'react-router-dom'

export default NotFound404 => {
    return (
        <div className="jumbotron center halfParent">
        <h3>Page not found</h3>
        <NavLink className="btn btn-primary btn-lg" to='/' exact activeClassName='active' className="nav-link">
               <h4 >Login</h4>
        </NavLink>
        </div>)

}