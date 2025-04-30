import React, { useState, useRef } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";

const RgbControl = ({
  onRedValueChange,
  red,
  onGreenValueChange,
  green,
  onBlueValueChange,
  blue,
}) => {
  const sliderValueRed = useRef(red);
  const sliderValueGreen = useRef(green);
  const sliderValueBlue = useRef(blue);

  const handleSlidingCompleteRed = (newValue) => {
    onRedValueChange(Math.round(newValue));
  };
  const handleSlidingCompleteGreen = (newValue) => {
    onGreenValueChange(Math.round(newValue));
  };
  const handleSlidingCompleteBlue = (newValue) => {
    onBlueValueChange(Math.round(newValue));
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
      <Text>Red: {Math.round(red)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={red}
        onValueChange={handleValueChangeRed}
        onSlidingComplete={handleSlidingCompleteRed}
        minimumTrackTintColor="#F86B63"
        maximumTrackTintColor="#F96B63"
        thumbTintColor="#F96B63"
      />
      <Text>Green: {Math.round(green)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={green}
        onValueChange={handleValueChangeGreen}
        onSlidingComplete={handleSlidingCompleteGreen}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />
      <Text>Blue: {Math.round(blue)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={blue}
        onValueChange={handleValueChangeBlue}
        onSlidingComplete={handleSlidingCompleteBlue}
        minimumTrackTintColor="#98B5CF"
        maximumTrackTintColor="#7EA2CD"
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
