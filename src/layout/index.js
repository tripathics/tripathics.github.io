import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import Me from "./Me"

const Layout = ({ children }) => {
  return (
    <div className="layout-component">
      <Nav />
      <Me />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout