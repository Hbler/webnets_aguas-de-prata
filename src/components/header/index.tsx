import { IoMdContrast, IoMdSearch } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import brasao from "../../assets/brasao.jpg";
import { SAcessibilidade, SHeader, SInstitucional, SNavigation } from "./style";

export default function Header() {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outrubro",
    "novembro",
    "dezembro",
  ];

  const date = new Date();
  const dateToShow = `${date.getUTCDate()} de ${
    months[date.getUTCMonth()]
  } de ${date.getFullYear()}`;

  return (
    <SHeader>
      <SAcessibilidade>
        <div className="container">
          <div>
            <button>
              <IoMdContrast />
            </button>
            <button>A+</button>
            <button>a-</button>
            <button>Acessibilidade</button>
          </div>
          <ul>
            <li>
              <a href="#">Ir para o conteúdo</a>
            </li>
            <li>
              <a href="#">Ir para o menu</a>
            </li>
            <li>
              <a href="#">Ir para a busca</a>
            </li>
            <li>
              <a href="#">Ir para o rodapé</a>
            </li>
          </ul>
        </div>
      </SAcessibilidade>
      <SInstitucional>
        <div className="container">
          <div className="institucional_logo">
            <img src={brasao} alt="brasão da prefeitura" />

            <h1>
              <span>Prefeitura Municipal de </span>Águas da Prata
            </h1>
          </div>
          <div className="institucional_pesquisa">
            <p>{dateToShow}</p>
            <div className="social">
              <FaFacebookSquare />
              <FaInstagramSquare />
            </div>
            <div className="pesquisa">
              <input type="text" />
              <button>
                <IoMdSearch />
              </button>
            </div>
          </div>
        </div>
      </SInstitucional>
      <SNavigation>
        <div className="container">
          <ul>
            <li>
              <a href="#">Sobre a Cidade</a>
            </li>
            <li>
              <a href="#">Secretarias</a>
            </li>
            <li>
              <a href="#">Turismo</a>
            </li>
            <li>
              <a href="#">Notícias</a>
            </li>
            <li>
              <a href="#">Diário Oficial</a>
            </li>
            <li>
              <a href="#">Plano Diretor</a>
            </li>
            <li>
              <a href="#">Decretos e Portarias</a>
            </li>
            <li>
              <a href="#">Editais</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </SNavigation>
    </SHeader>
  );
}
