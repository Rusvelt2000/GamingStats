import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PlayerDetails from "../components/PlayerDetails";

const PlayersScreen = ({ navigation }) => {
  const [players, setPlayers] = useState([
    {
      name: "Roberto",
      age: 42,
      avatar: require("../../assets/players/Rob.png"),
      color: "rgb(158, 177, 155)",
    },
    {
      name: "Rossella",
      age: 39,
      avatar: require("../../assets/players/Ross.png"),
      color: "rgb(181, 87, 96)",
    },
    {
      name: "Lilla",
      age: 4,
      avatar: require("../../assets/players/Lilla.png"),
      color: "rgb(163, 51, 148)",
    },
  ]);

  return (
    <View style={{ padding: 24 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(player) => player.name}
        renderItem={({ item }) => {
          return (
            <PlayerDetails
              name={item.name}
              imageSource={item.avatar}
              age={item.age}
              color={item.color}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlayersScreen;
