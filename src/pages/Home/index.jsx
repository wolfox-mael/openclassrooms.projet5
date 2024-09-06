import image from "../../assets/home-image.jpg";
import MainImage from "../../components/MainImage";
import styled from "styled-components";
import locations from "../../datas/logements.json";
import Thumb from "../../components/Thumb";
import colors from "../../utils/styles";

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
  max-width: calc(100vw - 120px);
  background-color: rgba(246, 246, 246, 1);
  border-radius: 20px;

  @media screen and (max-width: ${colors.lowWidth}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    max-width: 100%;
    padding: 0;
    background-color: transparent;
  }

  @media screen and (max-width: ${colors.mobileWidth}) {
    grid-template-columns: 100%;
    grid-gap: 30px;
    max-width: 100%;
    padding: 0;
    background-color: transparent;
  }
`;

function Home() {
  const text = (
    <>
      Chez vous, <br id="mobile" /> partout et ailleurs
    </>
  );
  return (
    <MainDiv>
      <MainImage image={image} text={text} brMobile={true} />
      <LocationGrid>
        {locations.map(({ title, cover, id }) => (
          <Thumb key={id} title={title} image={cover} id={id} />
        ))}
      </LocationGrid>
    </MainDiv>
  );
}

export default Home;
