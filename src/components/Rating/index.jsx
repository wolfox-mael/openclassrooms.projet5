import inactiveStar from "../../assets/star-inactive.png";
import activeStar from "../../assets/star-active.png";
import styled from "styled-components";
import colors from "../../utils/styles";

const Img = styled.img`
    width: 36px;
    height: 36px;
  
  @media screen and (max-width: ${colors.mobileWidth}) {

    width: 25px;
    height: 25px;
  
  }
`;

function Rating({ rating }) {
  rating = Number(rating);

  return (
    <>
      {rating >= 1 ? (
        <Img src={activeStar} alt="" />
      ) : (
        <Img src={inactiveStar} alt="" />
      )}
      {rating >= 2 ? (
        <Img src={activeStar} alt="" />
      ) : (
        <Img src={inactiveStar} alt="" />
      )}
      {rating >= 3 ? (
        <Img src={activeStar} alt="" />
      ) : (
        <Img src={inactiveStar} alt="" />
      )}
      {rating >= 4 ? (
        <Img src={activeStar} alt="" />
      ) : (
        <Img src={inactiveStar} alt="" />
      )}
      {rating === 5 ? (
        <Img src={activeStar} alt="" />
      ) : (
        <Img src={inactiveStar} alt="" />
      )}
    </>
  );
}

export default Rating;
