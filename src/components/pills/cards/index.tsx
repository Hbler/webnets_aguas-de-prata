import { Card } from "./style";

interface Dados {
  img: string;
}

export default function CardGaleria({ img }: Dados) {
  return (
    <Card>
      <figure>
        <img src={img} alt={img.split("/")[2]} />
      </figure>
    </Card>
  );
}
