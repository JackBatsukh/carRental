import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedCarCard from "../components/home/featuredCarCard";
import CategorySection from "../components/home/CategorySection";
import PromoBanner from "../components/home/PromoBanner";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient"; 

const Home = () => {
  const navigation = useNavigation();

  const handleCarPress = (car) => {
    navigation.navigate("SingleCar", { car });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <LinearGradient
            colors={["#000", "#060525"]}
            style={styles.gradientHeader}
          >
            <View style={styles.headerContent}>
              <Text style={styles.headerText}>
                Машин түрээсийн апп-д тавтай морилно уу!
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.section}>
          <FeaturedCarCard
            title="Featured Cars"
            cars={[
              { id: 1, name: "Land Cruiser 200", price: "155,000₮" },
              { id: 2, name: "BMW i8", price: "₮120,000" },
            ]}
            onPress={handleCarPress}
          />
        </View>

        <View style={styles.section}>
          <CategorySection
            categories={[
              { id: 1, name: "Sedans", icon: "car-sport" },
              { id: 2, name: "SUVs", icon: "car-suv" },
              { id: 3, name: "Electric", icon: "flash" },
            ]}
          />
        </View>

        <View style={styles.section}>
          <PromoBanner
            image=""
            title="Цагаан сарын онцгой урамшуулал!"
            description="Хадамдаа шинэ машинтай очмоор л байгаа биз дээ кк"
          />
        </View>

        <View style={styles.section}>
          <FeaturedCarCard
            title="Popular Choices"
            cars={[
              { id: 3, name: "Toyota Camry", price: "$35,000" },
              { id: 4, name: "Audi Q5", price: "$55,000" },
            ]}
            onPress={handleCarPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  gradientHeader: {
    borderRadius: 5,
    padding: 10, 
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", 
  },
  section: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 80,
  },
});

export default Home;
