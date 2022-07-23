import React from "react";
import '../css/AllPokemonsButton.css'

class AllPokemonsButton extends React.Component {
  render() {
    const { pokemonReset, disabled } = this.props
    return (
      <button className="reset-button"
        disabled={disabled}
        onClick={pokemonReset}>Todos Pokemons
      </button>
    )
  }
}

export default AllPokemonsButton;
