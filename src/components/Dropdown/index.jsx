import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import styled from "styled-components";
import colors from "../../utils/styles";

const DropdownContent = styled.div`
  width: 100%;

  &.close {
    display: none;
  }
  &.open {
    display: inline;
  }
`;

const DropdownMenu = styled.div`
  width: 600px;
  background-color: #f6f6f673;
  border-radius: 10px;
  margin: 20px 0 20px 0;
`;

const DropdownTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;

  background-color: ${colors.error};
  padding: 10px 20px 10px 15px;
  height: 32px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  p {
    color: white;
    margin: 0;
  }
`;

const DropdownContentText = styled.p`
  background-color: #f6f6f673;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin: 0;
  padding: 20px 20px 20px 20px;

  p {
  margin: 5px 0 5px 0;
  }
`;

function Dropdown({ title, content }) {

  return (
    <DropdownMenu id={"dropdown-" + title}>
      <DropdownTitle className="title" onClick={() => handleClick(title)}>
        <p>{title}</p>
        <img src={arrowUp} alt=""></img>
      </DropdownTitle>
      <DropdownContent className="content close">
        {typeof content === "object" ? (
          <DropdownContentText>{content.map((tag) => (
            <p>{tag}</p>
          ))}</DropdownContentText>
        ) : (
          <DropdownContentText>{content}</DropdownContentText>
        )}
      </DropdownContent>
    </DropdownMenu>
  );
}

function handleClick(title) {
  const dropdown = document.querySelector(`#dropdown-${title} .content`);
  const arrow = document.querySelector(`#dropdown-${title} img`);

  switch (dropdown.className.includes("open")) {
    case true:
      dropdown.setAttribute(
        "class",
        dropdown.className.replace("open", "close")
      );
      arrow.setAttribute("src", arrowUp)
      break;

    default:
      dropdown.setAttribute(
        "class",
        dropdown.className.replace("close", "open")
    );
      arrow.setAttribute("src", arrowDown)
      break;
  }
}

export default Dropdown;
