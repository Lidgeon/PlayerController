import PlayersList from "./PlayersList/PlayersList";
import PlayerTop from "./PlayersTop/PlayerTop"

import './Players.scss'

const Players = () => {
  return (
    <div className="players">
      <PlayersList />
      <PlayerTop />
    </div>
  );
};

export default Players;
