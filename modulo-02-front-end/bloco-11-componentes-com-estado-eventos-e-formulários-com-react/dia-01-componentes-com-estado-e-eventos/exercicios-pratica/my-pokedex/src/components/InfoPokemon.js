import React from "react";
import '../css/InfoPokemon.css'

class InfoPokemon extends React.Component {
  render() {
    const { name, type, averageWeight, } = this.props.pokemons
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='poke-info'>
        <span>{name}</span>
        <span>{type}</span>
        <div>
          <span>Average Weight: {value}{measurementUnit}</span>
        </div>
      </div>
    )
  }
}

export default InfoPokemon;
