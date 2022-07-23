import React from "react";
import '../css/FilterTypeButton.css'

class FilterTypeButton extends React.Component {
  render() {
    const { type } = this.props.pokemons
    const { pokemonFilter } = this.props
    return (
      <button className={`defaultbutton ${type}`} name={type} onClick={pokemonFilter}>{type}</button>
    )
  }
}

export default FilterTypeButton;

