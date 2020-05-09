import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import muiTheme from './config/muiTheme';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const domContainer = document.querySelector('#trips_container');

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  domContainer
);

