import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ColorPickerScreen from "./src/screens/ColorPickerScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Players: PlayersScreen,
    ImageScreen: ImageScreen,
    ColorPicker: ColorPickerScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Our Game Nights",
    },
  },
  (HomeScreen.navigationOptions = {
    title: "Our Game Nights",
  }),
  (PlayersScreen.navigationOptions = {
    title: "Players List",
  }),
  (ImageScreen.navigationOptions = {
    title: "Games List",
  }),
  (ColorPickerScreen.navigationOptions = {
    title: "Player Settings",
  })
);

export default createAppContainer(navigator);
