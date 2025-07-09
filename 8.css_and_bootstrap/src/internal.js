import { useState } from "react"

const head = {
    color: "red",
}

const head2 = {
    backgroundColor:"green"
}


export function AvengerInline() {
    const [changeCss, setchangeCss] = useState(false)
    
    const applyCss = () => {
        setchangeCss(true)
    }
    
    const change = {
        backgroundColor:"green"
    }
    if (changeCss) {
        
        change.backgroundColor="red"
    }
    return (
        <>
            <h1 style={head}>Hello Avenger</h1>
            <h1 style={{ ...head, ...head2 }}>Hello Avenger</h1>
            <h1 style={{ ...head, ...{fontSize:"80px"} }}>Hello Avenger</h1>
            <button onClick={applyCss} style={change}>Click Me</button>
        </>
    )
}