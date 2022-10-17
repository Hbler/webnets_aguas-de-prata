import { Card } from "./style";

interface Dados {
  img: string;
  title: string;
}

export default function CardVideos({ img, title }: Dados) {
  return (
    <Card>
      <figure>
        <img src={img} alt={img.split("/")[2]} />
      </figure>
      <h4>{title}</h4>
    </Card>
  );
}
