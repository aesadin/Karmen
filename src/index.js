
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from "./firebase";
import 'firebase/auth';


const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
        userProfile: "users",
        useFirestoreForProfile: true
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
