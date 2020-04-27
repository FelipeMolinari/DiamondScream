import React from "react";
import GlobalStyles, { Container } from "./styles/global";
import { Provider } from "react-redux";
import Routes from "./routes";
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Container>
        <Header />
        <Aside />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
