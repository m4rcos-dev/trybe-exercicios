import React from "react";
import logo from "./trybe.png"
import './Tryber.css'

class Trybe extends React.Component {
    render() {
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div className="tryber-container">
                <img src={logo} className='tryber-img'></img>
            </div>
        )
    }
}

export default Trybe;