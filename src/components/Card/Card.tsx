import { Monster } from "../../shared/types";
import "./Card.css";

type CardProps = {
  monster: Monster;
};

const Card = (props: CardProps) => {
  const { id, name, email } = props.monster;

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
