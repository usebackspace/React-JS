

export function Err() {
    let result
    let errmsg = ''
    try {
        let a = 10
        let b = 10
        if (b === 0) {
            throw new Error('cannot be divided by zero')
        }
        result =a/b
    }
    catch (err) {
        errmsg=err.message
    }
    return <>
        {errmsg ? <p>{errmsg}</p> : (<h1>Result is: { result}</h1>)}
    </>
}