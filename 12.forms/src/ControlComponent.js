import { useState } from "react"

// export function AvengerForm() {
//     const [name, setName] = useState('Steve')
    
//     const handleName = (e) => {
//         console.log(e.target.value)
//         setName(e.target.value)    // Updates the state with input value
//         setName(e.target.value.toUpperCase())
//         setName(e.target.value.toUpperCase().substr(0,4))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()    // Prevents the form from refreshing the page
//         console.log('Form Submitted Successfully! ')
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 <label htmlFor="">First Name: </label>
//                 <input type="text" value={ name} onChange={handleName}/><br></br><br></br>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
    
// }

// Handling Mutliple Form Input

// export function AvengerForm() {
//     const [name, setName] = useState('Steve')
//     const [lname, setLname] = useState('')

//     const handleName = (e) => {
//         console.log(e.target.value)
//         setName(e.target.value)    // Updates the state with input value
//         // setName(e.target.value.toUpperCase())
//         // setName(e.target.value.toUpperCase().substr(0, 4))
//     }

//     const handleLname = (e) => {
//         console.log(e.target.value)
//         setLname(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()    // Prevents the form from refreshing the page
//         console.log('Form Submitted Successfully! ')
//     }


//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 <label htmlFor="">First Name: </label>
//                 <input type="text" value={name} onChange={handleName} /><br></br><br></br>
//                 <label htmlFor="">Last Name: </label>
//                 <input type="text" value={lname} onChange={handleLname} /><br></br><br></br>
//                 <input type="submit" />
//             </form>
//         </div>
//     )

// }


// Handling Mutliple Form Input

export function AvengerForm() {
    const [formdata, setFormData] = useState({fname:'',lname:''})

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }

  
    const handleSubmit = (e) => {
        e.preventDefault()    // Prevents the form from refreshing the page
        console.log('Form Submitted Successfully! ')
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">First Name: </label>
                <input type="text" value={formdata.fname} onChange={handleChange}  name="fname"/><br></br><br></br>
                <label htmlFor="">Last Name: </label>
                <input type="text" value={formdata.lname} onChange={handleChange} name="lname"/><br></br><br></br>
                <input type="submit" />
            </form>
        </div>
    )

}