import React from 'react'
import classes from './Nav.module.css'
import { Link } from 'react-router-dom'
export default function NavigationBar() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className={classes.navLink}>
        <Link className={classes.navStyle} to="dashboard">
          <li>Home</li>
        </Link>
        <Link className={classes.navStyle} to="about">
          <li>About</li>
        </Link>
        <Link className={classes.navStyle} to="contact">
          <li>Contact</li>
        </Link>
        <Link className={classes.navStyle} to="/login">
          <li>Logout</li>
        </Link>
      </ul>
    </nav>
  )
}
