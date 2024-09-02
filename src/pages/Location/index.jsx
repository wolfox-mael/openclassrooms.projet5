import styled from "styled-components";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import colors from "../../utils/styles";
import Dropdown from "../../components/Dropdown";
import Error from "../../components/Error";
import Caroussel from "../../components/Caroussel";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
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

const GlobalInfos = styled.div`
  width: 100%;
  max-width: 1440px;
`;

function Location() {
  const { id } = useParams();
  const logement = logements.filter((logement) => logement.id === id)[0];

  if (!logement)
    return (
      <Error />
    );

  return (
    <MainDiv>
      <Caroussel pictures={logement.pictures}/>
      <GlobalInfos>
        <LeftRightDiv>
          <div>
              <LocTitle>{logement.title}</LocTitle>
              <p>{logement.location}</p>
          </div>
          <HostDiv>
            <HostName>{logement.host.name}</HostName>
            <HostImg src={logement.host.picture} alt="Hôte"></HostImg>
          </HostDiv>
        </LeftRightDiv>
          <LeftRightDiv>
            <TagsDiv>
              {logement.tags.map((tag) => (
                <Tag tagName={tag} />
              ))}
            </TagsDiv>
            <Rating rating={logement.rating} />
          </LeftRightDiv>
          <LeftRightDiv>
              <Dropdown key={"Description"} title="Description" content={logement.description} />
              <Dropdown key={"Équipements"} title="Équipements" content={logement.equipments} />
          </LeftRightDiv>
      </GlobalInfos>
    </MainDiv>
  );
}

export default Location;
