import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { AiTwotoneStar, AiTwotoneHeart } from "react-icons/ai";
import {
  CardComponent,
  CardsComponent,
  ContainerComponent,
} from "../components/card";
export default function DetailsPage() {
  const { id } = useParams();

  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    background,
    trailer,
    images,
    score,
    scored_by,
    status,
    episodes,
    favorites,
    year,
  } = anime;

  const GetAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const GetCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    GetAnime(id);
    GetCharacters(id);
  }, [id]);

  return (
    <section>
      <Container>
        <div className="img-inf">
          <div className="img-container">
            <img src={images?.jpg.large_image_url} alt={background} />
          </div>
          <Information>
            <h1>{title}</h1>

            {year ? (
              <div>
                {" "}
                <span>Emitido en </span>
                {year}{" "}
              </div>
            ) : (
              ""
            )}
            {episodes ? (
              <div>
                <span>Total de episodios: </span>
                {episodes}
              </div>
            ) : (
              ""
            )}
            {status ? (
              <div>
                <span>Estado: </span>
                {status}
              </div>
            ) : (
              ""
            )}
            {score ? (
              <div className="star">
                <span>
                  <AiTwotoneStar />
                </span>
                {score}
              </div>
            ) : (
              ""
            )}
            {favorites ? (
              <div className="heart">
                <span>
                  <AiTwotoneHeart />
                </span>
                {favorites}
              </div>
            ) : (
              ""
            )}
            {scored_by ? (
              <div>
                {scored_by}
                <span> Votos</span>
              </div>
            ) : (
              ""
            )}
          </Information>
        </div>
        <div>
          <h2>Synopsis</h2>
          <p>
            {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {!showMore ? "MÁS DETALLES" : "MENOS DETALLES"}
            </button>
          </p>
        </div>
      </Container>

      {/* TRAILER */}

      {trailer?.embed_url ? (
        <SectionTrailer>
          <h1>Trailer</h1>
          <div className="div-trailer">
            <iframe
              src={trailer?.embed_url}
              title={title}
              className="trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SectionTrailer>
      ) : (
        ""
      )}

      <ContainerComponent>
        <h1>Personajes</h1>
        <CardsComponent>
          {characters?.map((character, index) => {
            const { images, name } = character.character;
            return (
              <div key={index} style={{ width: "250px", textAlign: "center" }}>
                <CardComponent>
                  <img src={images?.jpg.image_url} alt="" />
                </CardComponent>
                <span>{name}</span>
              </div>
            );
          })}
        </CardsComponent>
      </ContainerComponent>
    </section>
  );
}

const Container = styled.section`
  background-color: #050217;
  color: white;
  border-radius: 15px;
  gap: 2%;
  width: auto;
  padding: 10px;
  .img-inf {
    display: flex;
    gap: 2%;
  }
  .img-container {
    width: 300px;
    height: auto;
  }
  h2 {
    color: #b68d40;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 12px;
    color: #028bfc;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .img-container {
      width: 100%;
    }
    .img-inf {
      display: block;
    }
  }
`;

const Information = styled.div`
  width: 70%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 7%;
  

  span {
    font-weight: 600;
    font-family: sans-serif;
  }

  .star span {
    font-size: 20px;
    color: #d6d61f;
  }

  .heart span {
    font-size: 20px;
    color: #b90808;
  }

  .star,
  .heart {
    display: flex;
    gap: 3px;
  }
  h1 {
    font-size: 2.5rem;
    margin: 0px 0px;
    color: #b68d40;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10%;
    .infoContent {
      width: 100%;
    }
  }
`;

const SectionTrailer = styled.section`
  margin: 10% 0px;

  h1 {
    font-size: 2.5em;
  }
  .div-trailer {
    height: 750px;

    @media (max-width: 1100px) {
      height: 550px;
    }
    @media (max-width: 850px) {
      height: 450px;
    }
    @media (max-width: 650px) {
      height: 350px;
    }
    @media (max-width: 500px) {
      height: 250px;
    }
    @media (max-width: 380px) {
      height: 190px;
    }
  }

  .trailer {
    width: 100%;
    border-radius: 7px;
    border: none;
    height: 100%;
  }
`;
