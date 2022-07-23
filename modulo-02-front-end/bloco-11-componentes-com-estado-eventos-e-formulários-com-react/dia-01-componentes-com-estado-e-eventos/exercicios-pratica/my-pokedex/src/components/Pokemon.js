import React from 'react';
import '../css/Pokemons.css'

class Pokemon extends React.Component {
    render() {
        const { image } = this.props.pokemons
        return (
            <div className='poke-cart'>
                <img src={image} className='poke-img' alt='thumb pokemon'></img>
            </div>
        )
    }
}

export default Pokemon;
