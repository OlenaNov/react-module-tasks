import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value -1,
        }));
    };

    render() {
        return (
            <div className="counter">
            <span>{this.state.value}</span>

            <div className="counter__controls">
                <button type="button" onClick={this.handleIncrement}>Plus 1</button>
                <button type="button" onClick={this.handleDecrement}>Minus 1</button>
            </div>
        </div>
        )
    }
};

export default Counter; 