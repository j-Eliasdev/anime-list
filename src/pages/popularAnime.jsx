import {
  CardComponent,
  CardsComponent,
  ContainerComponent,
} from "../components/card";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

export default function PopularPage() {
  const { popularAnime, searchResults, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <div
            style={{ width: "250px", textAlign: "center" }}
            key={anime.mal_id}
          >
            <CardComponent>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.large_image_url} alt={""} />
              </Link>
            </CardComponent>
            <span>{anime.title}</span>
          </div>
        );
      });
    } else {
      return searchResults.map((anime) => {
        return (
          <div
            style={{ width: "250px", textAlign: "center" }}
            key={anime.mal_id}
          >
            <CardComponent>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.large_image_url} alt={""} />
              </Link>
            </CardComponent>
            <span>{anime.title}</span>
          </div>
        );
      });
    }
  };

  return (
    <ContainerComponent>
      {!isSearch ? (
        <h1>
          Top <span>10</span> mejores anime
        </h1>
      ) : (
        ""
      )}

      <CardsComponent>{conditionalRender()}</CardsComponent>
    </ContainerComponent>
  );
}
