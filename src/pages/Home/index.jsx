import image from "../../assets/home-image.jpg";
import MainImage from "../../components/MainImage";
import locations from "../../datas/logements.json";
import Thumb from "../../components/Thumb";
import "./index.scss";


function Home() {
  const text = (
    <>
      Chez vous, <br id="mobile" /> partout et ailleurs
    </>
  );
  return (
    <main>
      <div id="home">
        <MainImage image={image} text={text} brMobile={true} />
        <div id="grid">
          {locations.map(({ title, cover, id }) => (
            <Thumb key={id} title={title} image={cover} id={id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
