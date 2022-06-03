import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.module.css';

function Footer() {
    return (
        <ul className={classes.footer} >
            <li>
                <Link to="/" > Узнать больше </Link>
            </li>
            <li>
                <Link to="/about" > Служба поддержки </Link>
            </li>
            <li>
                <Link to="/contact" > Карта сайта </Link>
            </li>
            <li>
                <Link to="/staff" > Помощь </Link>
            </li>
            <li>
                <Link to="/" > Пользовательское соглашение </Link>
            </li>
        </ul>
    )
}

export default Footer
