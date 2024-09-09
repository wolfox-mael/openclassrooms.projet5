import image from "../../assets/about-image.jpg";
import Dropdown from "../../components/Dropdown";
import MainImage from "../../components/MainImage";
import { aboutList } from "../../datas/aboutList";
import "./index.scss";

function About() {
  return (
    <main>
      <div id="about">
        <MainImage image={image} />
        <div id="dropdowns">
          {aboutList.map((aboutContent) => (
            <Dropdown
              key={aboutContent.title}
              title={aboutContent.title}
              content={aboutContent.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
