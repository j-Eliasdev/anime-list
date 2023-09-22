import styled from "styled-components";
import { Link } from "react-router-dom";
export default function CardComponent() {
  return (
    <section>
      <Cards>
        <Card>
          <Link to="/details"></Link>
        </Card>
      </Cards>
    </section>
  );
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(182, 155, 0, 0.64);
  border-radius: 10px;
  overflow: hidden;
`;
