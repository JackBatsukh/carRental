import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const RangeDatePicker = ({ onClose, onSelectRange }) => {
  const [selectedDates, setSelectedDates] = useState({});
  const [range, setRange] = useState({ start: "", end: "" });

  const onDayPress = (day) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day.dateString, end: "" });
      setSelectedDates({
        [day.dateString]: { startingDay: true, color: "blue" },
      });
    } else {
      const newRange = { start: range.start, end: day.dateString };
      const markedDates = getMarkedDates(newRange.start, newRange.end);
      setRange(newRange);
      setSelectedDates(markedDates);
      onSelectRange(newRange);
      onClose();
    }
  };

  const getMarkedDates = (start, end) => {
    let dates = {};
    let currentDate = new Date(start);
    let endDate = new Date(end);

    while (currentDate <= endDate) {
      let dateString = currentDate.toISOString().split("T")[0];
      dates[dateString] = {
        color: "blue",
        textColor: "white",
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dates[start] = { startingDay: true, color: "blue", textColor: "white" };
    dates[end] = { endingDay: true, color: "blue", textColor: "white" };

    return dates;
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Selected Range: {range.start} to {range.end}
      </Text>
      <Calendar
        markingType="period"
        markedDates={selectedDates}
        onDayPress={onDayPress}
      />
    </View>
  );
};

export default RangeDatePicker;
