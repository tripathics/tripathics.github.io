import "../styles/index.scss"
import "../styles/new-moon.css"
import React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Loading from "../components/Loading"

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setIsLoading(false);
  }, [])

  return (<>
    <Helmet>
      {theme === 'dark' && <link rel="stylesheet" href="/dark-mode.css" />}
    </Helmet>
    <Loading isLoading={isLoading} />
    {!isLoading && (
      <div className={`layout-component`}>

        <Navigation theme={theme} toggleTheme={() => {
          if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
          } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
          }
        }} />
        <Me
          ghUsername={'tripathics'}
          instaHandle={'c_strip.z'}
          linkedinLink={'tripathics'}
        />
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    )}
  </>)
}

export default Layout