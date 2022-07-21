import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon';
import data from './data'
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <><Header /><main className='main'>
        <Pokemon pokemons={data[0]} />
      </main></>
      // <Pokemon pokemons={data[0]} />
    )
  }
}

export default App;
