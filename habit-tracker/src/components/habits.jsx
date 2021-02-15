import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    habitIncrease = (habit) => {
        this.props.onIncrease(habit);
    };

    habitDecrease = (habit) => {
        this.props.onDecrease(habit);
    };

    habitDelete = (habit) => {
        this.props.onDelete(habit);
    };
    render() {
        return (
            <ul>
                {this.props.habits.map((habit) => (
                    <Habit
                        habit={habit}
                        onIncrease={this.habitIncrease}
                        onDecrease={this.habitDecrease}
                        onDelete={this.habitDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;
