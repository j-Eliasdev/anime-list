import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useGlobalContext } from "../context/globalContext";

export default function HeaderComponent() {

  const { search,  handleChange} = useGlobalContext()

  return (
    <Navbar>
      <Link to="/">
        <span>JB</span>Anime
      </Link>
      <SearchContent>
        <Search type="search" value={search} onChange={handleChange} placeholder="Buscar ...." />
        <BiSearchAlt className="icons-search" />
      </SearchContent>
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  background-color: #050217;
  display: flex;
  height: 85px;
  justify-content: space-between;
  align-items: center;

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
  border-radius: 50px;
  border: 1px solid #575756;
  backface-visibility: hidden;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:focus {
    outline: 0;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
`;
const SearchContent = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;

  .icons-search{
    position: absolute;
    color: white;
    right: 3%;
    background-color: #050217;
    padding: 5px;
    border-radius: 50%;
  }

`;
