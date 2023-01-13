import React, { Component } from 'react';
import Counter from './component/Counter';
import './Hello.css';



class Hello extends Component {
    constructor(props) {
        super(props);
        console.log('in counstructor'); 
    }

    componentWillMount() {
        console.log('in componentWillMount');
    }

    componentDidMount() {
        console.log('in componentDidMount');
    }
    render() {
        console.log(this.props)
        return (
            <>
                <h1> Hello {this.props.name} </h1>
            </>             
        );
    }
}

export default Hello;