import "./External.css"
import style from "./External.module.css"
import style1 from "./External2.module.css"

export function AvengerExternal() {
    return (
        <>
        <h1 className="hello">Hello Avenger External</h1>
        <h1 className={style.mod}>Hello Avenger CSS Moudle</h1>
        <h1 className={style1.mod}>Hello Avenger CSS Moudle 2</h1>
        </>
    )
}