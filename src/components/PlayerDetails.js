import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const PlayerDetails = ({ name, imageSource, age, color, navigation }) => {
  const dynamicBorderColor = { borderColor: color };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ColorPicker", { color })}
      style={{ marginVertical: 8 }}
    >
      <View style={[styles.container, dynamicBorderColor]}>
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
    boxShadow: "0 4px 8px rgba(55, 22, 8, 0.1)",
    borderWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 40,
    borderWidth: 5,
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
