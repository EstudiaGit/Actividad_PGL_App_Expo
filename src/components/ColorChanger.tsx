import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";

const ColorChanger = () => {
  const colores = [
    "red",
    "green",
    "blue",
    "orange",
    "yellow",
    "pink",
    "purple",
  ];
  const [color, setColor] = useState(colores[0]);

  const changeColor = () => {
    const currentIndex = colores.indexOf(color);
    const nextIndex = (currentIndex + 1) % colores.length;
    setColor(colores[nextIndex]);
  };

  return (
    <View style={[styles.content, { backgroundColor: color }]}>
      <TouchableOpacity onPress={changeColor}>
        <View style={styles.box} />
      </TouchableOpacity>
      <Button title="Cambiar Color" onPress={changeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default ColorChanger;
