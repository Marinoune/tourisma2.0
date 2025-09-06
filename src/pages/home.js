import "./home.css";
import "../images/pxfuel.jpg"
import "../images/img2.jpg"
import "../images/maria.png"

function Home() {
return(
<section className="sec">
    <div className="div1">
        <h1 style={{color: "rgba(31, 15, 12, 0.82)", textShadow: "10px 10px 20px rgba(22, 15, 13, 0.82)", translate: "-140px -80px", fontSize:"40px", margin:"0px",width:"730px"}}>So, Wanna see the beauty of the World !</h1>
        <p style={{color: "rgb(180, 132, 124)", textShadow: "10px 10px 20px rgba(22, 15, 13, 0.82)", translate: "-60px -20px", fontSize:"30px", margin:"0px",width:"730px"}}> Our tourism company is the Best in the World, <br/>  unique destinations 
        limited edition Destinations , <br/>  Let's dream far No limit no boundary's. </p>
        <p style={{color: "rgba(255, 48, 124, 0.87)", textShadow: "10px 10px 20px rgba(94, 0, 36, 0.66)", translate: "-80px 200px", fontSize:"30px", margin:"0px",width:"500px"}}>CEO of the company TOURISMA:</p>
        <p style={{color: "rgba(31, 15, 12, 0.82)", textShadow: "10px 10px 20px rgba(94, 0, 36, 0.66)", translate: "130px 150px", fontSize:"20px", margin:"0px",width:"300px"}}>MARIA CHAHRAZED REKAB</p>
        <img  src={require("../images/maria.png")} alt="img" style={{translate:"450px 120px", margin:"0px" , width:"200px ", height:"250px"}} />
    </div>
    <div className="div2">
    <img  src={require("../images/pxfuel.jpg")} alt="img" className="home"/>
    <img  src={require("../images/img2.jpg")} alt="img" className="home2"/>
    </div>
</section>
)
}
export default Home;