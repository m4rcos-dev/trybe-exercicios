import React from 'react';
import './Pokemons.css'

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemons
        const { value, measurementUnit } = averageWeight;
        return (
            <div className='poke-cart'>
                <div className='poke-info'>
                    <span>{name}</span>
                    <span>{type}</span>
                    <div>
                        <span>Average Weight: {value}{measurementUnit}</span>
                    </div>
                </div>
                <img src={image} className='poke-img' alt='thumb pokemon'></img>
            </div>
        )
    }
}

export default Pokemon;