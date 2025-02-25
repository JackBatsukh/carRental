import React from "react";
import { View } from "react-native";
import Performance from "./performance";
import Description from "./description";

const Main = ({ car }) => {
  return (
    <View>
      <Performance car={car} />
      <Description car={car} />
    </View>
  );
};

export default Main;