import React from "react"
import { Link } from "gatsby"

const mainNavItems = [
  { url: '/', label: 'Home' },
  { url: '/posts', label: 'Posts' },
  { url: '/projects', label: 'Projects' },
  { url: '/gallery', label: 'Gallery' },
  { url: '/contact', label: 'Contact' },
]

const ThemeToggle = ({ theme = 'light', toggleTheme }) => {
  return (
    <button onClick={() => toggleTheme()} className={`theme-toggle ${theme}`} aria-label="Theme toggle button">
      <svg width="250" height="250" viewBox="0 0 250 250" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
        <g id="dark 1" clipPath="url(#clip0_1_2)">
          <g id="dark">
            <g id="inner">
              <path id="Vector" d="M125 75C97.3753 75 75 97.3753 75 125C75 152.624 97.3753 175 125 175C152.624 175 175 152.624 175 125C175 97.3753 152.624 75 125 75Z" fill="currentcolor" />
            </g>
            <g id="outer">
              <path id="Vector_2" d="M125 191.313C88.4173 191.313 58.687 161.583 58.687 125C58.687 88.4173 88.4173 58.687 125 58.687C161.583 58.687 191.313 88.4173 191.313 125C191.313 161.583 161.583 191.313 125 191.313ZM213.417 88.4173V36.5827H187.5H161.583L143.292 18.2913L125 0L88.4173 36.5827H36.5827V88.4173L0 125L36.5827 161.583V213.417H88.4173L125 250L161.583 213.417H213.417V161.583L250 125L213.417 88.4173Z" fill="currentcolor" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="250" height="250" fill="currentcolor" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

const Navigation = ({ theme = 'light', toggleTheme }) => {
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
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
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