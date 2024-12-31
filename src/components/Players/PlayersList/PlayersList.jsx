import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SyncOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { shufflePlayers } from "../../../redux/slices/playerSlice";
import AddPlayerModal from "../AddPlayerModal/AddPlayerModal";
import "./PlayersList.scss";

import PlayerCard from "../PlayerCard/PlayerCard";

const PlayersList = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playerReducer.players);
  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      if (a.status === "on" && b.status === "off") {
        return -1;
      }
      if (a.status === "off" && b.status === "on") {
        return 1;
      }
      return 0;
    });
  }, [players]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShuffle = () => {
    dispatch(shufflePlayers());
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="players-block">
      <div className="players-list">
        <div className="players-list__numbers">
          {[...Array(players.length)].map((_, index) => (
            <div key={index} className="number">
              {index + 1}
            </div>
          ))}
        </div>
        <div className="players-list__players">
          {sortedPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
      <button className="random-btn" onClick={handleOpenModal}>
        Add
        <PlusCircleOutlined />
      </button>
      <button className="random-btn" onClick={handleShuffle}>
        Random
        <SyncOutlined />
      </button>
      <AddPlayerModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default PlayersList;
