import "./homework02.css";
import Card from "./Card";


function tick() {
   const element = <h2>TIME: {new Date().toLocaleTimeString()}</h2>;
  //  ReactDOM.render(element, document.getElementById('root'));
  return element;
}

export default function Homework02() {
  return (
    <div>
      <header className="hw2-header">HW 2</header>
      <main>
        {tick()}
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
