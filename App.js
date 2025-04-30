import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayersProvider } from "./src/Context/PlayersContext";
import HomeScreen from "./src/screens/HomeScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import GamesListScreen from "./src/screens/GamesListScreen";
import ColorPickerScreen from "./src/screens/ColorPickerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PlayersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Game Nights" }}
          />
          <Stack.Screen name="Players" component={PlayersScreen} />
          <Stack.Screen
            name="GamesListScreen"
            component={GamesListScreen}
            options={{ title: "Games" }}
          />
          <Stack.Screen
            name="ColorPicker"
            component={ColorPickerScreen}
            options={{ title: "Change Color" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlayersProvider>
  );
}
