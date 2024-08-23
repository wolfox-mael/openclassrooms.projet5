import logo from "../../assets/headerLOGO.png"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import "./Header.css"

const NavLink = styled(Link)`
    padding: 15px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    font-size: 24px;
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: Montserrat;
    &.selected {text-decoration: underline;}
`

const NavLinks = styled.nav`

`

const HeaderDiv = styled.header`
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
`

function Header() {
    let Home, About
    switch (useLocation().pathname) {
        case "/":
            console.log("Je suis dans l'accueil")
            Home = "selected"
            break

        case "/about":
            console.log("Je suis dans A propos")
            About = "selected"
            break
    
        default:
            console.log("Je suis autre part !")
            break
    }
    
    
    return (
        <HeaderDiv>
            <img src={logo} alt="Logo de Kasa"></img>
            <NavLinks>
                <NavLink to="/" className={Home ? Home : ""}>Accueil</NavLink>
                <NavLink to="/about" className={About ? About : ""}>A Propos</NavLink>
            </NavLinks>
        </HeaderDiv>
    )
}

export default Header