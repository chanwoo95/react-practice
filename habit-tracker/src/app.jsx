import React, { Component } from 'react';
import Habits from './components/habits';

import './app.css';

class App extends Component {
    render() {
        return (
            <>
                <nav>
                    Habit Tracker <span className="habit-count deep">7</span>
                </nav>
                <div className="habit-set">
                    <input className="habit-input"></input>
                    <button className="habit-add">add</button>
                </div>
                <Habits />
                <button className="habit-reset">Reset All</button>
            </>
        );
    }
}

export default App;
