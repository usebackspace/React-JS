import "./External2.css"
import style2 from "./External2.module.css"

export function AvengerExternal2() {
    return (
        <>
        <h1 className="hello">Hello Avenger External 2</h1>
        <h1 className={style2.mod}>Hello Avenger CSS Moudle 2</h1>
        </>
    )
}