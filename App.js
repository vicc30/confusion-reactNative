import React from 'react';

import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { Loading } from './components/LoadingComponent';
import Main from './components/MainComponent';

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
