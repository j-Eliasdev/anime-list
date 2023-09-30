/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

export default function btnFilters() {
  const { getPopularAnime, getAiringAnime, getUpcomingAnime, isSearch } =
    useGlobalContext();

  return (
    <>
      {!isSearch ? (
        <Filters id="myBtn">
          <Link to="/">
            {" "}
            <BtnLink>Todos los anime</BtnLink>{" "}
          </Link>
          <Link to="/popular">
            {" "}
            <BtnLink
              className="btn"
              onClick={() => {
                getPopularAnime();
              }}
            >
              Top 10 Animes
            </BtnLink>{" "}
          </Link>
          <Link to="/airing">
            <BtnLink
              className="btn"
              onClick={() => {
                getAiringAnime();
              }}
            >
              En transmisión
            </BtnLink>
          </Link>
          <Link to="/upcoming">
            <BtnLink
              className="btn"
              onClick={() => {
                getUpcomingAnime();
              }}
            >
              Próximos Estrenos
            </BtnLink>
          </Link>
        </Filters>
      ) : (
        <Filters>
          <Link to="/">
            <BtnLink className="active">Animes Encontrados</BtnLink>
          </Link>
        </Filters>
      )}
    </>
  );
}

const Filters = styled.header`
  margin: 170px 0 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  .active{
    background-color: #b68d40;
    color: #050217;
  }

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
