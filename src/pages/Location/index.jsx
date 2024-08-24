import styled from "styled-components";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import colors from "../../utils/styles";
import Dropdown from "../../components/Dropdown";

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

const CarousselDiv = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

const CarousselImg = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 20px;
  object-fit: cover;
`;

const LocTitle = styled.h1`
  color: ${colors.error};
  font-weight: 500;
  font-size 36px;
`;

const HostDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  gap: 20px;
`;

const HostImg = styled.img`
  border-radius: 100%;
  object-fit: cover;
`;

const HostName = styled.p`
  color: ${colors.error};
  font-weight: 500;
  font-size: 18px;
  width: 100px;
  text-align: right;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  gap: 20px;
`;

const LeftRightDiv = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;
`;

function Location() {
  const { id } = useParams();
  const logement = logements.filter((logement) => logement.id === id)[0];

  return (
    <MainDiv>
      <CarousselDiv>
        <CarousselImg src={logement.pictures[0]} alt="Caroussel"></CarousselImg>
      </CarousselDiv>
      <div>
        <LeftRightDiv>
          <div className="Loc Infos">
            <div>
              <LocTitle>{logement.title}</LocTitle>
            </div>
            <div>
              <p>{logement.location}</p>
            </div>
          </div>
          <HostDiv>
            <HostName>{logement.host.name}</HostName>
            <HostImg src={logement.host.picture} alt="Hôte"></HostImg>
          </HostDiv>
        </LeftRightDiv>
        <div className="More Infos">
          <LeftRightDiv>
            <TagsDiv>
              {logement.tags.map((tag) => (
                <Tag tagName={tag} />
              ))}
            </TagsDiv>
            <Rating rating={logement.rating} />
          </LeftRightDiv>
          <LeftRightDiv>
            <div>
              <Dropdown title="Description" content={logement.description} />
            </div>
            <div>
              <Dropdown title="Équipements" content={logement.equipments} />
            </div>
          </LeftRightDiv>
        </div>
      </div>
    </MainDiv>
  );
}

export default Location;
