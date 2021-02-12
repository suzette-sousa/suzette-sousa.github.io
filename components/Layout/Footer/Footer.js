import React, { Component } from 'react'
import ContactForm from '../../ContactForm'

class Footer extends Component {
  render () {
    return (
      <footer className="relative z-50 bg-gray-800 text-white min-h-24">
        <ContactForm />
        <p className="text-center">Site en cours de développement - Tech Stack : Next.js, Tailwind, Netlify | Suzette Sousa - 2021</p>
      </footer>
    );
  }
}
export default Footer
