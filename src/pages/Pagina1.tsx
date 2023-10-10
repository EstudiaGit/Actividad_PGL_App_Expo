import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChanger from "../components/ColorChanger";

// se crea Pagina1
const Pagina1 = () => {
  return (
    // se usa View para crear un contenedor
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <ColorChanger />
    </View>
  );
};

// define estilos para Pagina1
const styles = StyleSheet.create({
  // estilo de contenedor
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: "center", // posición vertical
    alignItems: "flex-start", // posición horizontal
    backgroundColor: "brown",
  },
  // El estilo para el texto
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25, // Se sapara de la izda.
  },
});
export default Pagina1;
