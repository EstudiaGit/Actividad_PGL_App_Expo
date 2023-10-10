import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChanger from "../components/ColorChanger";

const Pagina2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>STAR</Text>
      <ColorChanger />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "gray",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
  },
});
export default Pagina2;
