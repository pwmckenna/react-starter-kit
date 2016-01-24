import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { className } from './Footer.less';

export default class Footer extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  render() {
    return (
      <div className={classnames(this.props.className, className, 'text-center')}>
        Hello World Footer
      </div>
    );
  }
}
