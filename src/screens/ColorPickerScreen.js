import React from "react";
import { Text, StyleSheet, View } from "react-native";
import RgbControl from "../components/rgbControl";

const ColorPickerScreen = ({ navigation }) => {
  const color = navigation.getParam("color");
  return (
    <View style={styles.container}>
      <View style={styles.rgbControlsContainer}>
        <RgbControl />
        <RgbControl />
        <RgbControl />
      </View>
      <View style={styles.colorBoxContainer}>
        <View style={[styles.colorBox, { backgroundColor: color }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 24,
  },
  rgbControlsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  colorBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  colorBox: {
    width: 100,
    height: 100,
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(55, 22, 8, 0.1)",
  },
});

export default ColorPickerScreen;
