import styled from "styled-components";

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr auto;
  grid-template-rows: 50px;
  align-items: center;
  gap: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin: 0px;
`;

export const Views = styled.span`
  font-family: monospace;
  font-size: 0.875rem;
  color: #999;
`;

export const Button = styled.button`
  margin: 1rem 0 0 auto;
  display: block;
  width: 32px;
  height: 32px;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  font-family: Roboto, sans-serif;
  border: none;
`;
