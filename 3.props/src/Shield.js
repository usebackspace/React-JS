import React, { Component } from 'react'

export function Welcome(props) {
    return <h1>Welcome {props.first_name} { props.last_name}</h1>
}

export class WelcomeClass extends Component{
    render() {
        return <h1>Welcome {this.props.first_name} { this.props.last_name}</h1>
    }
}


//====== Pure Function ======

// function Welcome({ name }) {
//     return <h1>Hello, {name}</h1>;  // Pure: just display
// }

// ===== Impure Function =====

// function Welcome(props) {
//     props.name = "Hacked";  //  modifying props not recommended
//     return <h1>Hello, {props.name}</h1>;
// }
