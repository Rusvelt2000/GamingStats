import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PlayerDetails from "../components/PlayerDetails";

const PlayersScreen = ({ navigation }) => {
  const [players, setPlayers] = useState([
    {
      name: "Roberto",
      age: 42,
      avatar: require("../../assets/players/Rob.png"),
      red: 158,
      green: 177,
      blue: 155,
    },
    {
      name: "Rossella",
      age: 39,
      avatar: require("../../assets/players/Ross.png"),
      red: 181,
      green: 87,
      blue: 96,
    },
    {
      name: "Lilla",
      age: 4,
      avatar: require("../../assets/players/Lilla.png"),
      red: 163,
      green: 51,
      blue: 148,
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
              red={item.red}
              green={item.green}
              blue={item.blue}
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
