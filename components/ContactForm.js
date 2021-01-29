import React from 'react'
import { useState, useEffect } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" })
  const { name, email, message } = state;
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({'form-name': form.getAttribute('name'), ...state})
    })
    .then(() => setSuccess(true))
    .catch(error => alert(error));
  }
  return (
    <>
      <div className="container mx-auto py-12">
        <form name="contactForm" method="POST" onSubmit={handleSubmit} id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" className="max-w-md mx-auto">
          <h3 className="mb-3 uppercase">Me contacter</h3>
          <div className="label-floating">
            <input
              type="text"
              id="text-input"
              className="label-floating_input"
              name="name"
              value={name}
              placeholder="Nom"
              onChange={handleChange}
              required
            />
            <label htmlFor="text-input">Nom</label>
          </div>
          <div className="label-floating">
            <input
              id="email-input"
              className="label-floating_input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <label htmlFor="email-input">Email</label>
          </div>
          <div className="label-floating">
            <textarea
              id="textarea"
              className="label-floating_input"
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChange}
              required
            />
            <label htmlFor="textarea">Message</label>
          </div>
          <input type="hidden" name="form-name" value="contactForm" />
          <div className="text-center">
            <button type="submit" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-gray-500 hover:bg-gray-700 inline-block border bg-gray-500 mr-3">Envoyer</button>
            {success && (
              <p className="text-green-200">
                Message envoyé
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
