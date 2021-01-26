import React, { Component } from 'react'
import ContactForm from '../../ContactForm'

class Footer extends Component {
  render () {
    return (
      <footer className="bg-gray-800 text-white text-center min-h-24">
        <ContactForm />
        <p>Site en cours de développement - Tech Stack : Next.js, Tailwind, Netlify | Suzette Sousa - 2021</p>
      </footer>
    );
  }
}
export default Footer
