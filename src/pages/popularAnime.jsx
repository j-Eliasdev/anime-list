import {CardComponent} from "../components/card";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

export default function PopularPage() {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <CardComponent key={anime.mal_id}>
            <Link to={`/anime/${anime.mal_id}`}>
              <img src={anime.images.jpg.large_image_url} alt={""} />
            </Link>
          </CardComponent>
        );
      });
    }
  };

  return (
    <Container>
      <h1>
        Top <span>10</span> mejores anime
      </h1>
      <Cards>{conditionalRender()}</Cards>
    </Container>
  );
}

const Container = styled.section`
  text-align: center;

  img{
    width:100%;
    height:100%;
  }
  span {
    color: #b68d40;
  }
  h1 {
    color: white;
    font-size: 3.2em;
    line-height: 1.1;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
