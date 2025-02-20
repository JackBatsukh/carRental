import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";

export default function GetStarted() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/550x/5f/b2/f1/5fb2f1f9a0ffccf72d7451119785b32f.jpg",
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("MainTabs"); // Changed from Home to MainTabs
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(80, 91, 86, 0.5)",
    paddingBottom: 60,
  },
  textContainer: {
    position: "relative",
    top: -20,
    alignItems: "center",
    width: "100%",
  },
  button: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.73)",
    borderRadius: 5,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
