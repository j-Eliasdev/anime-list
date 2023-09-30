import {
  CardComponent,
  CardsComponent,
  ContainerComponent,
} from "../components/card";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

export default function LandingPage() {
  const {
    allAnime,
    searchResults,
    getAnime,
    isSearch,
    setCurrentPage,
    currentPage,
  } = useGlobalContext();

  useEffect(() => {
    getAnime(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const conditionalRender = () => {
    if (!isSearch) {
      return allAnime.map((anime, index) => {
        return (
          <div style={{ width: "250px", textAlign: "center" }} key={index}>
            <CardComponent>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.large_image_url} alt={""} />
              </Link>
            </CardComponent>{" "}
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
          Todos los <span>anime</span>
        </h1>
      ) : (
        ""
      )}

      <InfiniteScroll
        dataLength={allAnime.length}
        next={() => {
          setCurrentPage(currentPage + 1);
        }}
        hasMore={true}
        scrollableTarget="infiniteScroll"
      >
        <CardsComponent>{conditionalRender()}</CardsComponent>
      </InfiniteScroll>
    </ContainerComponent>
  );
}
