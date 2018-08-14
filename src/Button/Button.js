import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ButtonLabel from './ButtonLabel';
import ButtonBase from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import style from './Button.scss';
import cx from 'classnames';
import clone from 'clone';


export class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      displayable: false
    };

    this.themeOverride = createMuiTheme({
      overrides: {
        MuiButton: {
          root: {
            '&:hover':{
              backgroundColor: 'visible'
            }
          }
        },
        MuiButtonBase: {
          root: {
            border: ''
          },
        }
      }
    })

  }

  render() {

    var rootClasses = 
      this.props.active === true 
      ? `${style.active} active`
      : this.props.active === false 
        ? `${style.disabled} disabled`
        : `idle`

    return (
      <MuiThemeProvider theme={this.themeOverride}>
        <ButtonBase 
          disableRipple = {true}
          disableTouchRipple = {true}
          focusRipple = {false}
        
          classes = {{
            root: cx(style.primary_button) + ` ${rootClasses} primary_button`
          }}

          children = {
            <ButtonLabel
              label={this.props.label}
              classes={
                cx(style.button_label)
              }            
            />
          }

        />
      </MuiThemeProvider>
    )
  }
}

export default Button;