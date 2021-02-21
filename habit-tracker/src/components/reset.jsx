import React, { Component } from 'react';

class Reset extends Component {
    handleReset = () => {};

    render() {
        return (
            <button className="reset" onClick={this.handleReset}>
                Reset All
            </button>
        );
    }
}
export default Reset;
