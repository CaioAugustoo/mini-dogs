import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0px;
`;

export const Login = styled.button`
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  display: block;
  background: white;
  width: 8px;
  height: 8px;
  border: 2px solid;
  box-sizing: border-box;
  border-radius: 50%;

  &.loading {
    background: orange;
  }

  &.loaded {
    background: greenyellow;
  }
`;
