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

// Inline Stylesheet CSS will be available to only that particular component.

// .CSS is a Css which apply globally, which means if use className='hello' in External.js and same className='hello' in External2.js then it will override the CSS to tackel that we will use module.css.