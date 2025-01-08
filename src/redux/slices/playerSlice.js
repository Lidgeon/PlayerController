import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      id: 1,
      name: "1",
      status: "on",
      count: 0,
      lives: [true, true, true],
    },
  ],
  nextId: 2,
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
        lives: [true, true, true],
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
    togglePlayerLife: (state, action) => {
      const { playerId, lifeIndex } = action.payload;
      const player = state.players.find((player) => player.id === playerId);
      if (player) {
        player.lives[lifeIndex] = !player.lives[lifeIndex];
      }
    },
  },
});

const { actions, reducer } = playerSlice;

export const {
  removePlayer,
  togglePlayerStatus,
  shufflePlayers,
  addPlayer,
  incrementPlayerCount,
  decrementPlayerCount,
  togglePlayerLife,
} = actions;

export default reducer;
