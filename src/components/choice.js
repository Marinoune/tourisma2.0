import "./choice.css";

function choice({ country }) {
  return (
    <h1 className="bipboup">
        You chose  <i>{country}</i>
    </h1>
  );
}

export default choice;