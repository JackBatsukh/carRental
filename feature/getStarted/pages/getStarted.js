import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { LinearGradient } from "expo-linear-gradient";

export default function GetStarted() {
  const navigation = useNavigation();
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // For animation

  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // High-quality car image
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.7)"]}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Rent Your Dream Car Today</Text>
            <Text style={styles.subtitle}>
              Хамгийн хямдаар цоо шинэ дээд зэргийн машинуудыг түрээслэж өгзөгөө
              баярлуулаарай
            </Text>
            <Animated.View style={{ opacity: fadeAnim }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("MainTabs")}
              >
                <LinearGradient
                  colors={["#1e90ff", "#00bfff"]} 
                  style={styles.buttonGradient}
                >
                  <Text style={styles.buttonText}>Get Started</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "InterBold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "InterRegular",
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
    width: 250,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonGradient: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "InterBold",
  },
});