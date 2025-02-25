import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import api from "../../../api/api";

const Car = ({ car }) => {
  const navigation = useNavigation();
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/cars/${car.carID || car.id}`);
        setCarData(response.data.car);
        setError(null);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data");
        setCarData(car);
      } finally {
        setLoading(false);
      }
    };

    if (car?.carID || car?.id) {
      fetchCarData();
    } else {
      setCarData(car);
      setLoading(false);
    }
  }, [car]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            car?.imageUrl ||
            "https://th.bing.com/th/id/R.c1c656c24017f313479c78354efd8600?rik=8wLtvY5TtgBHjQ&riu=http%3a%2f%2fwww.munkhada.com%2fwp-content%2fuploads%2f2015%2f03%2f029-lc-200-full-1_tcm-3020-669792.jpg&ehk=TEfwtgwN8b%2fg5UHqVnKh9%2fFMIur%2bC0Bsa%2bFDD3rz0fQ%3d&risl=&pid=ImgRaw&r=0",
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.9)"]}
        style={styles.gradientOverlay}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("MainTabs", { screen: "Нүүр" })}
      >
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>
      <View style={styles.carInfo}>
        <Text style={styles.carName}>{carData?.brandName || "Unknown Car"}</Text>
        <Text style={styles.carCategory}>{carData?.modelName || "Unknown"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.05)",
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
    backgroundColor: "rgba(255,255,255,0.15)",
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
