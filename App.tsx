import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/components/MyTabs";

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Encabezado */}
        <Header
          centerComponent={{
            text: "App Hello World Color",
            style: { color: "#fff", marginTop: "10%" },
          }}
        />
        {/* Navegación inferior */}
        <MyTabs />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
