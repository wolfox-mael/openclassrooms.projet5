import { Link } from "react-router-dom";
import "./index.scss"

function Error() {
  return (
    <main>
      <div id="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
}

export default Error;
