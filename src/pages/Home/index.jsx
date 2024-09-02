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
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  grid-auto-rows: 1fr;
  padding: 60px;
  max-width: 1320px;
  width: 100%;
  background-color: rgba(246, 246, 246, 1);
  border-radius: 20px;
`;

function Home() {
  return (
    <MainDiv>
      <MainImage image={image} text="Chez vous, partout et ailleurs"/>
      <LocationGrid>
        {locations.map(({ title, cover, id }) => (
          <Thumb key={id} title={title} image={cover} id={id} />
        ))}
      </LocationGrid>
    </MainDiv>
  );
}

export default Home;
