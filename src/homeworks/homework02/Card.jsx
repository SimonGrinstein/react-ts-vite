import "./homework02.css";
import myImage from "../../assets/schnecke.jpg";

function Card() {
  const hobbys = ["Drawing with slime", "Running in place", "Gardening"];
  const hobbysElements = hobbys.map((item) => <li>{item}</li>);

  return (
    <div className="hw2-card">
      <img className="img_schnecke" src={myImage} alt="img-snail" />
      <h1 className="hw2-h1">Leisurely Snail</h1>
      <h3>Slow Racer</h3>
      <p>Hobbys</p>
      <div>{hobbysElements}</div>
    </div>
  );
}

export default Card;
