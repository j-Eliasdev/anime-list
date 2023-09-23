import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const CardComponent= ({ children }) => {
  return <Card>{children}</Card>;
}


const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(182, 155, 0, 0.64);
  border-radius: 10px;
  overflow: hidden;

`;
