import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthHeader from './AuthHeader';

export default function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to='/' exact activeClassName='active' className="nav-link">
                            Home
                          </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/add' activeClassName='active' className="nav-link">
                            New Question
                          </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/leaderboard' activeClassName='active' className="nav-link">
                            LeaderBoard
                          </NavLink>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                </div>
            </div>
            <AuthHeader />
        </nav>
    )
}