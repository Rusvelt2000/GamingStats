import { usePlayers } from "../Context/PlayersContext";
import { StyleSheet, View, FlatList } from "react-native";

import PlayerDetails from "../components/PlayerDetails";

const PlayersScreen = () => {
  const { players } = usePlayers();

  // useFocusEffect(
  //   useCallback(() => {
  //     if (updatedColor) {
  //       const { playerIndex, red, green, blue } = updatedColor;

  //       setPlayers((prevPlayers) => {
  //         const updatedPlayers = [...prevPlayers];
  //         updatedPlayers[playerIndex] = {
  //           ...updatedPlayers[playerIndex],
  //           red,
  //           green,
  //           blue,
  //         };
  //         return updatedPlayers;
  //       });
  //       navigation.setParams({ updatedColor: null });
  //     }
  //   }, [updatedColor])
  // );

  return (
    <View style={{ padding: 24 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(player) => player.name}
        renderItem={({ item }) => {
          return (
            <PlayerDetails
              key={item.playerIndex}
              playerIndex={item.playerIndex}
              name={item.name}
              imageSource={item.avatar}
              age={item.age}
              red={item.red}
              green={item.green}
              blue={item.blue}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlayersScreen;
