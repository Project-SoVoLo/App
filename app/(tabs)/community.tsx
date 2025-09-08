import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AddMedia() {
  return (
    <View style={styles.container}>
      <Text>커뮤니티</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
