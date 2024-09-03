import image from "../../assets/about-image.jpg";
import Dropdown from "../../components/Dropdown";
import MainImage from "../../components/MainImage";
import styled from "styled-components";
import { aboutList } from "../../datas/aboutList";
import colors from "../../utils/styles";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;


  @media screen and (max-width: ${colors.mobileWidth}) {
    main {
      margin-left: 30px;
      margin-right: 30px;
      max-width: calc(100vw - 60px);
      margin-bottom: 60px;
  }
`;

function About() {
  return (
    <MainDiv>
      <MainImage image={image} />
      <div>
        {aboutList.map((aboutContent) => (
          <Dropdown
            key={aboutContent.title}
            title={aboutContent.title}
            content={aboutContent.content}
          />
        ))}
      </div>
    </MainDiv>
  );
}

export default About;
