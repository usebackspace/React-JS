import { useRef } from "react"

// ======= Changing the background Color ==========

export function AvengerChangeColor() {

    const headRef = useRef(null)
    
    const changeCss = () => {
        headRef.current.style.backgroundColor='green'
       
    }
    
    const head = {
        backgroundColor:'red'
    }

   
    return (
        <>
            <h1 style={head} ref={headRef}>Avenger Assemble</h1>
            <button onClick={changeCss}>Change Color</button>
        </>
)
}



// ====== Changing the focus on input Element ========

// export function AvengerChangeColor() {

//     const headRef = useRef(null)
    
//     const changeFocus = () => {
//         headRef.current.focus()
//     }
     
//     return (
//         <>
//             <label htmlFor="">First Name: </label>
//             <input type="text" ref={headRef} placeholder="Enter your name"/>
//             <button onClick={changeFocus}>Change Focus</button>
//         </>
// )
// }



// ======= Setting and getting the name in input element =======

// export function AvengerChangeColor() {

//     const headRef = useRef(null)
    
//     const setName = () => {
//         headRef.current.value='Steve Roger'
//     }
    
//     const getName = () => {
//         alert(headRef.current.value)
        
//     }

   
//     return (
//         <>
//             <label htmlFor="">First Name: </label>
//             <input type="text" ref={headRef} placeholder="Enter your name"/>
//             <button onClick={setName}>Set Name</button>
//             <button onClick={getName}>Get Name</button>
//         </>
// )
// }