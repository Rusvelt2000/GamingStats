import React, { useState, useRef } from "react";
import { Text, StyleSheet, View } from "react-native";
import RgbControl from "../components/rgbControl";

const ColorPickerScreen = ({ navigation }) => {
  const red = navigation.getParam("red");
  const green = navigation.getParam("green");
  const blue = navigation.getParam("blue");
  const playerIndex = navigation.getParam("playerIndex");
  const updatePlayerColor = navigation.getParam("updatePlayerColor");

  const [redColor, setValueRed] = useState(red);
  const [greenColor, setValueGreen] = useState(green);
  const [blueColor, setValueBlue] = useState(blue);

  const onRedChange = (newValue) => {
    console.log("onRedChange", newValue);
    setValueRed(newValue);
    updatePlayerColor(playerIndex, {
      red: redColor,
    });
  };
  const onGreenChange = (newValue) => {
    console.log("onGreenChange", newValue);
    setValueGreen(newValue);
    updatePlayerColor(playerIndex, {
      green: greenColor,
    });
  };
  const onBlueChange = (newValue) => {
    console.log("onBlueChange", newValue);
    setValueBlue(newValue);
    updatePlayerColor(playerIndex, {
      blue: blueColor,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.rgbControlsContainer}>
        <RgbControl
          onRedValueChange={onRedChange}
          onGreenValueChange={onGreenChange}
          onBlueValueChange={onBlueChange}
          red={redColor}
          blue={blueColor}
          green={greenColor}
        />
      </View>
      <View style={styles.colorBoxContainer}>
        <View
          style={[
            styles.colorBox,
            { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
          ]}
        ></View>
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
