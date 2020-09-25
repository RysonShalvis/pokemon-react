import React from 'react';
import './App.css';
import GetPokemon from './getPokemon/getPokemon';
import MorePokemon from './getPokemon/MorePokemon';

function App() {
  return (
    <div className="App">
      <GetPokemon />
      <GetPokemon />
      <MorePokemon />
      <MorePokemon />
    </div>
  );
}

export default App;
