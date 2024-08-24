import inactiveStar from "../../assets/star-inactive.png";
import activeStar from "../../assets/star-active.png";

function Rating({ rating }) {
  rating = Number(rating);

  return (
    <div>
      {rating >= 1 ? (
        <img src={activeStar} alt=""></img>
      ) : (
        <img src={inactiveStar} alt=""></img>
      )}
      {rating >= 2 ? (
        <img src={activeStar} alt=""></img>
      ) : (
        <img src={inactiveStar} alt=""></img>
      )}
      {rating >= 3 ? (
        <img src={activeStar} alt=""></img>
      ) : (
        <img src={inactiveStar} alt=""></img>
      )}
      {rating >= 4 ? (
        <img src={activeStar} alt=""></img>
      ) : (
        <img src={inactiveStar} alt=""></img>
      )}
      {rating === 5 ? (
        <img src={activeStar} alt=""></img>
      ) : (
        <img src={inactiveStar} alt=""></img>
      )}
    </div>
  );
}

export default Rating;
