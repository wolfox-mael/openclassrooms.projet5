import { Link } from "react-router-dom";
import "./index.scss"

function Thumb({ title, image, id }) {
  return (
    <Link className="location" to={"/location/" + id}>
      <img src={image} alt={title}/>
      <span>{title}</span>
    </Link>
  );
}

export default Thumb;
