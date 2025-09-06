import "./Destinations.css"
import Choice from "../components/choice";
import Bingbong from "../components/bingbong";
import { useParams } from "react-router-dom";

function Destination() {
  const { country } = useParams();
  
  return (
    <main>
      <Choice country={country} />
      <Bingbong country={country} />
    </main>
  )
}

export default Destination;