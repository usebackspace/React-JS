// In this we will use setState() to set the state.

import React, { Component } from 'react'

export class AvengerState extends Component{

    state = {
        name:'Steve'
    }

    changeHero = () => {
        this.setState({ 'name': 'Tony Stark' })
    }
    
    // componentDidMount() {
    //     this.setState({ 'name': 'Tony Stark' })

    // }
    
    render() {
        return (
         <>
            <h1>Hello, I am {this.state.name} Member of Avenger</h1>
            {/* <button onClick={this.changeHero}>change</button>  */}
         </>   
        )
    }
}


// Passing argument to the Event Handler

// export class AvengerPassingArgument extends Component {

//     state = {
//         arid: 1,
//         name: 'Steve'
//     }

//     changeHero = () => {
//         this.setState({ 'name': 'Tony Stark' })
//     }
//     showarid = (arid) => {
//         console.log(arid)
//     }
//     send_arid = () => {
//         this.showarid(this.state.arid)
//     }

//     render() {
//         return (
//             <>
//                 <h1>Hello, I am {this.state.name} Member of Avenger</h1>
//                 <button onClick={this.changeHero}>change</button>
//                 <button onClick={this.send_arid}>change</button>
//             </>
//         )
//     }
// }