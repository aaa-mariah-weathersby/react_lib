import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './ButtonLabel.scss';
import cx from 'classnames';
import clone from 'clone';


export default class ButtonLabel extends Component {

  render() {

    return (
        <h4 className={`${styles.button_label} ${props.classes} button_label`}>
            {props.label}
        </h4>
    )
  }
}