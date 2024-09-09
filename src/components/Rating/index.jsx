import inactiveStar from "../../assets/star-inactive.png";
import activeStar from "../../assets/star-active.png";
import "./index.scss"

function Rating({ rating }) {
  rating = Number(rating);

  return (
    <>
      {rating >= 1 ? (
        <img id="rating_star" src={activeStar} alt="" />
      ) : (
        <img id="rating_star" src={inactiveStar} alt="" />
      )}
      {rating >= 2 ? (
        <img id="rating_star" src={activeStar} alt="" />
      ) : (
        <img id="rating_star" src={inactiveStar} alt="" />
      )}
      {rating >= 3 ? (
        <img id="rating_star" src={activeStar} alt="" />
      ) : (
        <img id="rating_star" src={inactiveStar} alt="" />
      )}
      {rating >= 4 ? (
        <img id="rating_star" src={activeStar} alt="" />
      ) : (
        <img id="rating_star" src={inactiveStar} alt="" />
      )}
      {rating === 5 ? (
        <img id="rating_star" src={activeStar} alt="" />
      ) : (
        <img id="rating_star" src={inactiveStar} alt="" />
      )}
    </>
  );
}

export default Rating;
