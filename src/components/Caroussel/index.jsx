import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import React, { useState } from "react";
import "./index.scss";


function Caroussel({ pictures }) {
  const [slide, setSlide] = useState(0);

  const PrevIMG = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  const NextIMG = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  return (
    <div id="Caroussel">
      <img src={pictures[slide]} alt="Caroussel" id="CarousselIMG" />
      <p>
        {slide + 1}/{pictures.length}
      </p>
      <img id="leftArrow" src={leftArrow} alt="" onClick={PrevIMG} />
      <img id="rightArrow" src={rightArrow} alt="" onClick={NextIMG} />
    </div>
  );
}

export default Caroussel;
