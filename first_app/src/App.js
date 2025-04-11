import React,{Component} from "react"

// Creating element component
// const aven = <h1>Avenger Assemble</h1>

// export default aven

// Creating function Component

// function Avenger() {
//     return <h1>Avenger Assemble By Function</h1>
// }

// export default Avenger

// Creating Class Component

// class AvengerClass extends Component{
//     render() {
//         return <h1>Avenger Assemble By class</h1>

//     }
// }

// export default AvengerClass


// If we want to export all component at a time then we have to use export keyword at the starting of element, function and class


// Creating element component
export const aven = <h1>Avenger Assemble</h1>

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