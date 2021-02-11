import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Eating', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    habitIncrease = (habit) => {
        const habits = { ...this.state.habits };
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
    };

    habitDecrease = (habit) => {};

    habitDelete = (habit) => {};
    render() {
        return (
            <ul>
                {this.state.habits.map((habit) => (
                    <Habit
                        habit={habit}
                        onIncrease={this.habitIncrease}
                        onDecrease={this.habitDecrease}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;
