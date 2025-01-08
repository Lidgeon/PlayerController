import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddPlayerModal = ({ isOpen, onClose }) => {
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddPlayer();
    }
  };

  const handleAddPlayer = () => {
    if (playerName.trim() !== "") {
      dispatch({
        type: "player/addPlayer",
        payload: { name: playerName, status: "on" },
      });
      setPlayerName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      title="Add New"
      onOk={handleEnter}
      onCancel={onClose}
      width={210}
      footer={[
        <button key="add" className="modal-button" onClick={handleAddPlayer}>
          <PlusOutlined />
        </button>,
      ]}
    >
      
      <input
        type="text"
        placeholder="Писать сюда"
        value={playerName}
        onKeyDown={handleEnter}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    </Modal>
  );
};

export default AddPlayerModal;
