import React from 'react';

import Navbar from '../Navbar';
import Gamefield from '../Gamefield';

class Game extends React.Component {
    
    state = {
        current: 0,
        highest: 0,
        background: "orange", 
        initialized: false
    }

    scoreKeeper = (goodClick) => {
        if(goodClick) {
            this.setState({current: this.state.current + 1}, () => {
                if(this.state.current === 12)
                    this.setState({background: "green"}, 
                    () => setTimeout(
                        () => this.setState({background: "orange"}),
                            300));
            });
                if(this.state.current > this.state.highest)
                    this.setState({highest: this.state.current});
        }
        else {
            this.setState({current: 0,
                           background: "red" }, () =>
                           setTimeout(() => this.setState({background: "orange"}),
                           300));
        }
    }
    
    constructor(props) {
        super(props);

        this.state.squares = Array(props.squares).fill(null)
    }

    render() {
            return(
                <div className="make-it-100">
                    <Navbar scoreboard={{current: this.state.current,
                                        highest: this.state.highest}}
                            background={this.state.background}/>
                    <Gamefield initialized={this.state.initialized}
                               initialize={() => this.setState({initialized: true})}
                               scoreKeeper={this.scoreKeeper}/>
                </div>
            );
        
    }
}

export default Game;