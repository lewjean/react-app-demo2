import React from 'react';
import ReactDOM from 'react-dom';
import './lib/normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister(); //不要PWA就可以删掉这一句
