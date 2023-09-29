import { CardComponent } from "../components/card";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

export default function AiringPage() {
  const { airingAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return airingAnime.map((anime) => {
        return (
          <div
            style={{ width: "250px", textAlign: "center" }}
            key={anime.mal_id}
          >
            <CardComponent>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.large_image_url} alt={""} />
              </Link>
            </CardComponent>{" "}
            <span>{anime.title}</span>
          </div>
        );
      });
    }
  };

  return (
    <Container>
      <h1>
        Anime en <span>transmisión</span>
      </h1>
      <Cards>{conditionalRender()}</Cards>
    </Container>
  );
}

const Container = styled.section`
  img {
    width: 100%;
    height: 100%;
  }
  span {
    color: #b68d40;
  }
  h1 {
    color: white;
    font-size: 2.5em;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 600px) {
    justify-content: center;   
  }
`;