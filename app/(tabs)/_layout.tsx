import { Tabs } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesomeSix from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(beat)"
        options={{
          title: "Beat",
          tabBarIcon: ({ color }) => (
            <FontAwesomeSix size={28} name="map-location-dot" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cp"
        options={{
          title: "CP",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="add-shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="arena"
        options={{
          title: "Arena",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="star-circle-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="dots-three-horizontal" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
