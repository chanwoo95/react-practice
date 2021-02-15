import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';

class App extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Eating', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    habitIncrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
    };

    habitDecrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        console.log(index);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    };

    habitDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };
    render() {
        return (
            <>
                <Navbar />
                <Habits
                    habit={habit}
                    onIncrease={this.habitIncrease}
                    onDecrease={this.habitDecrease}
                    onDelete={this.habitDelete}
                />
                {/* <div className="habit-set">
                    <input className="habit-input" placeholder="Habit"></input>
                    <button
                        className="habit-btn habit-add"
                        onClick={this.onAdd}
                    >
                        add
                    </button>
                </div>
                <Habits />
                <button className="habit-btn habit-reset">Reset All</button> */}
            </>
        );
    }
}

export default App;
