import React from "react";

import { useDispatch } from "react-redux";

import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";

import { autoLogin } from "./store/login";
import { Container, GlobalStyles } from "./styles/global";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Content />
      <GlobalStyles />
    </Container>
  );
}

export default App;
