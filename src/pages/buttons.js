import { Link} from "react-router-dom";
import "./buttons.css"
import "../images/pxfuel (4).jpg"


function buttons(){
    return(
<div>
    <img src={require("../images/pxfuel (4).jpg")} alt="background"/>
    <h1 className="hohe">Choose your destination :</h1>
    <div className="yey">
    <Link to="/dest/Paris" className="straw">
        Paris
      </Link>
      <Link to="/dest/Tokyo" className="straw2">
        Tokyo
      </Link>
      <Link to="/dest/Edinbourg" className="straw3">
        Edinbourg
      </Link>
      </div>
</div>
)
} 
export default buttons;