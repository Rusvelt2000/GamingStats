import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlayerDetails = ({
  playerIndex,
  name,
  imageSource,
  age,
  red,
  green,
  blue,
}) => {
  const navigation = useNavigation();
  const dynamicBorderColor = {
    borderColor: `rgb(${red}, ${green}, ${blue})`,
  };
  const dynamicShadow = {
    boxShadow: `0 4px 16px -8px rgba(${red - 40} , ${green - 40}, ${
      blue - 40
    }, .4)`,
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ColorPicker", {
          red,
          green,
          blue,
          playerIndex,
        })
      }
      style={{ marginVertical: 8 }}
    >
      <View style={[styles.container, dynamicBorderColor, dynamicShadow]}>
        <Image
          style={[styles.image, dynamicBorderColor]}
          source={imageSource}
        />
        <View style={{ padding: 8, flex: 1 }}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.age}>Age: {age}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 40,
    borderWidth: 2,
  },
  name: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold",
    color: "#371608",
  },
  age: {
    fontSize: 14,
    marginTop: 4,
    color: "#585355",
  },
});

export default PlayerDetails;
