import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';

import { className } from './Layout.less';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    return (
      <div className={className}>
          <Header />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}
