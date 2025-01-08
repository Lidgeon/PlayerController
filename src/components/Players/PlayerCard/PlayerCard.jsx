import { useDispatch } from "react-redux";
import {
  removePlayer,
  togglePlayerStatus,
  incrementPlayerCount,
  decrementPlayerCount,
  togglePlayerLife,
} from "../../../redux/slices/playerSlice";

import {
  ScissorOutlined,
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  CheckOutlined,
  QuestionCircleOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Popconfirm } from "antd";

//import "./PlayerCard.scss";
import classes from "./PlayerCard.module.scss";

const PlayerCard = ({ player }) => {
  const handleToggleLife = (index) => {
    dispatch(togglePlayerLife({ playerId: player.id, lifeIndex: index }));
  };

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

  const statusClasses = {
    on: classes.player,
    off: `${classes.player} ${classes.off}`,
  };
  const playerClass = statusClasses[player.status];

  return (
    <div className={playerClass}>
      <div className={classes["player-text"]}>{player.name}</div>

      <div className={classes.btns}>
        <div className={classes.lives}>
          {player.lives.map((life, index) => (
            <button
              key={index}
              className={`${classes["life-btn"]} ${classes["player-btn"]}`}
              onClick={() => handleToggleLife(index)}
            >
              {life ? <HeartFilled /> : <HeartOutlined />}
            </button>
          ))}
        </div>
        <div className={classes.counter}>
          <div className={classes.count}>{player.count}</div>
          <button className={classes["player-btn"]} onClick={handleIncrement}>
            <PlusOutlined />
          </button>
          <button className={classes["player-btn"]} onClick={handleDecrement}>
            <MinusOutlined />
          </button>
        </div>
        <div className={classes.control}>
          <button
            className={classes["player-btn"]}
            onClick={handleToggleStatus}
          >
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
            <button
              className={`${classes["delete-btn"]} ${classes["player-btn"]}`}
            >
              <CloseOutlined style={{ color: "red" }} />
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
