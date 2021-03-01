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
        const habits = this.state.habits.map((item) => {
            if (habit.id === item.id) {
                return { ...item, count: item.count + 1 };
            } else {
                return item;
            }
        });
        this.setState({ habits });
    };

    habitDecrease = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (habit.id === item.id) {
                console.log(`habit.id: ${habit.id}, item.id: ${item.id}`);
                const count = item.count - 1;
                return { ...item, count: count < 0 ? 0 : count };
            } else {
                return item;
            }
        });
        this.setState({ habits });
    };

    habitDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    onAdd = (name) => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ];
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;
        });
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />

                <Habits
                    habits={this.state.habits}
                    onAdd={this.onAdd}
                    onIncrease={this.habitIncrease}
                    onDecrease={this.habitDecrease}
                    onDelete={this.habitDelete}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
