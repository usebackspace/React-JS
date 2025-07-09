import { AvengerWelcome } from "./Welcome";
import { AvengerUser } from "./User";
import { useState } from "react";

// using if-else
// export function ShieldPass(props) {
//     const isregister = props.register
//     if (isregister) {
//         return <AvengerWelcome />
//     }
//     else {
//         return <AvengerUser/>
// }
// }

// using ternary operator

// export function ShieldPass(props) {
//     const isregister = props.register
//     return isregister?<AvengerWelcome/>:<AvengerUser/>
// }


// Using logical && (show of if condition is true)
// export function ShieldPass(props) {
//     const isregister = props.register
//     if (isregister) {
//         return <AvengerWelcome admin={false} />
//     }
//     else {
//         return <AvengerUser />
//     }
// }

// Using Variable inside Function
// export function ShieldPass(props) {
//     const isregister = props.register
//     let ren
//     if (isregister) {
//         ren= <AvengerWelcome admin={false} />
//     }
//     else {
//         ren= <AvengerUser />
//     }
//     return (
//         <>
//         { ren }
//         </>
//     )
// }


//using State
export function ShieldPass() {
    const [isregister, setIsRegister] = useState(false)

    const logout = () => {
        setIsRegister(false)
    }

    const login = () => {
        setIsRegister(true)
    }
    
    if (isregister) {
        return <AvengerWelcome clickDetail={logout} />
    }
    else {
        return <AvengerUser clickDetail={login} />
}
}