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
  justify-content: flex-end;
  align-items: center;
  align-content: stretch;
  gap: 20px;
`;

const HostImg = styled.img`
  border-radius: 100%;
  object-fit: cover;

  @media screen and (max-width: ${colors.mobileWidth}) {
    width: 64px;
    height: 64px;
  }
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
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  column-gap: 20px;
`;

const LeftRightDiv = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  gap: 60px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;

  @media screen and (max-width: ${colors.mobileWidth}) {
    display: block;
    max-width: calc(100vw - 60px);
  }
`;

const GlobalInfos = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;

  @media screen and (max-width: ${colors.mobileWidth}) {
    grid-template-columns: repeat(1, 1fr);
    #Location {
      order: 0;
    }
    #Host {
      order: 3;
    }
    #Tags {
      order: 1;
    }
    #Rating {
      order: 0;
    }
  }
`;

const RatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: stretch;
`;

const HostRatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
  align-content: stretch;

  @media screen and (max-width: ${colors.mobileWidth}) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
`;

//*/
function Location() {
  const { id } = useParams();
  const logement = logements.filter((logement) => logement.id === id)[0];

  if (!logement) return <Error />;

  return (
    <MainDiv>
      <Caroussel pictures={logement.pictures} />
      <GlobalInfos>
        <div>
          <div id="Location">
            <LocTitle>{logement.title}</LocTitle>
            <p>{logement.location}</p>
          </div>
          <TagsDiv id="Tags">
            {logement.tags.map((tag) => (
              <Tag tagName={tag} />
            ))}
          </TagsDiv>
        </div>
        <HostRatingDiv>
          <HostDiv id="Host">
            <HostName>{logement.host.name}</HostName>
            <HostImg src={logement.host.picture} alt="Hôte"></HostImg>
          </HostDiv>
          <RatingDiv id="Rating">
            <Rating rating={logement.rating} />
          </RatingDiv>
        </HostRatingDiv>

          </GlobalInfos>
        <LeftRightDiv>
          <Dropdown
            key={"Description"}
            title="Description"
            content={logement.description}
          />
          <Dropdown
            key={"Équipements"}
            title="Équipements"
            content={logement.equipments}
          />
        </LeftRightDiv>
    </MainDiv>
  );
  /*
                ANCIEN RENDU
  return (
    <MainDiv>
      <Caroussel pictures={logement.pictures} />
      <GlobalInfos>
        <${colors.mobileWidth}>
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
          <Dropdown
            key={"Description"}
            title="Description"
            content={logement.description}
          />
          <Dropdown
            key={"Équipements"}
            title="Équipements"
            content={logement.equipments}
          />
        </LeftRightDiv>
      </GlobalInfos>
    </MainDiv>
  );
*/
}

export default Location;
