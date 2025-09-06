import "./contact.css";
import "../images/pxfuel (4).jpg"

function Contact() {
  return (
    <main >
      <img  src={require("../images/pxfuel (4).jpg")} alt="img" className="img"/>
      <div className="card">
        <h2>Contact Us :</h2>
        <form action="">
          <label for="nom">Name :</label>
          <br />
          <input type="text" name="nom"></input>
          <br /><br />
          <label for="nom">Email :</label>
          <br />
          <input type="email" name="Submit"></input>
          <br /><br />
        </form>
        <button type="submit">Submit</button>
      </div>
    </main>
  );
}

export default Contact;