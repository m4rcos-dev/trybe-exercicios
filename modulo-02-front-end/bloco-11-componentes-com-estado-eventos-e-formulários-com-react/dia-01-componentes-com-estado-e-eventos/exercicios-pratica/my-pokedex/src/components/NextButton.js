import React from "react";

class NextButton extends React.Component {
    render() {
        const { pokemonCurrent } = this.props
        return (
            <div>
                <button onClick={pokemonCurrent}>Proximo Pokemon</button>
            </div>
        )
    }
}

export default NextButton;
