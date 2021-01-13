import React, { Component } from 'react';
import Header from './Header/Header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        <div className="container mx-auto px-4">
          {children}
        </div>
      </>
    );
  }
}
export default Layout