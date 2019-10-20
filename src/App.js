import React from 'react';
import { Router } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './styles/global.css';
import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';
import { store, persistor } from './store';

import NavbarApp from '~/components/NavbarApp';
import Footer from '~/components/Footer';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <NavbarApp />
          <Routes />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
