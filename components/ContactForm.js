const ContactForm = () => {
  return (
    <>
      <form name="contact" method="POST" data-netlify="true">
        <p><label>Votre e-mail * : <input required type="email" name="email" /></label></p>

        <p><label>Votre message: <textarea required name="message" rows="4"></textarea></label></p>

        <p><button type="submit">Envoyer</button></p>
      </form>
    </>
  )
}

export default ContactForm
