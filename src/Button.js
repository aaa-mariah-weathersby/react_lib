import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import clone from 'clone';

import style from './Button.scss';

export class Button extends Component {

  state = {
    hovered: false,
    displayable: false
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div
        className={cx(style.PopupMenu)}
      >
        <button>
            <h1>Button Weathersby</h1>
        </button>

      </div>
    )
  }
}