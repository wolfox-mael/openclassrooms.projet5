import styled from "styled-components";
import { Link } from "react-router-dom";

const ThumbDiv = styled(Link)`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 426px;
  height: 426px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
`;

const ThumbText = styled.span`
  position: absolute;
  bottom: 20px;
  left: 0;
  font-weight: 700;
  font-size: 18px;
  color: white;
  width: fit-content;
  max-width: 60%;
  padding: 5px;
  padding-left: 25px;
  border-radius: 0 10px 10px 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ThumbImage = styled.img`
  width: 426px;
  height: 426px;
  object-fit: cover;
  border-radius: 20px;
`;

function Thumb({ title, image, id}) {
  return (
    <ThumbDiv to={"/location/"+id}>
      <ThumbImage src={image} alt={title}></ThumbImage>
      <ThumbText>{title}</ThumbText>
    </ThumbDiv>
  );
}

export default Thumb;
