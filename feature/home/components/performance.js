import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const performanceData = [
  { id: "1", label: "Horsepower", value: "320 HP", icon: "speedometer" },
  { id: "2", label: "Torque", value: "400 Nm", icon: "cog" },
  { id: "3", label: "0-100 km/h", value: "4.5 sec", icon: "timer" },
  { id: "4", label: "Top Speed", value: "250 km/h", icon: "rocket" },
  { id: "5", label: "Fuel", value: "12 km/L", icon: "water" },
  { id: "6", label: "Trans", value: "8-speed", icon: "settings" },
];

const Performance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Performance</Text>
      <FlatList
        data={performanceData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name={item.icon} size={26} color="#FF6B6B" />
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginRight: 15,
    borderRadius: 20,
    width: 120,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252525", 
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#B0B0B0",
    textAlign: "center",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 8,
  },
});

export default Performance;
