import React from 'react';
import Imgpoke from '../images/logopokedex.png'
import '../css/Header.css'

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