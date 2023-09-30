/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

export default function btnFilters() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getPopularAnime, getAiringAnime, getUpcomingAnime } = useGlobalContext();

  return (
    <Filters>
      <Link to="/">
        {" "}
        <BtnLink>Todos los anime</BtnLink>{" "}
      </Link>
      <Link to="/popular">
        {" "}
        <BtnLink
          onClick={() => {
            getPopularAnime();
          }}
        >
          Top 10 Animes
        </BtnLink>{" "}
      </Link>
      <Link to="/airing">
        <BtnLink
          onClick={() => {
            getAiringAnime();
          }}
        >
          En transmisión
        </BtnLink>
      </Link>
      <Link to="/upcoming">
        <BtnLink
          onClick={() => {
            getUpcomingAnime();
          }}
        >
          Próximos Estrenos
        </BtnLink>
      </Link>
    </Filters>
  );
}

const Filters = styled.header`
  margin: 170px 0 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 1060px) {
    margin-top: 120px;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const BtnLink = styled.button`
  padding: 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  background-color: #050217;
  text-decoration: none;
  color: #b68d40;
  border: none;
  font-weight: 600;
  transition: 0.5s ease;
  cursor: pointer;
  width: 250px;

  &:hover {
    background-color: #b68d40;
    color: #050217;
  }
`;
