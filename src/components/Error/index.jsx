import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles";

const NavLink = styled(Link)`
  padding: 15px;
  color: black;
  font-weight: 500;
  text-decoration: underline;
  font-size: 18px;
`;

const ErrorNoPage = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const ErrorTitle = styled.h1`
  color: ${colors.error};
  font-weight: 700;
  font-size: 288px;
  margin: 0;
  margin-bottom: 50px;
`;

const ErrorDesc = styled.p`
  color: ${colors.error};
  font-weight: 500;
  font-size: 36px;
  margin: 0;
  margin-bottom: 50px;
`;

function Error() {
  return (
    <ErrorNoPage>
      <ErrorTitle>404</ErrorTitle>
      <ErrorDesc>Oups! La page que vous demandez n'existe pas.</ErrorDesc>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </ErrorNoPage>
  );
}

export default Error;
