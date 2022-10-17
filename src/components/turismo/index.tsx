import CardTurismo from "./card";
import { SSectionTurismo } from "./style";

export default function Turismo() {
  const imgs = [
    "./assets/comer.png",
    "./assets/hospedar.png",
    "./assets/pontos.png",
  ];

  const titles = ["Onde Comer", "Onde se Hospedar", "Pontos Turísticos"];

  const colors = ["#b1680a", "#076633", "#071b66"];

  return (
    <SSectionTurismo>
      <div className="container">
        <h2>Turismo</h2>
        <div className="lista">
          {imgs.map((str, i) => (
            <CardTurismo
              key={str}
              img={str}
              title={titles[i]}
              color={colors[i]}
            />
          ))}
        </div>
      </div>
    </SSectionTurismo>
  );
}
