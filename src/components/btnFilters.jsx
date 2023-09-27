/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function btnFilters() {
  return (
    <Filters>
      <BtnLink to="/popular">Top 12 Animes</BtnLink>
      <BtnLink>En transmisión</BtnLink>
      <BtnLink>Próximos Estrenos</BtnLink>
    </Filters>
  );
}

const Filters = styled.header`
  margin: 10% 0 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
const BtnLink = styled(Link)`
  padding: 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  background-color: #fff;
  text-decoration: none;
  color: #b68d40;
  border: none;
  font-weight: 600;
  transition: 0.5s ease;
  cursor: pointer;
  width: 200px;

  &:hover {
    background-color: #b68d40;
    color: white;
  }
`;
