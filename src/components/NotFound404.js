import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound404() {
    return (
        <div className="jumbotron center halfParent">
            <h3>Page not found</h3>
            <NavLink className="btn btn-primary btn-lg nav-link" to='/' exact activeClassName='active'>
                <h4 >Login</h4>
            </NavLink>
        </div>)

}