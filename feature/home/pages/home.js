import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedCarCard from "../components/home/featuredCarCard";
import CategorySection from "../components/home/CategorySection";
import PromoBanner from "../components/home/PromoBanner";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/api";
import WelcomeHeader from "../components/home/header";

const Home = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars");
        // console.log("Fetched cars:", response.data.car);
        setCars(response.data.car);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  const handleCarPress = (car) => {
    navigation.navigate("SingleCar", { car });
  };

  const categories = Array.from(new Set(cars.map((car) => car.brandName))).map(
    (brandName, index) => ({
      id: index + 1,
      name: brandName,
      icon: "car-sport",
    })
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <WelcomeHeader />
        <View style={styles.menu}>
          <View style={styles.section}>
            <FeaturedCarCard
              title="Санал болгох"
              cars={cars.slice(0, )} 
              onPress={handleCarPress}
            />
          </View>
          <View style={styles.section}>
            <CategorySection categories={categories} />
          </View>
          <View style={styles.section}>
            <PromoBanner
              title="Цагаан сарын онцгой урамшуулал!"
              description="Хадамдаа шинэ машинтай очмоор л байгаа биз дээ кк"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
    // flex: 1,
  },
  section: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  menu: {
    backgroundColor: "rgba(19,19,21, 0.9)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Home;
