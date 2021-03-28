import React from 'react'
import {NavLink } from 'react-router-dom'
import AddProfile from './AddProfile'

export default() => (
    <div className='Header'>
        <div className='Header-content'>
            <h2>Profile Reader</h2>
            <NavLink to="/" activeClassName='is-active' className='HomeNav'> Home </NavLink>
            <NavLink to="/addProfile" activeClassName='is-active' className="Addprofilenav"> Add Profile </NavLink>

        </div>
    </div>

)

