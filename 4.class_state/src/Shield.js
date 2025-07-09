import React, { Component } from 'react'

// export class Welcome extends Component{
//     render() {
//         return <h1>Hello , { this.props.name}</h1>
//     }
// }

// Using State with Constructor

// export class Welcome extends Component{
//     state = {
//         name: 'tony stark',
//         heroic_name: 'Iron Man',
//         // heroic_name: this.props.heroic_name     // Dynamically Want to change the data

//     }
//     render() {
//         return <h1>Hello , {this.state.name} your Heroic Name is {this.state.heroic_name}</h1>
//     }
// }


// Using State without Constructor

export class Welcome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'tony stark',
            heroic_name: 'Iron Man',
            // heroic_name: this.props.heroic_name     // Dynamically Want to change the data

        }
    }
    
    render() {
        return <h1>Hello , {this.state.name} your Heroic Name is {this.state.heroic_name}</h1>
    }
}

