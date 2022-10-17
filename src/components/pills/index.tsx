import CardGaleria from "./cards";
import { SSectionPills } from "./style";

export default function Pills() {
  const imgs = [
    "./assets/asa.png",
    "./assets/cachoeira.png",
    "./assets/trilho.png",
  ];

  return (
    <SSectionPills>
      <div className="container">
        <div className="lista">
          {imgs.map((str, i) => (
            <CardGaleria img={str} key={str} />
          ))}
        </div>
      </div>
    </SSectionPills>
  );
}
