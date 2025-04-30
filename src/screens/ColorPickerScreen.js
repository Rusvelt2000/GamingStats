import React from "react";
import { useColor } from "../Hooks/useColor";
import { usePlayers } from "../Context/PlayersContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import RgbControl from "../components/rgbControl";

const ColorPickerScreen = () => {
  const { updatePlayerColor } = usePlayers();
  const route = useRoute();
  const navigation = useNavigation();
  const { red, green, blue, playerIndex } = route.params;

  const {
    red: redColor,
    green: greenColor,
    blue: blueColor,
    setRed,
    setGreen,
    setBlue,
    rgbString,
  } = useColor(red, green, blue);

  const onRedChange = (newValue) => setRed(newValue);

  const onGreenChange = (newValue) => setGreen(newValue);

  const onBlueChange = (newValue) => setBlue(newValue);

  const handleSaveAndExit = () => {
    updatePlayerColor(playerIndex, {
      red: redColor,
      green: greenColor,
      blue: blueColor,
    });
    navigation.goBack();
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
            {
              backgroundColor: rgbString,
            },
          ]}
        ></View>
      </View>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleSaveAndExit}
      >
        <Text style={styles.buttonText}>Save and Exit</Text>
      </TouchableOpacity>
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

export default ColorPickerScreen;
