import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const PromoBanner = ({ image, title, description }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            image ||
            "https://news.zindaa.mn/images/news/crop1/201502/1613967406382013-02-09-15-57[www.urlag.mn].jpg",
        }}
        style={styles.imagePlaceholder}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: "#cccccc",
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});

export default PromoBanner;
