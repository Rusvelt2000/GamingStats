import React, { useState, useRef } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";

const RgbControl = ({ red, green, blue }) => {
  const [redColor, setValueRed] = useState(red);
  const [greenColor, setValueGreen] = useState(green);
  const [blueColor, setValueBlue] = useState(blue);
  const sliderValueRed = useRef(redColor);
  const sliderValueGreen = useRef(greenColor);
  const sliderValueBlue = useRef(blueColor);

  const handleSlidingCompleteRed = (newValue) => {
    setValueRed(newValue);
  };
  const handleSlidingCompleteGreen = (newValue) => {
    setValueGreen(newValue);
  };
  const handleSlidingCompleteBlue = (newValue) => {
    setValueBlue(newValue);
  };

  const handleValueChangeRed = (newValue) => {
    sliderValueRed.current = newValue;
  };
  const handleValueChangeGreen = (newValue) => {
    sliderValueGreen.current = newValue;
  };
  const handleValueChangeBlue = (newValue) => {
    sliderValueBlue.current = newValue;
  };

  return (
    <View style={styles.container}>
      <Text>Red: {Math.round(redColor)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={redColor}
        onValueChange={handleValueChangeRed}
        onSlidingComplete={handleSlidingCompleteRed}
        minimumTrackTintColor="#F86B63"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#F96B63"
      />
      <Text>Green: {Math.round(greenColor)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={greenColor}
        onValueChange={handleValueChangeGreen}
        onSlidingComplete={handleSlidingCompleteGreen}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />
      <Text>Blue: {Math.round(blueColor)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={blueColor}
        onValueChange={handleValueChangeBlue}
        onSlidingComplete={handleSlidingCompleteBlue}
        minimumTrackTintColor="#98B5CF"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#7EA2CD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(55, 22, 8, 0.1)",
  },
});

export default RgbControl;
