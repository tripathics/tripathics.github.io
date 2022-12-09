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
      btn.innerHTML = `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><title>Menu</title><g fill="currentColor"><path d="M61.92 48.25L86.06 23.3a2 2 0 012.92 0l5.4 5.59a2.18 2.18 0 010 3L77.11 49.76l17.28 17.86a2.18 2.18 0 010 3L89 76.22a2 2 0 01-2.92 0L61.92 51.28a2.18 2.18 0 010-3z"/><rect height="10" rx="4.25" width="67.74" x="5" y="20"/><rect height="10" rx="4.25" width="67.74" x="5" y="70"/><rect height="10" rx="3.59" width="48.39" x="5" y="45"/></g></svg>`;
    } else {
      btn.innerHTML = `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><title>Menu</title><path d="M10 80h80a5 5 0 000-10H10a5 5 0 000 10zm0-25h80a5 5 0 000-10H10a5 5 0 000 10zM5 25a5 5 0 005 5h80a5 5 0 000-10H10a5 5 0 00-5 5z" fill="currentColor"/></svg>`;
    }
  }

  return (
    <nav className="nav-component">
      <div id="nav-bar">
        <button id="menu-btn" className="menu" onClick={toggleMenu} aria-label="Menu button">
          <svg className="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
            <title>Menu</title>
            <path d="M10 80h80a5 5 0 000-10H10a5 5 0 000 10zm0-25h80a5 5 0 000-10H10a5 5 0 000 10zM5 25a5 5 0 005 5h80a5 5 0 000-10H10a5 5 0 00-5 5z" fill="currentColor" />
          </svg>
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