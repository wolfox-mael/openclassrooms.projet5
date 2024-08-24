import image from "../../assets/about-image.jpg";
import Dropdown from "../../components/Dropdown";
import MainImage from "../../components/MainImage";
import styled from "styled-components";
import { aboutList } from "../../datas/aboutList";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 1440px;
`;

function About() {
    return (
      <MainDiv>
      <MainImage image={image} />
      <div>
      {aboutList.map(aboutContent => (<Dropdown title={aboutContent.title} content={aboutContent.content}/>))}
      </div>
    </MainDiv>
  );
}

export default About