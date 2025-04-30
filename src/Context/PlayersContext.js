import React, { createContext, useContext, useState } from "react";

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    {
      playerIndex: 0,
      name: "Roberto",
      age: 42,
      avatar: require("../../assets/players/Rob.png"),
      red: 158,
      green: 177,
      blue: 155,
    },
    {
      playerIndex: 1,
      name: "Rossella",
      age: 39,
      avatar: require("../../assets/players/Ross.png"),
      red: 181,
      green: 87,
      blue: 96,
    },
    {
      playerIndex: 2,
      name: "Lilla",
      age: 4,
      avatar: require("../../assets/players/Lilla.png"),
      red: 163,
      green: 51,
      blue: 148,
    },
  ]);

  const updatePlayerColor = (index, newColor) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        ...newColor,
      };
      return updatedPlayers;
    });
  };

  return (
    <PlayersContext.Provider value={{ players, updatePlayerColor }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => useContext(PlayersContext);
