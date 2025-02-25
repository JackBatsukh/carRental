import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Car from "../components/single/car";
import Main from "../components/single/main";
import Price from "../components/single/price";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

const SingleCar = () => {
  const route = useRoute();
  const car = route.params?.car;
  // console.log("Single car:", car);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.fixedHeader}>
        <Car car={car} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Main car={car} />
      </ScrollView>
      <View style={styles.fixedFooter}>
        <Price car={car} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  fixedHeader: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 100 },
  fixedFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingBottom: 10,
  },
  scrollContent: { paddingTop: 280, paddingBottom: 120 },
});

export default SingleCar;
