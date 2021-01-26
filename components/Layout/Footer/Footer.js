import React, { Component } from 'react'
import ContactForm from '../../ContactForm'

class Footer extends Component {
  render () {
    return (
      <footer className="flex justify-center items-center bg-gray-800 text-white text-center h-24">
        <p>Site en cours de développement - Tech Stack : Next.js, Tailwind, Netlify | Suzette Sousa - 2021</p>
      </footer>
    );
  }
}
export default Footer
