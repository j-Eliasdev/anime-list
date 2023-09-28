import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";
import { CardComponent } from "../components/card";
export default function DetailsPage() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    background,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    score_by,
    popularity,
    status,
    rating,
    source,
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
    <>
      <Container>
        <div className="img-inf">
          <div className="img-container">
            <img src={images?.jpg.large_image_url} alt={background} />
          </div>
          <div className="infoContent">
            <h1>{title}</h1>
            <div>
              <span>aired: </span>
              {aired?.string}
            </div>
            <div>
              <span>rating: </span>
              {rating}
            </div>
            <div>
              <span>rank: </span>
              {rank}
            </div>
            <div className="star">
              <span>
                <AiTwotoneStar />
              </span>
              {score}
            </div>{" "}
            <div>
              <span>score_by: </span>
              {score_by}
            </div>
            <div>
              <span>popularity: </span>
              {popularity}
            </div>
            <div>
              <span>status: </span>
              {status}
            </div>
            <div>
              <span>source: </span>
              {source}
            </div>
            <div>
              <span>season: </span>
              {season}
            </div>
            <div>
              <span>Duración: </span>
              {duration}
            </div>
          </div>
        </div>
        <div className="synopsis">
          <p>
            {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {!showMore ? "Ver mas" : "Mostrar menos"}
            </button>
          </p>
        </div>
      </Container>
      <div style={{ margin: "10% 0" }}>
        {trailer?.embed_url && (
          <iframe
            src={trailer?.embed_url}
            title={title}
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <Cards>
        {characters?.map((character, index) => {
          const { images, name } = character.character;
          return (
            <div style={{ width: "250px", textAlign: "center" }} key={index}>
              <CardComponent>
                {/* <Link to={`/characters/${mail_id}`}></Link> */}
                <img src={images?.jpg.image_url} alt="" />
              </CardComponent>
              <span>{name}</span>
            </div>
          );
        })}
      </Cards>
    </>
  );
}

const Container = styled.section`
  background-color: #152450;
  overflow: hidden;
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
  .infoContent {
    width: 70%;
    display: inline-block;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  h1 {
    font-size: 2.5rem;
    margin-top: 0;
  }
  .star span {
    font-size: 20px;
    color: yellow;
  }
  .star {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.2rem;
    color: #028bfc;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    .infoContent {
      width: 100%;
    }
    .img-container {
      width: 100%;
    }
    .img-inf {
      display: block;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    color: #b68d40;
  }
`;
