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
  max-width: calc(100vw - 120px);
  background-color: rgba(246, 246, 246, 1);
  border-radius: 20px;

  @media screen and (max-width: 600px) {
  grid-template-columns: 100%;
  grid-gap: 20px;
  max-width: 100%;
  padding: 0;
  background-color: rgba(255, 255, 255, 1);
      
  }
`;

function Home() {

  let text = (<>Chez vous, <br id="mobile"/> partout et ailleurs</>)
  return (
    <MainDiv>
      <MainImage image={image} text={text} brMobile={true}/>
      <LocationGrid>
        {locations.map(({ title, cover, id }) => (
          <Thumb key={id} title={title} image={cover} id={id} />
        ))}
      </LocationGrid>
    </MainDiv>
  );
}

export default Home;
