import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { className } from './Header.less';

export default class Header extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  render() {
    return (
      <div className={classnames(this.props.className, className, 'text-center')}>
        Hello World Header
      </div>
    );
  }
}
