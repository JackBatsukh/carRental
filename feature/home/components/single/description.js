import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import api from "../../../api/api";

const Description = ({ car }) => {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        if (car?.carID || car?.id) {
          const response = await api.get(`/cars/${car.carID || car.id}`);
          setCarData(response.data.car);
          setError(null);
        } else {
          setCarData(car);
        }
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data");
        setCarData(car); 
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, [car]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Тайлбар</Text>
        <Text style={styles.text}>Уншиж байна...</Text>
      </View>
    );
  }

  if (error || !carData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Тайлбар</Text>
        <Text style={styles.text}>{error || "Машины мэдээлэл байхгүй."}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тайлбар</Text>
      <Text style={styles.text}>
        {carData.brandName && carData.modelName
          ? `${carData.brandName} брэндийн ${carData.modelName} нь ${
              carData.color || "Тодорхойгүй"
            } өнгөтэй, ${carData.type || "Тодорхойгүй"} төрлийн машин бөгөөд ${
              carData.seats || "Тодорхойгүй"
            }-н суудалтай, ${
              carData.fuelCapacity || "Тодорхойгүй"
            } литрийн багтаамжтай.`
          : "Машины бүрэн мэдээлэл байхгүй."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 26,
    fontWeight: "400",
  },
});

export default Description;
