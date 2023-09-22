import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <h1>
        <span>JB</span>Anime
      </h1>
      <Search type="search" placeholder="Naruto, Boruto, Kenshin ....." />
      <Filters>
        <button>Top 10 Animes</button>
        <button>En transmisión</button>
        <button>Próximos Estrenos</button>
      </Filters>
    </Header>
  );
}

const Header = styled.header`
  text-align: center;
  span {
    color: #B68D40;
  }
  h1 {
    color: white;
    font-size: 3.2em;
    line-height: 1.1;
  }
`;

const Search = styled.input`
  width: 70%;
  padding: 12px 24px;
  font-size: 14px;
  line-height: 18px;

  /*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:focus {
    outline: 0;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const Filters = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;

  button {
    padding: 12px;
    border-radius: 10px;
    color: #B68D40;
    border: none;
    font-weight: bold;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #B68D40;
        color: white;

    }

  }
`;
