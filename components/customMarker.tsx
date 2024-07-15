import { View, Text, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { normal } from "@/constants/Size";
import { lightOrange, Orange } from "@/constants/Colors";

interface ICustomMarkerProps {
  name: string;
  isSelected: boolean;
}

export default function CustomMarker({ name, isSelected }: ICustomMarkerProps) {
  return (
    <View style={{ ...styles.container, borderColor: isSelected ? lightOrange : "gray" }}>
      <MaterialCommunityIcons
        size={normal}
        name="map-marker-outline"
        color={isSelected ? Orange : "gray"}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "auto",
    backgroundColor: "white",
    zIndex: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
