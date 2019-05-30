import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
