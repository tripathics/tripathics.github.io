import React from "react"
import { PageTitle } from "../components/Heading"

const Contact = () => {
  return (
    <div className="contact-component">
      <PageTitle id={'section-c0'} title='Contact Me' />
      <section className="container">
        <form className="form-control" action="/contact" method="post">
          <div className="inp-name field-container">
            <div>
              <label htmlFor="first-name">First name</label>
              <input name="first-name" type="text" placeholder="John" />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input name="last-name" type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="my@email.com" />
          </div>
          <div className="field-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="40" rows="10" placeholder="My message to you"></textarea>
          </div>
          <div className="field-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact