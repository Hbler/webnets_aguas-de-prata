import CardGaleria from "./cards";
import { SSectionGaleria } from "./style";

export default function Galeria() {
  const imgs = [
    "./assets/asa.png",
    "./assets/cachoeira.png",
    "./assets/trilho.png",
  ];

  return (
    <SSectionGaleria>
      <div className="container">
        <h2>Galeria</h2>
        <div className="lista">
          {imgs.map((str, i) => (
            <CardGaleria img={str} key={str} />
          ))}
        </div>
      </div>
    </SSectionGaleria>
  );
}
