import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SvgScroll from "../../../assets/scroll-up-down-svgrepo-com.svg";

const performanceData = [
  { id: "1", label: "Horsepower", value: "320 HP" },
  { id: "2", label: "Torque", value: "400 Nm" },
  { id: "3", label: "0-100 km/h", value: "4.5 sec" },
  { id: "4", label: "Top Speed", value: "250 km/h" },
  { id: "5", label: "Fuel Efficiency", value: "12 km/L" },
  { id: "6", label: "Transmission", value: "8-speed Automatic" },
];

const Performance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <Text style={styles.header}>Үзүүлэлт</Text>
        {/* <SvgScroll width={30} height={30} /> */}
      </View>
      <FlatList
        data={performanceData}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.card} >
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
    height: 200,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#090492",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    width: 150,
    height: 120,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
});

export default Performance;
