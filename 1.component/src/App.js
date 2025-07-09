import React,{Component} from "react"


// Creating function Component

export function Avenger() {
    return <h1>Avenger Assemble By Function</h1>
}

// Creating Class Component

export class AvengerClass extends Component {
    render() {
        return <h1>Avenger Assemble By class</h1>
        // return React.createElement('h1', null,'Avenger Assemble By class')

    }
}


// 