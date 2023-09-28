import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const CardComponent= ({ children }) => {
  return <Card>{children}</Card>;
}


const Card = styled.div`
  width: 250px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  overflow: hidden;

`;
