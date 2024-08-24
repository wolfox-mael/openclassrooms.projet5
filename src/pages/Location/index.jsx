import styled from "styled-components";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";

const MainDiv = styled.main``;

const CarousselDiv = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 20px;
`;

const CarousselImg = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 20px;
  object-fit: cover;
`;

function Location() {
  const { id } = useParams();

  const logement = logements.filter((logement) => logement.id === id)[0];
  console.log(logement);
  
  return (
    <MainDiv>
      <CarousselDiv>
        <CarousselImg src={logement.pictures[0]} alt="Caroussel"></CarousselImg>
      </CarousselDiv>
      <div className="Infos">
        <div className="Loc + Host Infos">
          <div className="Loc Infos"></div>
          <div className="Host Infos"></div>
        </div>
        <div className="More Infos">
          <div className="Tags + Rating">
            <div className="Tags"></div>
            <div className="Rating"></div>
          </div>
          <div className="Description + Equipements">
            <div className="Description"></div>
            <div className="Equipements"></div>
          </div>
        </div>
      </div>
      <h1>{logement.id}</h1>
      <p>{id}</p>
    </MainDiv>
  );
}

export default Location;
