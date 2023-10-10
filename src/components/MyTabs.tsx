import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Pagina1 from "../pages/Pagina1";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home_1"
        component={Pagina1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home", // Texto para la barra de navegación
          headerShown: false, // Esto oculta el encabezado de la página
        }}
      />
      <Tab.Screen
        name="Star"
        component={Pagina2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
          tabBarLabel: "Star", // Texto para la barra de navegación
          headerShown: false, // Esto ocultará el encabezado de la página
        }}
      />
      <Tab.Screen
        name="Contactos"
        component={Pagina3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
          tabBarLabel: "Contactos", // Texto para la barra de navegación
          headerShown: false, // Esto ocultará el encabezado de la página
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
