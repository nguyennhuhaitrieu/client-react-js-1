// @flow
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReactDOM from 'react-dom';

import history from './utils/history';
import IndexPage from './components/layout/indexPage';
import AdminForm from './components/admin/forms/AdminForm';
import { persistor, store } from './stores/store';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/layout/NotFound';

const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <div className="wrap">
          <Switch>
            <Route path="/admin" component={AdminForm} />
            <Route path="/" component={IndexPage} />
            <Route path="*" exact component={NotFound} />
          </Switch>
          <ToastContainer enableMultiContainer containerId="toastContainerId" className="toast_container" position={toast.POSITION.TOP_RIGHT} />
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
