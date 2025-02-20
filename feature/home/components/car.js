import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import land200 from "../../../assets/land200.jpg";
import { LinearGradient } from "expo-linear-gradient";

const Car = () => {
  return (
    <View style={styles.container}>
      <Image source={land200} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.9)"]}
        style={styles.gradientOverlay}
      />
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>
      <View style={styles.carInfo}>
        <Text style={styles.carName}>Toyota Land Cruiser 200</Text>
        <Text style={styles.carCategory}>Luxury SUV</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250, 
    width: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.05)", // Glassmorphism base
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradientOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.15)", // Glassmorphism
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  carInfo: {
    position: "absolute",
    bottom: 30,
    left: 25,
  },
  carName: {
    fontSize: 24, 
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
  carCategory: {
    fontSize: 16,
    color: "#E0E0E0",
    fontWeight: "600",
    opacity: 0.9,
  },
});

export default Car;
