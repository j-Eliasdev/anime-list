import { CardComponent,CardsComponent,ContainerComponent } from "../components/card";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

export default function UpComingPage() {
  const { proximoAnime, isSearch} = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return proximoAnime.map((anime) => {
        return (
          <CardContainer
            key={anime.mal_id}
          >
            <CardComponent>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.large_image_url} alt={""} />
              </Link>
            </CardComponent>{" "}
            <span>{anime.title}</span>
          </CardContainer>
        );
      });
    }
  };

  return (
    <ContainerComponent>
      <h1>
        Próximos <span>anime</span> en estrenos
      </h1>
      <CardsComponent>{conditionalRender()}</CardsComponent>
    </ContainerComponent>
  );
}

const CardContainer = styled.div`
   width:250px;
   text-align: center

`