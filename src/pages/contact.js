import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { PageTitle } from "../components/Heading"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("xdoraaey");

  return (
    <div className="contact-component">
      <Helmet title={`Contact | ${config.siteTitle}`} />

      <PageTitle id={'section-c0'} title='Contact Me' />
      <section className="container">
        {state.succeeded ? (<p>Thanks for your message! I will get back to you soon.</p>) : (
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="inp-name field-container">
              <div>
                <label htmlFor="firstName">First name</label>
                <input name="firstName" required type="text" placeholder="John" />
                <ValidationError prefix="First name" field="firstName" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <input name="lastName" type="text" placeholder="Doe" />
                <ValidationError prefix="Last name" field="lastName" errors={state.errors} />
              </div>
            </div>
            <div className="field-container">
              <label htmlFor="email">Email</label>
              <input name="email" required type="email" placeholder="my@email.com" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="field-container">
              <label htmlFor="message">Message</label>
              <textarea name="message" required cols="40" rows="10" placeholder="My message to you"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="field-container">
              <button type="submit" disabled={state.submitting}>Submit</button>
            </div>
            <ValidationError errors={state.errors} />
          </form>
        )}
      </section>
    </div>
  )
}

export default Contact