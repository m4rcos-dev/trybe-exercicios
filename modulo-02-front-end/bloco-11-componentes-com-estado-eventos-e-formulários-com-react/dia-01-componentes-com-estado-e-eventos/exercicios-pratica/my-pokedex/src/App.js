import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon';
import data from './data'
import Header from './components/Header';
import NextButton from './components/NextButton';
import FilterTypeButton from './components/FilterTypeButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: 0,
      currentFilter: "noFilter",
      arrayCurrentPokemons: data
    }
  }

  pokemonCurrent = () => {
    if (this.state.currentPokemon !== this.state.arrayCurrentPokemons.length - 1) {
      return this.setState((estadoAnterior, _props) => ({
        currentPokemon: estadoAnterior.currentPokemon + 1
      }))
    }
    return this.setState({ currentPokemon: 0 })
  }

  pokemonFilter = ({ target: { name } }) => {
    console.log(name);
    this.setState({ currentFilter: name }, () => {
      const filtrered = data.filter((e) => {
        return e.type.includes(this.state.currentFilter);
      })
      this.setState({ arrayCurrentPokemons: filtrered, currentPokemon: 0 })
    })
  }

  teste = ({ target }) => {
    console.log(target);
  }

  render() {
    return (
      <><Header /><main className='main'>
        <Pokemon pokemons={this.state.arrayCurrentPokemons[this.state.currentPokemon]} />
        <div>
          {data.map((e) => {
            return <FilterTypeButton pokemonFilter={this.pokemonFilter} pokemons={e} />
          })}
          <FilterTypeButton pokemonFilter={this.pokemonFilter} pokemons={data[0]} />
          <><button name='Fire' onClick={this.pokemonFilter}>Fire</button></>
        </div>
        <NextButton pokemonCurrent={this.pokemonCurrent} />
      </main></>
      // <Pokemon pokemons={data[0]} />
    )
  }
}

export default App;
