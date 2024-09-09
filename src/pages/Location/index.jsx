import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Dropdown from "../../components/Dropdown";
import Error from "../../components/Error";
import Caroussel from "../../components/Caroussel";
import "./index.scss";

function Location() {
	const { id } = useParams();
	const logement = logements.filter((logement) => logement.id === id)[0];

	if (!logement) return <Error />;

	return (
		<main>
			<div id="location">
				<Caroussel pictures={logement.pictures} />
				<div id="Informations">
					<div id="Location_Tags">
						<div id="Location">
							<h1>{logement.title}</h1>
							<p>{logement.location}</p>
						</div>
						<div id="Tags">
							{logement.tags.map((tag) => (
								<Tag key={tag} tagName={tag} />
							))}
						</div>
					</div>
					<div id="Host_Rating">
						<div id="Host">
							<p>{logement.host.name}</p>
							<img src={logement.host.picture} alt="Hôte"/>
						</div>
						<div id="Rating">
							<Rating rating={logement.rating} />
						</div>
					</div>
				</div>
				<div id="dropdowns">
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
				</div>
			</div>
		</main>
	);
}

export default Location;
