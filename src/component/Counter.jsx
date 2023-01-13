import React, { Component } from 'react';
import Hello from '../Hello';

class Counter extends Component {
    constructor() {
        super();
        console.log('in constructor');
        this.state = {
            count: 0,
            name: "",
            isLogin : false
        };
        }

        componentWillMount() {
            console.log('in componentWillMount');
        }
    
        componentDidMount() {
            console.log('in componentDidMount');
            
        }

        componentWillUpdate() {
            console.log('in componentWillUpdate');
            
        }

        componentDidUpdate() {
            console.log('in componentDidUpdate');
            document.title = `clicked ${this.state.count} times`
        }

        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        handleName = (event) => {
            this.setState({
                name: event.target.value
            })
        }
        
    render() {
        return this.state.isLogin? (
            <h1>Hello Tushar</h1>
        ): (
            <h1>Please Login First</h1>
        )
        /*if (this.state.isLogin) {

        return (
            <div>
                <button onClick={this.handleClick}>Click {this.state.count}</button> 
                <Hello name = "Tushar" />  
            </div>
        );
    } 
    else {
        return (
            <div>
                <button onClick={this.handleClick}>Click {this.state.count}</button> 
            </div>
        )
    }*/
}
}

export default Counter;