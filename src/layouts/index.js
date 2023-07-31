import "../styles/index.scss"
import "../styles/new-moon.css"
import React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [])

  return (
    <div className="layout-component">
      <Helmet>
        {theme === 'dark' && (
          <link rel="stylesheet" href="/dark-mode.css" />
        )}
      </Helmet>

      <Navigation />
      <Me
        ghUsername={'tripathics'}
        instaHandle={'c_strip.z'}
        linkedinLink={'tripathics'}
      />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout