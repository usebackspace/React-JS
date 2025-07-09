import { useState } from "react"

export function AvengerState() {
    const [name, setname] = useState('Steve Roger')
    const [heroic_name, setheroicname] = useState('Captain America')

    const changeName = () => {
        setname('Tony stark')
        setheroicname('Ironman')
    }
    return (
        <>
            <h1>Hello, {name} your heroic name is {heroic_name}</h1>
            <button onClick={changeName}>change Name</button>
        </>
    )
}