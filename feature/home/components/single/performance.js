import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../api/api"; 

const Performance = ({ car }) => {
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

  const performanceData = [
    {
      id: "1",
      icon: "speedometer",
      value: carData?.engine || "N/A",
      label: "Хөдөлгүүр",
    },
    {
      id: "2",
      icon: "people",
      value: carData?.seats || "N/A",
      label: "Суудал",
    },
    {
      id: "3",
      icon: "speedometer-outline",
      value: carData?.roadLimit || "N/A",
      label: "Замын хязгаар",
    },
    {
      id: "4",
      icon: "water",
      value: carData?.fuelCapacity || "N/A",
      label: "Түлшний багтаамж",
    },
    {
      id: "5",
      icon: "color-palette",
      value: carData?.color || "N/A",
      label: "Өнгө",
    },
    {
      id: "6",
      icon: "car",
      value: carData?.type || "N/A",
      label: "Араа",
    },
    {
      id: "7",
      icon: "card",
      value: carData?.price || "N/A",
      label: "үнэ",
    },
  ];

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Уншиж байна...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Алдаа: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Гүйцэтгэл</Text>
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
    color: "#fff",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 8,
  },
});

export default Performance;
