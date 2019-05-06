import React from 'react';

function GameCard(props) {
    return (
            <div className="col s4 m3" onClick={props.onClick}>
                <div className="card z-depth-3">
                    <div className="card-image hoverable">
                        <img width="200px" src={require('./images/' + props.character.image)} alt={props.character.name}/>
                    </div>
                </div>
            </div>

    );
}

export default GameCard;