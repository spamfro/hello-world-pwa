import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const App = () => (
  <h1>Hello world!</h1>
);

ReactDOM.render(<App />, document.getElementById('app'));

window.addEventListener('load', () => {
  console.log('load');
  navigator.serviceWorker.register('sw.js')
    .then((registration) => console.log('load: service worker registered'))
    .catch(() => console.log('load: service worker registration failed'));
});
