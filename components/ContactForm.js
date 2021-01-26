const ContactForm = () => {
  return (
    <>
      <form name="contactForm" method="POST" id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
        <p class="hidden">
          <label id="contact-form-bot-label"
              >Don't fill this out if you're human: <input name="bot-field" aria-labelledby="contact-form-bot-label"
          /></label>
        </p>
        <p><label>Votre e-mail * : <input required type="email" name="email" /></label></p>
        <p><label>Votre message: <textarea required name="message" rows="4"></textarea></label></p>
        <div data-netlify-recaptcha="true"></div>
        <input type="hidden" name="form-name" value="contactForm" />
        <p><button type="submit">Envoyer</button></p>
      </form>
    </>
  )
}

export default ContactForm
