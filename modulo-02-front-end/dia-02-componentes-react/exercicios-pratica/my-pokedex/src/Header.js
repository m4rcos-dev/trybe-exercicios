import React from 'react';
import Imgpoke from './logopokedex.png'
import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <header className='header'>
                <img src={Imgpoke} alt='Pokedex'></img>
            </header>
        )
    }
}

export default Header;