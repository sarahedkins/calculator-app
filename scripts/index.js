import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Welcome from 'welcome-name-react';

render((
    <div>
      <App />
    </div>
  ),
  document.getElementById('root')
);
