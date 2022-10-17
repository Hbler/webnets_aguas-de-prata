import React from "react";
import Banner from "./components/banner";
import Galeria from "./components/galeria";
import Header from "./components/header";
import Noticias from "./components/noticias";
import Servicos from "./components/servico";
import Turismo from "./components/turismo";
import Videos from "./components/videos";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Noticias />
      <Servicos />
      <Turismo />
      <Galeria />
      <Videos />
    </>
  );
}

export default App;
