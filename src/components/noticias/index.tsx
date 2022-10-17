import CardNoticia from "./cards";
import { SSectionNoticias } from "./style";

export default function Noticias() {
  const imgs = [
    "./assets/reuniao.png",
    "./assets/fotografo.png",
    "./assets/aulas.png",
    "./assets/conheca.png",
    "./assets/covid.png",
    "./assets/golpes.png",
  ];
  const titles = [
    "Reunião para melhorias na cidade acontece hoje",
    "Encontro de fotógrafos reune grandes artistas",
    "Aulas não retornam esse mês veja o calendário",
    "Conheça nossa cidade e tudo que está por vir",
    "Saiba como se prevenir contra o Covid-19",
    "Dicas de como evitar golpes on-line",
  ];
  const date = "20 janeiro 2021";

  return (
    <SSectionNoticias>
      <div className="container">
        <h2>Notícias</h2>
        <div className="lista">
          {imgs.map((str, i) => (
            <CardNoticia img={str} title={titles[i]} date={date} key={str} />
          ))}
        </div>
        <button>Veja mais</button>
      </div>
    </SSectionNoticias>
  );
}
