// import aven from "./App";
// import Avenger from "./App";
// import AvengerClass from "./App";
import ReactDOM from "react-dom/client"
import React from "react";

// Importing all component at a time 
import { AvengerClass,aven,Avenger } from "./App";

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(aven)
root.render(<Avenger/>)
root.render(<AvengerClass/>)

// render all component at a time

// root.render(<>
//     <Avenger/>
//     <AvengerClass />
//     {aven}
// </>)

