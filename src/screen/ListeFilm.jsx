import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import FilmPopu from "./FilmPopu";
import FavFilm from "./FavFilm";

const Tab = createMaterialTopTabNavigator();

export default function ListeFilm() {
  return (
    <Tab.Navigator
      initialRouteName="ListeFilm"
      screenOptions={{
        tabBarActiveTintColor: "navajowhite",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="FilmPopu"
        component={FilmPopu}
        options={{ tabBarLabel: "Films populaires" }}
      />
      <Tab.Screen
        name="FavFilm"
        component={FavFilm}
        options={{ tabBarLabel: "Favoris" }}
      />
    </Tab.Navigator>
  );
}