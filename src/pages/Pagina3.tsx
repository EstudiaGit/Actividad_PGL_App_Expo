import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChanger from "../components/ColorChanger";

const Pagina3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CONTACTOS</Text>
      <ColorChanger />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "cyan",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dimgrey",
    marginLeft: 25,
  },
});
export default Pagina3;
