import { CardComponent } from "../components/card";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  const { allAnime, isSearch, setCurrentPage, currentPage } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return allAnime.map((anime) => {
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
        Todos los <span>anime</span>
      </h1>
      <Cards>{conditionalRender()}</Cards>
      <button onClick={()=> setCurrentPage(currentPage+1)}>Mostrar mas</button>
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
