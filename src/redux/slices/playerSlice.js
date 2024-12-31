import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { id: 1, name: "player1ААААААААААААААААААААА", status: "on", count: 0 },
    { id: 2, name: "player2ААААААА", status: "on", count: 0 },
    { id: 3, name: "player3", status: "on", count: 0 },
    { id: 4, name: "player3", status: "on", count: 0 },
    { id: 5, name: "player3", status: "on", count: 0 },
    { id: 6, name: "player3", status: "on", count: 0 },
  ],
  nextId: 7,
};

const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    removePlayer: (state, action) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
    togglePlayerStatus: (state, action) => {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      if (player) {
        player.status = player.status === "on" ? "off" : "on";
      }
    },
    shufflePlayers: (state) => {
      const onPlayers = state.players.filter(
        (player) => player.status === "on"
      );
      const offPlayers = state.players.filter(
        (player) => player.status === "off"
      );

      // Перемешиваем только onPlayers
      onPlayers.sort(() => Math.random() - 0.5);
      state.players = [...onPlayers, ...offPlayers];
    },
    addPlayer: (state, action) => {
      const newPlayer = {
        id: state.nextId,
        name: action.payload.name,
        status: "on",
        count: 0,
      };
      state.players.push(newPlayer);
      state.nextId++;
    },
    incrementPlayerCount: (state, action) => {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      if (player) {
        player.count++;
      }
    },
    decrementPlayerCount: (state, action) => {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      if (player) {
        player.count--;
      }
    },
  },
});

const { actions, reducer } = playerSlice;

export const { removePlayer, togglePlayerStatus, shufflePlayers, addPlayer, incrementPlayerCount, decrementPlayerCount } =
  actions;

export default reducer;
