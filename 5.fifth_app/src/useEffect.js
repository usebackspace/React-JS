import {  useEffect, useState } from "react"


 export function AvengerEffect() {

     const [power, setPower] = useState(100)
     const[willianpower,setWillianPower]=useState(100)
     
    const increasePower = () => {
        setPower(power + 1)
    }
    
     const decreasePower = () => {
        setWillianPower( willianpower -1)
     }
    
     // After every render
     useEffect(() => {
         console.log("Use Effect Called")
     })

     //Only once (on mount)
    //  useEffect(() => {
    //      console.log("Use Effect Called")
     //  },[])

    // Effect only on willian power is clicked
    //  useEffect(() => {
    //      console.log("Use Effect Called")
    //  },[willlianpower])

     // Cleanup on unmount or before re-running
    // useEffect(() => {
    //     console.log("Use Effect Called")

    //     return () => {
    //         console.log(" AvengerEffect Unmounted (Cleanup)");
    //     };
    //  }) 

     
    return (
        <>
            <h1>Power Of Captain America : {power} </h1>
            <button onClick={increasePower}>Increase Power</button>

            <h1>Power Of Willian : {willianpower} </h1>
            <button onClick={decreasePower}>Decrease Power</button>
        </>
        
    )
}