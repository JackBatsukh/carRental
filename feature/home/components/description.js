import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Тайлбар</Text>
      <Text style={styles.text}>
       lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat 
       lorem lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat      
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});

export default Description;
