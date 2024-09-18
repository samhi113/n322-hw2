import React from 'react';
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Color, Colors } from "../../constants/Colors";

export default function _layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.links,
      headerShown: false,
    }}>
      <Tabs.Screen name="home" options={{
        title: "Home Page",
        tabBarIcon: ({color}) => (
          <Ionicons name="home" size={24} color={color} />)
        }}
        />
      <Tabs.Screen name="products" options={{title: "Products",
        tabBarIcon: ({color}) => (
          <Ionicons name="bag" size={24} color={color} />)
        }}/>
      <Tabs.Screen name="contact" options={{title: "Contact Us",
        tabBarIcon: ({color}) => (
          <Ionicons name="chatbubble-ellipses-sharp" size={24} color={color} />)
        }}/>
    </Tabs>
  );
}