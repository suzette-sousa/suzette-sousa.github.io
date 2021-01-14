import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        <main className="main">
          <div className="container mx-auto px-4 pb-12">
            {children}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
export default Layout
