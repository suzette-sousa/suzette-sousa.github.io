import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 pb-12">
          {children}
        </div>
        <Footer />
      </>
    );
  }
}
export default Layout
