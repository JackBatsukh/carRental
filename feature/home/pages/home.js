import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Car from "../components/car";
import Main from "../components/main";
import Price from "../components/price";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.fixedHeader}>
        <Car />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Main />
      </ScrollView>
      <View style={styles.fixedFooter}>
        <Price />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Darker base for 2025 trend
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  fixedFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingBottom: 10,
  },
  scrollContent: {
    paddingTop: 280, // Adjusted for larger Car component
    paddingBottom: 120, // Space for footer
  },
});

export default Home;
