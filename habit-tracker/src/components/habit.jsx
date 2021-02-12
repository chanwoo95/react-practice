import React, { Component } from 'react';

class Habit extends Component {
    habitIncrease = () => {
        this.props.onIncrease(this.props.habit);
    };

    habitDecrease = () => {
        this.props.onDecrease(this.props.habit);
    };

    habitDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.habitIncrease}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.habitDecrease}
                >
                    <i className="fas fa-minus-square"></i>
                </button>
                <button
                    className="habit-button habit-trash"
                    onClick={this.habitDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
