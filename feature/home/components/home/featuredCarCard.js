import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const FeaturedCarCard = ({ title, cars, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {cars.map((car) => (
        <TouchableOpacity
          key={car.id}
          style={styles.card}
          onPress={() => onPress(car)}
        >
          <LinearGradient
            colors={["#e5e5e5", "#d0d0d0"]}
            style={styles.gradientCard}
          >
            <Image
              source={{
                uri:
                  car?.imageUrl ||
                  "https://th.bing.com/th/id/R.c1c656c24017f313479c78354efd8600?rik=8wLtvY5TtgBHjQ&riu=http%3a%2f%2fwww.munkhada.com%2fwp-content%2fuploads%2f2015%2f03%2f029-lc-200-full-1_tcm-3020-669792.jpg&ehk=TEfwtgwN8b%2fg5UHqVnKh9%2fFMIur%2bC0Bsa%2bFDD3rz0fQ%3d&risl=&pid=ImgRaw&r=0",
              }}
              style={styles.imagePlaceholder}
              resizeMode="cover"
            />

            <View style={styles.cardContent}>
              <Text style={styles.carName}>{car.name}</Text>
              <Text style={styles.carPrice}>{car.price}</Text>

              <View style={styles.iconRow}>
                <Ionicons name="speedometer" size={16} color="#666" />
                <Ionicons
                  name="flash"
                  size={16}
                  color="#666"
                  style={styles.iconSpacing}
                />
                <Ionicons name="calendar" size={16} color="#666" />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 15,
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gradientCard: {
    flex: 1,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: "#cccccc",
  },
  cardContent: {
    padding: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  carPrice: {
    fontSize: 14,
    color: "#444",
    fontWeight: "500",
    marginBottom: 5,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginHorizontal: 8,
  },
});

export default FeaturedCarCard;
