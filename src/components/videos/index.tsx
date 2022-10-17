import CardVideos from "./cards";
import { SSectionVideos } from "./style";

export default function Videos() {
  const imgs = [
    "./assets/cidade.png",
    "./assets/smartphone.png",
    "./assets/rosas.png",
  ];
  const titles = [
    "Cidade recebe verbas para melhorar a rede pública de educação",
    "Baixe o app da cidade e fique por dentro das notícias",
    "Prefeitura segue com limpeza das ruas da cidade",
  ];

  return (
    <SSectionVideos>
      <div className="container">
        <h2>Vídeos</h2>
        <div className="lista">
          {imgs.map((str, i) => (
            <CardVideos img={str} title={titles[i]} key={str} />
          ))}
        </div>
      </div>
    </SSectionVideos>
  );
}
