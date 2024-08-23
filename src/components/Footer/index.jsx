import logo from "../../assets/footerLOGO.png"
import styled from "styled-components"

const FooterDiv = styled.footer`
    background-color: black;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: stretch;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 189px
`

const FooterText = styled.p`
    color: white;
    font-family: Montserrat;
    font-size 24px
`



function Footer() {
    return (
        <FooterDiv>
            <img src={logo} alt="Logo de Kasa"></img>
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterDiv>
    )
}

export default Footer