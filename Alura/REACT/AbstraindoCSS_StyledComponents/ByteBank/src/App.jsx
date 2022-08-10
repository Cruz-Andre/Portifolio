import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from './Components/UI/temas'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {
  const [tema, setTema] = useState(true)

  const mudaTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={mudaTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
