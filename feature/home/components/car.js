import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgBackArrow from "../../../shared/svg/back-light-svgrepo-com (1).svg";
import land200 from "../../../assets/land200.jpg";

const Car = () => {
  return (
    <View>
      <TouchableOpacity style={styles.backButton}>
        <SvgBackArrow width={20} height={20} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={land200} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 30,
    height: 200,
    width: 370,
    borderRadius: 20,
    shadowColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default Car;
