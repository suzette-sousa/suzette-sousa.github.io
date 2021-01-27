import React from 'react'
import { useState, useEffect } from 'react';
import Recaptcha from 'react-google-recaptcha'
const RECAPTCHA_KEY = '6LdzCT0aAAAAAHBNt8gteUr0nWUTktRkm5SbcQGs'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [state, setState] = useState({})
  const recaptchaRef = React.createRef()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      })
    })
    .then(() => {
      setSuccess(true);
    })
    .catch(error => alert(error));
  }
  return (
    <>
      <form name="contactForm" method="POST" onSubmit={handleSubmit} id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <div>
          <input
            type="text"
            id="text-input"
            name="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="text-input">Nom</label>
        </div>
        <div>
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder=""
            onChange={handleChange}
            required
          />
          <label htmlFor="email-input">Email</label>
        </div>
        <div>
          <textarea
            id="textarea"
            type="text"
            name="message"
            onChange={handleChange}
            required
          />
          <label htmlFor="textarea">Message</label>
        </div>
        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          id="recaptcha-google"
          onChange={() => setButtonDisabled(false)}
        />
        <input type="hidden" name="form-name" value="contactForm" />
        <button type="submit" disabled={buttonDisabled}>Envoyer</button>
      </form>
      {success && (
        <p style={{ color: 'green'}}>
          Successfully submitted form!
        </p>
      )}
    </>
  )
}

export default ContactForm
