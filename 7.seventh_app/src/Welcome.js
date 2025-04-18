

// export function AvengerWelcome() {
//     return (
//         <>
//             <h1>Welcome Steve Roger</h1>
//             <button>Log Out</button>
//         </>
//     )
// }

// using logical &&
// export function AvengerWelcome(props) {
//     const isadmin = props.admin
//     return (
//         <>
//             <h1>Welcome Steve Roger</h1>
//             <button>Log Out</button>
//             {isadmin && <button>Delete</button>}
//         </>
//     )
// }

// Using State
export function AvengerWelcome(props) {
    const isadmin = props.admin
    return (
        <>
            <h1>Welcome Steve Roger</h1>
            <button onClick={props.clickDetail}>Log Out</button>
            {isadmin && <button>Delete</button>}
        </>
    )
}