import React, { Component } from 'react'
import Link from '../../Link'

class Header extends Component {
  render () {
    return (
      <header className="sticky top-0 mb-4 bg-gray-800 bg-dark text-white shadow-sm">
        <nav className="flex flex-wrap justify-between items-center container mx-auto text-center">
          <Link href="/">
            <a href="/" className="link p-4 text-4xl tracking-wider font-extralight">Suzette Sousa</a>
          </Link>
          <ul className="flex flex-wrap items-center">
            <li className="flex flex-wrap items-center mr-4">
              <Link href="/">
                <a className="link p-4 inline-block text-gray-400 hover:text-gray-200 hover:text-underline py-2 px-4">CV</a>
              </Link>
            </li>
            <li className="flex flex-wrap items-center">
              <Link href="/portfolio">
                <a className="link p-4 inline-block text-gray-400 hover:text-gray-200 hover:text-underline py-2 px-4">Portfolio</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header