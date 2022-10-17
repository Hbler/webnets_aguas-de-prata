import { AiOutlineFileSearch } from "react-icons/ai";
import { FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";

import { SSectionServicos } from "./style";

export default function Servicos() {
  const titles = [
    "Portal da Transparência",
    "2ª via IPTU",
    "Portal de Serviços",
    "Concurso Público",
    "Nota Fiscal Eletrônica",
    "Empresas",
    "Serviços ao Contribuinte",
    "Servicos ao Servidores",
  ];

  const icons = [
    <IoMdSearch />,
    <IoDocumentText />,
    <SlScreenDesktop />,
    <AiOutlineFileSearch />,
    <IoDocumentTextOutline />,
    <HiOutlineBuildingOffice2 />,
    <FiUser />,
    <FiUsers />,
  ];

  return (
    <SSectionServicos>
      <div className="container">
        <h2>Principais Serviços</h2>
        <div className="lista">
          {icons.map((icon, i) => (
            <button key={titles[i]}>
              <>
                {icon} {titles[i]}
              </>
            </button>
          ))}
        </div>
      </div>
    </SSectionServicos>
  );
}
