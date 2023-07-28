import React from "react"
import { Link } from "gatsby"

const mainNavItems = [
  { url: '/', label: 'Home' },
  { url: '/posts', label: 'Posts' },
  { url: '/projects', label: 'Projects' },
  { url: '/gallery', label: 'Gallery' },
  { url: '/contact', label: 'Contact' },
]

const Navigation = () => {
  const toggleMenu = () => {
    let navItems = document.getElementById('nav-exp-items');
    navItems.classList.toggle('expand');
    let btn = document.getElementById('menu-btn');

    if (navItems.className === 'expand') {
      btn.classList.add('open');
    } else {
      btn.classList.remove('open');
    }
  }

  return (
    <nav className="nav-component">
      <div id="nav-bar">
        <button id="menu-btn" className="menu" onClick={toggleMenu} aria-label="Menu button">
          <span className="menu-label" aria-hidden="true">CLOSE</span>
        </button>
        <ul id="nav-colapse-items">
          {mainNavItems.map((item, i) => (
            <li key={i}><Link to={item.url} activeClassName="active">{item.label}</Link></li>
          ))}
        </ul>
      </div>
      <div id="nav-exp-items">
        <ul>
          {mainNavItems.map((item, i) => (
            <li key={i}><Link onClick={toggleMenu} to={item.url} activeClassName="active">{item.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation