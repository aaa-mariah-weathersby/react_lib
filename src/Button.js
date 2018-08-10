import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ButtonLabel from './ButtonLabel';
import ButtonBase from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import style from './Button.scss';
import cx from 'classnames';
import clone from 'clone';


export class Button extends Component {

  state = {
    hovered: false,
    displayable: false
  };

  constructor(props) {
    super(props);
  }

  themeOverride = createMuiTheme({
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

  render() {

    return (
      <MuiThemeProvider theme={this.themeOverride}>
        <ButtonBase 
          disableRipple = {true}
          disableTouchRipple = {true}
          focusRipple = {false}
        
          classes = {{
            root: cx(style.primary_button) + " primary_button"
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