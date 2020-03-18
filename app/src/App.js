import React from 'react';
import './App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {charactersReducer as reducer} from './reducers/charactersReducer'


import CharacterForm from './components/CharacterForm'

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Rick and Morty Character List</h1>
        <CharacterForm />
      </div>
    </Provider>
  );
}

export default App;
