import { useSelector } from "react-redux";
import { useMemo } from "react";

import classes from "./PlayerTop.module.scss";

const PlayerTop = () => {
  const players = useSelector((state) => state.playerReducer.players);
  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
        return b.count - a.count;
    });
  }, [players]);

  return (
    <div className={classes["players-block"]}>
      <div className={classes["player-title"]}>ТОП ИГРОКОВ</div>
      <ul className={classes["players-list"]}>
        {sortedPlayers.map((player, index) => (
          <li className={classes.player} key={player.id}>
            <div>{index + 1}. {player.name}</div>
            <div>{player.count}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerTop;
