import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthHeader from './AuthHeader';

export default Nav => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink to='/' exact activeClassName='active' className="nav-link">
                            Home
                          </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/add' activeClassName='active' className="nav-link">
                            New Question
                          </NavLink>
                    </li>
                    <li class="nav-item">
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