import arrowImage from "../../assets/arrow-up.png";
import styled from "styled-components";
import colors from "../../utils/styles";

const DropdownMenu = styled.div`
  position: relative;
  width: 600px;
  background-color: #f6f6f673;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  overflow: hidden;
`;

const DropdownContent = styled.div`
  width: 100%;
  max-height: fit-content;
  transition: max-height 0.5s ease-in;

  overflow: hidden;
  p {
    transition: max-height 0.5s ease-out;
  }
  &.close {
    max-height: 0;
    p {
      padding: 10px 20px 10px 20px;
      overflow: hidden;
    }
  }
  &.open {
    max-height: 500px;
    p {
      padding: 10px 20px 10px 20px;
      overflow: hidden;
    }
  }
`;

const DropdownTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  cursor: pointer;

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
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin: 0;
  padding: 0;
  padding: 10px 0 10px 0;
  p {
    margin: 5px 0 5px 0;
  }
`;

const ArrowIMG = styled.img`
  width: 32px;
  height: 32px;
  transform: rotate(0deg);
  transition: transform 200ms ease-in-out;
  &#close {
    transform: rotate(0deg);
  }
  &#open {
    transform: rotate(-180deg);
  }
`;

function Dropdown({ title, content }) {
  return (
    <DropdownMenu id={"dropdown-" + title}>
      <DropdownTitle className="title" onClick={() => handleClick(title)}>
        <p>{title}</p>
        <ArrowIMG src={arrowImage} alt=""></ArrowIMG>
      </DropdownTitle>
      <DropdownContent className="content close">
        {typeof content === "object" ? (
          content.map((content) => (
            <DropdownContentText key={content}>{content}</DropdownContentText>
          ))
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
