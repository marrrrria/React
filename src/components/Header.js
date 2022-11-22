import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

export default function Header() {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}