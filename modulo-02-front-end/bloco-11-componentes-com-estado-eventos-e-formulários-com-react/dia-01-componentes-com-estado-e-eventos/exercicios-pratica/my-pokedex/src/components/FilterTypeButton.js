import React from "react";

class FilterTypeButton extends React.Component {
  render() {
    const { type } = this.props.pokemons
    const { pokemonFilter } = this.props
    return (
      <button name={type} onClick={pokemonFilter}>{type}</button>
    )
  }
}

export default FilterTypeButton;

