import { useDispatch } from "react-redux";
import {
  removePlayer,
  togglePlayerStatus,
  incrementPlayerCount,
  decrementPlayerCount,
} from "../../../redux/slices/playerSlice";

import {
  ScissorOutlined,
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  CheckOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Popconfirm } from "antd";

import "./PlayerCard.scss";

const PlayerCard = ({ player }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removePlayer(player.id));
  };

  const handleToggleStatus = () => {
    dispatch(togglePlayerStatus(player.id));
  };

  const handleIncrement = () => {
    dispatch(incrementPlayerCount(player.id));
  };
  const handleDecrement = () => {
    dispatch(decrementPlayerCount(player.id));
  };

  const playerClass = player.status === "on" ? "player" : "player off";

  return (
    <div className={playerClass}>
      <div className="player-text">{player.name}</div>
      <div className="btns">
        <div className="counter">
          <div>{player.count}</div>
          <button className="player-btn" onClick={handleIncrement}>
            <PlusOutlined />
          </button>
          <button className="player-btn" onClick={handleDecrement}>
            <MinusOutlined />
          </button>
        </div>
        <button className="player-btn" onClick={handleToggleStatus}>
          <ScissorOutlined />
        </button>
        <Popconfirm
          title="Точно?"
          okText={<CheckOutlined />}
          cancelText={<CloseOutlined />}
          onConfirm={handleRemove}
          placement="right"
          icon={
            <QuestionCircleOutlined
              style={{
                color: "red",
              }}
            />
          }
          
        >
          <button className="player-btn delete-btn">
            <CloseOutlined style={{ color: "red" }} />
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default PlayerCard;
