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
      <Me />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout