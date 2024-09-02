import logo from "../../assets/headerLOGO.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
  max-width: 1440px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;

  img {
    width: 211px;
    height: 68px;
  }

  @media screen and (max-width: 600px) {
    body {
    }

    margin-left: 30px;
    margin-right: 30px;
    max-width: calc(100vw - 60px);

    img {
      width: 145px;
      height: 47px;
    }
  }
`;
const NavLink = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  &.selected {
    text-decoration: underline;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  gap: 60px;
`;

function Header() {
  let Home, About;
  switch (useLocation().pathname) {
    case "/":
      Home = "selected";
      break;

    case "/about":
      About = "selected";
      break;

    default:
      break;
  }

  return (
    <HeaderDiv>
      <img src={logo} alt="Logo de Kasa"></img>
      <NavLinks>
        <NavLink to="/" className={Home ? Home : ""}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={About ? About : ""}>
          A Propos
        </NavLink>
      </NavLinks>
    </HeaderDiv>
  );
}

export default Header;
