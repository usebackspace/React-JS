

export function AvengerUser(props) {
    return (
        <>
            <h1>Welcome Avenger</h1>
            <button onClick={props.clickDetail}>Log In</button>
            <button>Sing Up</button>
        </>
    )
}