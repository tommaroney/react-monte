import React from 'react';
import './Scoreboard.css'

function Scoreboard(props) {
    return (
        <ul id="nav-mobile" className="right">
            <li className="scoreTitle">Score</li>
            <li className="score">Highest: {props.scoreboard.highest}</li>
            <li className="score">Current: {props.scoreboard.current}</li>
        </ul>
    );
}

export default Scoreboard;