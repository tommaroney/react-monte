import React from 'react';

import GameCard from '../GameCard';
import characterArr from '../GameCard/characters';



class Gamefield extends React.Component {
    
    constructor(props) {
        super(props);

        let initialBoard = this.renderGameCards(characterArr);

        this.state = {
            gameBoard: initialBoard,
            clickedArr: [],
        };
    }

    renderGameCards(characterArr) {
        let gameCardsArr = [];
        characterArr.forEach(character => {
            gameCardsArr.push(<GameCard key={character.id} character={character} onClick={() => this.handleClick(character.id)} />)
        });
        console.log(gameCardsArr);
        return gameCardsArr;
    }

    resetGame() {
        this.setState({clickedArr: [],
                       gameBoard: this.shuffledGameboard()
                    });
        this.props.scoreKeeper(false);
    }
    
    handleClick = (id) => {
        if(this.state.clickedArr.includes(id)) {
            this.resetGame();
            return
        }
        else {
            let newStatus = this.state.clickedArr;
            newStatus.push(id);
            this.setState({ clickedArr: newStatus })
            this.props.scoreKeeper(true);
            this.setState({ gameBoard: this.shuffledGameboard() });
        // const squares = this.state.squares.slice();
        // if (caluculateWinner(squares) || squares[])
            console.log(this.state.clickedArr);
        }
    }

    shuffledGameboard = () => {
        let newArrangement = this.state.gameBoard;
        for(let i = 0; i < newArrangement.length; i++) {
            let holder = newArrangement[i];
            let newPosition = Math.floor(Math.random() * newArrangement.length);
            newArrangement[i] = newArrangement[newPosition];
            newArrangement[newPosition] = holder;
        }
        return newArrangement;
    }

    render () {
        if(this.props.initialized)
            return (
                <section className="container">
                    <div className="row">
                        {this.state.gameBoard}
                    </div>
                </section>
            );
        return(
            <section className="container valign-wrapper make-it-85">
                <div>
                    <div className="row">
                        <div className="col s12 m10 offset-m1">
                            <div className="card-panel orange lighten-5">
                                <h3 className="flow-text">Win the game by clicking each image one time and only one time. A second click on any image that has previously been
                                    clicked will restart your effort.</h3>
                                    <hr/>
                                    <p className="flow-text">The scoreboard will flash red if you have clicked an image a second time, green if you click each image without
                                        repeating.  Your highest score will be tracked in the upper-right corner.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn green col s4 m2 offset-s4 offset-m5" onClick={this.props.initialize}>start</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gamefield;