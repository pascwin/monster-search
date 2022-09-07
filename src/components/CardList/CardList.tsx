import Card from "../Card/Card";
import "./CardList.css";
import { Monster } from "../../shared/types";

type CardListProps = {
  monsters: Monster[];
};

const CardList = (props: CardListProps) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster: Monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
