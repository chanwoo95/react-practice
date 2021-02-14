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
                <input className="habit-input"></input>
                <button className="habit-add">add</button>
                <Habits />;
            </>
        );
    }
}

export default App;
