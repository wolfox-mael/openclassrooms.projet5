import logo from "../../assets/headerLOGO.png";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";


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
    <header>
      <img src={logo} alt="Logo de Kasa"></img>
      <nav>
        <Link to="/" className={Home ? Home : ""}>
          Accueil
        </Link>
        <Link to="/about" className={About ? About : ""}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
