import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { fetchGuitars } from './store/reducers/action-api-creators';
import { /*setupStore,*/ store } from './store/store';

// const store1 = setupStore();

store.dispatch(fetchGuitars());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
