
import Paris from "../images/pxfuel (2).jpg"
import Edinbourg from "../images/pxfuel (1).jpg"
import Tokyo from "../images/pxfuel (3).jpg"


function bingbong({ country}) {
  let img;
  let text;

  switch (country) {
    case "Paris":
      img = Paris;
      text= "It is the most densely populated city in the European Union with 20.653 people per square kilometer. The Seine river runs through the oldest part of Paris, and divides it into two parts,known as the Left Bank and the Right Bank. It is surrounded by many forests."
      break;
    case "Tokyo":
      img = Tokyo;
      text= "Tokyo, city and capital of Tokyo to (metropolis) and of Japan. It is located at the head of Tokyo Bay on the Pacific coast of central Honshu. It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban and industrial agglomeration in Japan"
      break;
    case "Edinbourg":
      img = Edinbourg;
      text= "Recognised as the capital of Scotland since at least the 15th century, Edinburgh is the seat of the Scottish Government, the Scottish Parliament, the highest courts in Scotland, and the Palace of Holyroodhouse, the official residence of the British monarch in Scotland"
      break;
    default:
      img = null;
      break;
  }

  return (
      <div>
        <img src={img} alt={country} />
        <p>{text}</p>
      </div>
  );
}

export default bingbong;
