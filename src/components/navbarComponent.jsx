import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <Navbar>
      <Link to="/">
        <span>JB</span>Anime
      </Link>
      <div className="dv-search">
        <Search type="search" placeholder="Naruto, Boruto, Kenshin ....." />
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  .dv-search{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  span {
    color: #b68d40;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 2.2em;
    line-height: 1.1;
  }
`;

const Search = styled.input`
  width: 100%;
  padding: 12px 24px;
  font-size: 14px;
  line-height: 1.1;
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