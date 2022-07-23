import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon';
import data from './data'
import Header from './components/Header';
import NextButton from './components/NextButton';
import FilterTypeButton from './components/FilterTypeButton';
import AllPokemonsButton from './components/AllPokemonsButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: 0,
      currentFilter: "noFilter",
      arrayCurrentPokemons: data,
      isDisabled: false,
      resetIsDisabled: true
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
    this.setState({ currentFilter: name }, () => {
      const filtrered = data.filter((e) => {
        return e.type.includes(this.state.currentFilter);
      })
      this.setState({ arrayCurrentPokemons: filtrered, currentPokemon: 0 }, () => {
        const isDisabled = (filtrered.length === 1)

        this.setState({isDisabled: isDisabled, resetIsDisabled: false});
      })
    })
  }

  pokemonReset = () => {
    this.setState({arrayCurrentPokemons: data, currentPokemon: 0}, () => {
      this.setState({isDisabled: false, resetIsDisabled: true})
    })
  }

  render() {
    const filterType = data.map((e) => e.type);
    const noRepeatType = filterType.filter((e, i) => filterType.indexOf(e) === i)
      .map((poke) => poke = { type: poke })

    return (
      <><Header /><main className='main'>
        <Pokemon pokemons={this.state.arrayCurrentPokemons[this.state.currentPokemon]} />
        <div className='buttons-type-container'>
          {noRepeatType.map((e) => {
            return <FilterTypeButton key={e.type} pokemonFilter={this.pokemonFilter} pokemons={e} />
          })}
        </div>
        <div className='buttons-container'>
        <NextButton disabled={this.state.isDisabled} pokemonCurrent={this.pokemonCurrent} />
        <AllPokemonsButton disabled={this.state.resetIsDisabled} pokemonReset={this.pokemonReset} />
        </div>
      </main></>
    )
  }
}

export default App;
