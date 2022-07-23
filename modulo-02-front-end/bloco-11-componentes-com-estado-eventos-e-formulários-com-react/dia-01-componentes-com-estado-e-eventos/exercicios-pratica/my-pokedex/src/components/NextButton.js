import React from "react";
import '../css/NextButton.css'

class NextButton extends React.Component {
    render() {
        const { pokemonCurrent } = this.props
        const { disabled } = this.props
        return (
                <button
                    className="next-button"
                    disabled={disabled}
                    onClick={pokemonCurrent}>Proximo Pokemon
                </button>
        )
    }
}

export default NextButton;
