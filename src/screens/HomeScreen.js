import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 24 }}>
      <Text style={styles.text}>Hi Roberto</Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Players")}
      >
        <Text style={styles.buttonText}>Players</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("ImageScreen")}
      >
        <Text style={styles.buttonText}>Games</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonPrimary: {
    backgroundColor: "#DC1F5F",
    padding: 16,
    marginTop: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
