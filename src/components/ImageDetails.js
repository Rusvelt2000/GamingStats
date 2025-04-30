import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { usePlayers } from "../Context/PlayersContext";

const GamesListScreen = ({
  title,
  imageSource,
  caption,
  robScore,
  rosScore,
}) => {
  const winner = getWinner(robScore, rosScore);
  const { players } = usePlayers();
  const getBorderColor = (index) => {
    const player = players[index];
    return {
      borderColor: `rgb(${player.red}, ${player.green}, ${player.blue})`,
    };
  };

  return (
    <View style={{ marginVertical: 8 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <View style={{ padding: 8, flex: 1 }}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.caption}>{caption}</Text>
          </View>
          <View style={styles.playersContainer}>
            <View style={styles.playerWrapper}>
              <Image
                style={[
                  styles.avatar,
                  getBorderColor(0),
                  winner === "Rob" && styles.avatarWinner,
                ]}
                source={require("../../assets/players/Rob.png")}
              />
              <Text style={[styles.player, winner === "Rob" && styles.winner]}>
                Rob: {robScore} {winner === "Rob" && "🏆"}
              </Text>
            </View>
            <View style={styles.playerWrapper}>
              <Image
                style={[
                  styles.avatar,
                  getBorderColor(1),
                  winner === "Ross" && styles.avatarWinner,
                ]}
                source={require("../../assets/players/Ross.png")}
              />
              <Text style={[styles.player, winner === "Ross" && styles.winner]}>
                Ross: {rosScore} {winner === "Ross" && "🏆"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const getWinner = (robScore, rosScore) => {
  if (robScore > rosScore) {
    return "Rob";
  } else if (rosScore > robScore) {
    return "Ross";
  } else {
    return;
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "top",
    boxShadow: "0 4px 8px rgba(55, 22, 8, 0.1)",
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 16,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold",
    color: "#371608",
  },
  caption: {
    fontSize: 13,
    marginTop: 4,
    color: "#585355",
  },
  playersContainer: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
  },
  playerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  player: {
    fontSize: 13,
    color: "#2e0e19",
    fontWeight: "bold",
  },
  winner: {
    color: "#519FA5",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 4,
    filter: "saturate(0)",
    borderWidth: 2,
  },
  avatarWinner: {
    filter: "saturate(1)",
  },
});

export default GamesListScreen;
