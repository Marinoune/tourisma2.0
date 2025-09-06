import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar(){
    return(
<div className="navy">
    <Link className="button" to="/home" >Home</Link>
    <Link className="button" to="/contact">Contact</Link>
    <Link className="button" to="/dest">Destinations</Link>
</div>
)
} 
export default Navbar