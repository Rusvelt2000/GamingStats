import { useState } from "react";

export const useColor = (initialRed, initialGreen, initialBlue) => {
  const [red, setRed] = useState(initialRed);
  const [green, setGreen] = useState(initialGreen);
  const [blue, setBlue] = useState(initialBlue);

  const setColor = (newRed, newGreen, newBlue) => {
    if (newColor.red !== undefined) setRed(newColor.red);
    if (newColor.green !== undefined) setGreen(newColor.green);
    if (newColor.blue !== undefined) setBlue(newColor.blue);
  };

  const rgbString = `rgb(${red}, ${green}, ${blue})`;

  return {
    red,
    green,
    blue,
    setRed,
    setGreen,
    setBlue,
    setColor,
    rgbString,
  };
};
