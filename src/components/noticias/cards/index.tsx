import { Card } from "./style";

interface Dados {
  img: string;
  title: string;
  date: string;
}

export default function CardNoticia({ img, title, date }: Dados) {
  return (
    <Card>
      <figure>
        <img src={img} alt={img.split("/")[2]} />
      </figure>
      <h3>{title}</h3>
      <small>{date}</small>
    </Card>
  );
}
