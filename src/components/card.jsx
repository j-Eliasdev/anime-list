/* eslint-disable react/prop-types */
import styled from "styled-components";

export const CardComponent= ({ children }) => {
  return <Card>{children}</Card>;
}

export const CardsComponent = ({children}) =>{
  return <Cards>{children}</Cards>
}
export const ContainerComponent = ({children}) =>{
  return <Container>{children}</Container>
}

const Card = styled.div`
  width: 250px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;

  &:hover{
  scale: 1.03;
  border-radius: 5px;
  }

`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between;
  gap: 20px;
  padding: 6px;
  @media (max-width: 600px) {
    justify-content: center;   
  }
`;

const Container = styled.section`
  img {
    width: 100%;
    height: 100%;
  }
  span {
    color: #b68d40;
  }
  h1 {
    font-size: 2.5em;
  }
`;