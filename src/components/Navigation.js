import React from "react"
import { Link } from "gatsby"

const mainNavItems = [
  { url: '/', label: 'Home' },
  { url: '/posts', label: 'Posts' },
  { url: '/projects', label: 'Projects' },
  { url: '/gallery', label: 'Gallery' },
  { url: '/contact', label: 'Contact' },
]

const Navigation = ({ toggleTheme }) => {
  const handleMenu = (type) => {
    let navItems = document.getElementById('nav-exp-items');
    let btn = document.getElementById('menu-btn');

    if (type === 'close') {
      navItems.classList.remove('expand');
      btn.classList.remove('open');
      document.body.style.overflow = 'auto'
    } else if (type === 'open') {
      navItems.classList.add('expand');
      btn.classList.add('open');
      document.body.style.overflow = 'hidden'
    } else {
      navItems.classList.toggle('expand');
      btn.classList.toggle('open');
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  return (
    <nav className="nav-component">
      <div id="nav-bar">
        <button id="menu-btn" className="menu" onClick={e => { handleMenu() }} aria-label="Menu button">
          <span className="menu-label" aria-hidden="true">CLOSE</span>
        </button>
        <div className="logo">
          <Link onClick={e => { handleMenu('close') }} to="/" aria-label='Home' activeClassName="active">{`{ \\ `}<span id='logoDash'>-</span> </Link>
        </div>
        <ul id="nav-colapse-items">
          {mainNavItems.map((item, i) => (
            <li key={i}><Link to={item.url} activeClassName="active">{item.label}</Link></li>
          ))}
        </ul>
      </div>
      <div id="nav-exp-items">
        <ul>
          {mainNavItems.map((item, i) => (
            <li key={i}><Link onClick={e => { handleMenu('close') }} to={item.url} activeClassName="active">{item.label}</Link></li>
          ))}
        </ul>
        <div className='nav-footer'>
          <p>© 2021-Present Chandrashekhar Tripathi</p>
        </div>
      </div>
    </nav>
  )
}

export default Navigation