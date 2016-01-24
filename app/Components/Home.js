import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { className } from './Home.less';

export default class extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  render() {
    return (
      <div className={classnames(this.props.className, className, 'container')}>
        <h1>Hello World</h1>
        <p>Welcome to Hello World</p>
      </div>
    );
  }
}
