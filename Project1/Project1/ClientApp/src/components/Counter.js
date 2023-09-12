import React, { Component } from 'react';

export class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { customValue: 0 };
        this.incrementValue = this.incrementValue.bind(this);
    }

    incrementValue() {
        this.setState({
            customValue: this.state.customValue + 1
        });
    }

    render() {
        return (
            <div>
                <h1>My Custom Component</h1>

                <p>This is a custom React component.</p>

                <p aria-live="polite">Custom value: <strong>{this.state.customValue}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementValue}>Increment</button>
            </div>
        );
    }
}
