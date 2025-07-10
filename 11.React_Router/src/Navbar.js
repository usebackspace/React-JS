import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        
    )
}