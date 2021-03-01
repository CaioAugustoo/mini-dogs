import React from "react";

import { useDispatch } from "react-redux";
import { login } from "../../store/login";

import * as S from "./styles";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <S.Label htmlFor="username">Usuário</S.Label>
      <S.Input
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <S.Label htmlFor="password">Senha</S.Label>
      <S.Input
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <S.Button>Enviar</S.Button>
    </form>
  );
};

export default Login;
