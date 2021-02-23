import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <div className="habit">
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrease={this.props.onIncrease}
                            onDecrease={this.props.onDecrese}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Habits;
