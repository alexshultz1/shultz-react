import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { startNewSession } from './actions';


const initialState = {
  currentSession: null,
  archivedSessions: [],
};

const newSession = (state = initialState, action) => {
  switch (action.type) {
    case 'START_NEW_SESSION':
      // move current to archived
      let archived = state.archivedSessions || [];
      if (state.currentSession) {
        archived.push({
          ...state.currentSession,
          sessionEnd: new Date(),
        });
      }
      // return new state here
      return Object.assign({}, state, {
        currentSession: {
          videoId: action.videoId,
          sessionStart: new Date(),
        },
        archivedSessions: archived,
      });
    default:
      return state;
  }
};

const store = createStore(newSession, initialState);
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(startNewSession('szFLA4_pwew'));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
