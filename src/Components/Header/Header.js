import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/login";

import * as S from "./styles";

const Header = () => {
  const { user, token } = useSelector(state => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  return (
    <S.Header>
      <S.Title>Mini Dogs</S.Title>
      <S.Login
        onClick={() => dispatch(userLogout())}
        aria-label="Logout"
        className={`
        ${loading ? "loading" : ""}
        ${user.data ? "loaded" : ""}
        `}
      ></S.Login>
    </S.Header>
  );
};

export default Header;
