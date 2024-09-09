import "./index.scss"

function MainImage({ image, text }) {

  return (
    <div id="jesaispasencore">
      <img src={image} alt="" />
      <span>{text}</span>
    </div>
  );
}

export default MainImage;
