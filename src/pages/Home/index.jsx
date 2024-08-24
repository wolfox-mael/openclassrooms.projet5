import image from "../../assets/home-image.jpg";
import MainImage from "../../components/MainImage";
import styled from "styled-components";
import locations from "../../datas/logements.json";
import Thumb from "../../components/Thumb";

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

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 426px);
  grid-gap: 40px;
  grid-auto-rows: 426px;
  padding: 40px;
  width: 100%;
  max-width: 1360px;
  background-color: rgba(246, 246, 246, 1);
  border-radius: 20px;
`;

function Home() {
  return (
    <MainDiv>
      <MainImage image={image} />
      <LocationGrid>
        {locations.map(({ title, cover, id }) => (
          <Thumb title={title} image={cover} id={id} />
        ))}
      </LocationGrid>
    </MainDiv>
  );
}

export default Home;
