import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const WelcomeHeader = () => {
  const fadeAnim = new Animated.Value(0); // Initial opacity: 0
  const slideAnim = new Animated.Value(30); // Initial Y position: 30 (below)

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade to full opacity
        duration: 1000, // 1 second duration
        useNativeDriver: true, // Better performance
      }),
      Animated.timing(slideAnim, {
        toValue: 0, // Slide to original position
        duration: 1000, // 1 second duration
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.headerText,
          {
            opacity: fadeAnim, // Bind opacity to animation
            transform: [{ translateY: slideAnim }], // Bind Y position to animation
          },
        ]}
      >
        Машин түрээсийн апп-д тавтай морилно уу!
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E90FF",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
});

export default WelcomeHeader;
