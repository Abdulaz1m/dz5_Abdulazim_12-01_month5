import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

function Header() {
    return (
        <ul className={classes.header} >
            <li> <NavLink className={classes.link} to='/' > Main </NavLink> </li>
            <li> <NavLink className={classes.link} to='/about' > About us </NavLink> </li>
            <li> <NavLink className={classes.link} to='/staff' > Staff </NavLink> </li>
            <li> <NavLink className={classes.link} to='/contact' > Contacts </NavLink> </li>
        </ul>
    )
}

export default Header
