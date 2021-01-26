import React from 'react'
import { useState, useEffect } from 'react';
import Recaptcha from 'react-google-recaptcha'
const RECAPTCHA_KEY = '6Lfw6TwaAAAAAKAkiqzxo90xCk-YMVOA3cp1UdJp'

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const recaptchaRef = React.createRef();

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <form name="contactForm" method="POST" action="/?success=true" id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
        <p class="hidden">
          <label id="contact-form-bot-label"
              >Don't fill this out if you're human: <input name="bot-field" aria-labelledby="contact-form-bot-label"
          /></label>
        </p>
        <p><label>Votre e-mail * : <input required type="email" name="email" /></label></p>
        <p><label>Votre message: <textarea required name="message" rows="4"></textarea></label></p>
        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          id="recaptcha-google"
        />
        <input type="hidden" name="form-name" value="contactForm" />
        <p><button type="submit">Envoyer</button></p>
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
