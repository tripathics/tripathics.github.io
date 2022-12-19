import "../styles/index.scss"
import "../styles/components.scss"
import "../styles/new-moon.css"
import React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="layout-component">
      <Navigation />
      <Me
        ghUsername={'tripathics'}
        instaHandle={'c_strip.z'}
        linkedinLink={'https://www.linkedin.com/in/tripathics'} 
      />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout