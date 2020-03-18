import React from 'react';
import './App.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {charactersReducer as reducer} from './reducers/charactersReducer'


import CharacterForm from './components/CharacterForm'
import CharactersList from './components/CharactersList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Rick and Morty Character List</h1>
        <CharacterForm />
        <CharactersList/>
      </div>
    </Provider>
  );
}

export default App;
