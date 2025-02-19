import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./feature/getStarted/pages/getStarted";
import Login from "./feature/login/pages/login";
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from "./feature/login/pages/registerScreen";
import Home from "./feature/home/pages/home";
import Order from "./feature/order/pages/order";

function HomeScreen() {
  const navigate = useNavigation();
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="getStarted "
          onPress={() => navigate.push("GetStarted")}
        />
        <Button title="click nme" onPress={() => navigate.push("Login")} />
        <Button title="home page ruu" onPress={() => navigate.push("Home")} />
      </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: { headerShown: false },
  screens: {
    Home: HomeScreen,
    GetStarted: GetStarted,
    Login: Login,
    // Home: Home,
    // Order: Order,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
