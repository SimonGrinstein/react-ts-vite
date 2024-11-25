import "./homework05.css";

interface IHeroCardProps {
  key: number
  isDark:boolean
  name:string
  image:string
  age:number
  weapons:string[]
}

export default function HeroCard({ key, name, isDark, age, image, weapons }: IHeroCardProps) {
  return (
    <article key={key} className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>{name} is {age} years old</p>
      <img src={image} alt="" />
      <p>
        Hero weapons
        {weapons.map((weapon, index) => (
          <span className="weapon" key={index}>{" "}{weapon}</span>
        ))}
      </p>
    </article>
  );
}
