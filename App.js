import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayersProvider } from "./src/Context/PlayersContext";
import HomeScreen from "./src/screens/HomeScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ColorPickerScreen from "./src/screens/ColorPickerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PlayersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Game Nights" component={HomeScreen} />
          <Stack.Screen name="Players" component={PlayersScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
          <Stack.Screen name="ColorPicker" component={ColorPickerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PlayersProvider>
  );
}
