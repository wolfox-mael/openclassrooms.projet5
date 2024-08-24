import styled from "styled-components";

const Content = styled.div`
  height: 223px;
  width: 100%;
  max-width: 1440px;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
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
`;

const ContentImage = styled.img`
  height: 223px;
  width: 100%;
  max-width: 1440px;
  border-radius: 20px;
  object-fit: cover;
  filter: brightness(50%);
`;

function MainImage({ image }) {
  return (
    <Content>
      <ContentImage src={image}></ContentImage>
      <ContentText>Chez vous, partout et ailleurs</ContentText>
    </Content>
  );
}

export default MainImage;
