import React from 'react';
import ReactDOM from 'react-dom';
import r2wc from 'react-to-webcomponent';
import App from './App.jsx';

const WidgetParallel = r2wc(App, React, ReactDOM);

customElements.define('widget', WidgetParallel);

customElements.whenDefined('widget').then(() => {
  console.log('widget is defined');
});
