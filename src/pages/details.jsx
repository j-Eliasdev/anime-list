import { styled } from "styled-components";

export default function DetailsPage() {
  return (
    <Container>
      <Card>
        <div className="cardImg"></div>
        <div className="cardInfo">
          <h1>Title anime</h1>
          <p>Descripción</p>
          <p>popularidad</p>
          <p>Duración</p>
          <p>Editora</p>
        </div>
      </Card>
    </Container>
  );
}

const Container = styled.section``;
const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: darkblue;
  border-radius: 15px;
  padding: 5%;
  display: flex;
  gap: 20px;
  .cardImg {
    width: 400px;
    height: 500px;
    background-color: black;
    border-radius: 15px;
    border: 2px solid rgba(182, 155, 0, 0.64);
  }
  .cardInfo {
    display: block;
    color: white;
    flex-grow: 1;
    height: 500px;
    border-radius: 15px;
    border: 2px solid black;
    padding: 0px 3%;
    h1 {
      color: white;
      font-size: 2.5em;
      line-height: 1.1;
    }
  }
`;
