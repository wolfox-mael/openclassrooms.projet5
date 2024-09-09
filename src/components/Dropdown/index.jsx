import arrowImage from "../../assets/arrow-up.png";
import "./index.scss"

function Dropdown({ title, content }) {
  return (
    <div id={"dropdown-" + title} className="dropdown close">
      <div className="title" onClick={() => handleClick(title)}>
        <p>{title}</p>
        <img src={arrowImage} alt="" />
      </div>
      <div className="content close">
        {typeof content === "object" ? (
          content.map((content) => (
            <p key={content}>{content}</p>
          ))
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

function handleClick(title) {
  const dropdown = document.querySelector(`#dropdown-${title}`);
  const arrow = document.querySelector(`#dropdown-${title} img`);

  switch (dropdown.className.includes("open")) {
    case true:
      dropdown.setAttribute(
        "class",
        dropdown.className.replace("open", "close")
      );
      arrow.setAttribute("id", "close");
      break;

    default:
      dropdown.setAttribute(
        "class",
        dropdown.className.replace("close", "open")
      );
      arrow.setAttribute("id", "open");
      break;
  }
}

export default Dropdown;
