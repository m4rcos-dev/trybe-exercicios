import './App.css';
import React from 'react';
import Pokemon from './Pokemon';
import data from './data'
import Header from './Header';

class App extends React.Component {
  render () {
    return(
      <><Header /><main className='main'>
        {data.map((pokemon) => {
          return <div key={pokemon.id}>
          <Pokemon pokemons={pokemon} />
          </div>

        })}
      </main></>
      // <Pokemon pokemons={data[0]} />
    )
  }
}

export default App;
