import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { startNewSession } from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  currentSession: null,
  archivedSessions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_NEW_SESSION':
      return Object.assign({}, state, {
        currentSession: {
          id: uuidv4(),
          videoId: action.videoId,
          sessionStart: new Date(),
          notes: [],
        },
        archivedSessions: state.currentSession ? [
          ...state.archivedSessions,
          {
            ...state.currentSession,
            lastModified: new Date(),
          }
        ] : [
          ...state.archivedSessions,
        ],
      });
    case 'LOAD_PREVIOUS_SESSION':
      const prevSession = state.archivedSessions.find(oldSess => oldSess.id === action.sessionId);
      if (prevSession) {
        return Object.assign({}, state, {
          // remove chosen selection to archived, while adding current session
          archivedSessions: [
            ...state.archivedSessions.filter(oldSess => oldSess.id !== action.sessionId),
            {
              ...state.currentSession,
              lastModified: new Date(),
            },
          ],
          currentSession: {
              ...prevSession,
          },
        });
      }
      console.error('Previous session not found');
      return state;
    case 'ADD_NOTE':
      return Object.assign({}, state, {
        currentSession: {
          ...state.currentSession,
          notes: addNote(state.currentSession.notes, action),
        },
      });
    default:
      return state;
  }
};

const addNote = (state = [], action) => {
  if (action.noteText) {
    return [
      ...state,
      {
        noteText: action.noteText,
        noteTime: new Date(),
      }
    ];
  }
  return state;
};

const store = createStore(reducer, initialState);
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(startNewSession('ru4U_T83uOU'));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
