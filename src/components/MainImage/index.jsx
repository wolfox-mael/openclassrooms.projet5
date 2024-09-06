import styled from "styled-components";
import colors from "../../utils/styles";

const Content = styled.div`
  height: 223px;
  width: 100%;
  max-width: 1440px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: ${colors.mobileWidth}) {
    height: 111px;
  }
`;

const ContentText = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  text-shadow: -5px 5px 5px black, -1px 1px 0 #000, 1px 1px 0 #000,
    1px -1px 0 #000, -1px -1px 0 #000;
  br {
    display: none;
  }

  @media screen and (max-width: ${colors.mobileWidth}) {
    font-size: 24px;
    text-align: left;
    padding-left: 30px;
    text-shadow: none;
    br {
      display: inline;
    }
  }
`;

const ContentImage = styled.img`
  height: 223px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(50%);

  @media screen and (max-width: ${colors.mobileWidth}) {
    height: 111px;
  }
`;

function MainImage({ image, text }) {

  return (
    <Content>
      <ContentImage src={image} alt=""></ContentImage>
      <ContentText>{text}</ContentText>
    </Content>
  );
}

export default MainImage;
