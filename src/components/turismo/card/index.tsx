import { Card } from "./style";

interface Dados {
  img: string;
  title: string;
  color: string;
}

export default function CardTurismo({ img, title, color }: Dados) {
  return (
    <Card color={color}>
      <figure>
        <img src={img} alt={img.split("/")[2]} />
      </figure>
      <button>{title}</button>
    </Card>
  );
}
