import React from 'react'
import { NavLink } from 'react-router-dom'

export default Nav => {
    return (
        <nav className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to='/' exact activeClassName='active' className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/add' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/leaderboard' activeClassName='active'>
                        LeaderBoard
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}