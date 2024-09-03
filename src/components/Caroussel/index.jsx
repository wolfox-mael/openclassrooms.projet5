import styled from "styled-components";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import React, { useState } from "react";
import colors from "../../utils/styles";

const CarousselDiv = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;

  @media screen and (max-width: ${colors.mobileWidth}) {
    height: 255px;
  }
`;

const CarousselImg = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (max-width: ${colors.mobileWidth}) {
    height: 255px;
  }
`;

const LeftArrowIMG = styled.img`
  position: absolute;
  height: 100%;
  width: 48px;
  object-fit: contain;
  border-radius: 20px 0 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 20px 0 20px;

  @media screen and (max-width: ${colors.mobileWidth}) {
    background-color: rgba(0, 0, 0, 0.1);
    width: 12px;
  }
`;

const RightArrowIMG = styled.img`
  position: absolute;
  height: 100%;
  width: 48px;
  object-fit: contain;
  border-radius: 0 20px 20px 0;
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 20px 0 20px;

  @media screen and (max-width: ${colors.mobileWidth}) {
    background-color: rgba(0, 0, 0, 0.1);
    width: 12px;
  }
`;

const TextInfo = styled.p`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

function Caroussel({ pictures }) {
  const [slide, setSlide] = useState(0);

  const PrevIMG = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  const NextIMG = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  return (
    <CarousselDiv id="Caroussel">
      <CarousselImg
        src={pictures[slide]}
        alt="Caroussel"
        id="CarousselIMG"
      ></CarousselImg>
      <TextInfo>
        {slide + 1}/{pictures.length}
      </TextInfo>
      <LeftArrowIMG src={leftArrow} alt="" onClick={PrevIMG} />
      <RightArrowIMG src={rightArrow} alt="" onClick={NextIMG} />
    </CarousselDiv>
  );
}

export default Caroussel;
