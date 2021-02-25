import React, { Component } from 'react';

class HabitAddForm extends Component {
    render() {
        return <input type="text" onClick={this.props.onAdd} />;
    }
}

export default HabitAddForm;
