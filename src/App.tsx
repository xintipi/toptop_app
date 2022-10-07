import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import RenderRouter from '@/router/routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RenderRouter />
      </Router>
    </Provider>
  );
}

export default React.memo(App);
