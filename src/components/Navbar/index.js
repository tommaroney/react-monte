import React from 'react';

import Scoreboard from '../Scoreboard';

function Navbar(props) {
    return (
        <nav className={props.background}>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo hide-on-small-and-down">React Monte</a>
                <Scoreboard scoreboard={props.scoreboard}/>
            </div>
        </nav>
    );
}

export default Navbar;