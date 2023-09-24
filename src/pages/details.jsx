import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function DetailsPage() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    sypnopsis,
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
    console.log(data.data);
  };

  useEffect(() => {
    GetAnime(id);
  }, [id]);

  return (
    <Container>
      <Card>
        <div className="cardImg">
          <img src={images?.jpg.large_image_url} alt="" />
        </div>
        <div className="cardInfo">
          <div className="infoContent">
            <h1>{title}</h1>
            <p>
              <span>Popularidad: </span>
              {popularity}
            </p>
            <p></p>
            <p>
              <span>Duración: </span>
              {duration}
            </p>
            <p>Editora</p>
            <p>Año de estreno</p>
          </div>
        </div>
      </Card>
    </Container>
  );
}

const Container = styled.section``;
const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 5%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  /* @media (max-width: 1065px) {
  } */

  p {
    font-weight: bold;
  }

  .cardImg {
    width: 400px;
    overflow: hidden;
    background-color: black;
    border-radius: 15px;
    border: 2px solid rgba(182, 155, 0, 0.64);
  }
  img {
    width: 100%;
    height: 100%;
  }
  .cardInfo {
    display: block;
    background-color: #272a38;
    color: white;
    flex-grow: 1;
    height: 500px;
    border-radius: 15px;
    padding: 0px 3%;
    h1 {
      color: white;
      font-size: 2.5em;
      line-height: 1.1;
    }
  }
  .infoContent {
    width: 300px;
  }
`;
