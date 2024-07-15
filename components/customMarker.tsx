import { View, Text, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { normal } from "@/constants/Size";

interface ICustomMarkerProps {
  name: string;
}

export default function CustomMarker({ name }: ICustomMarkerProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons size={normal} name="map-marker-outline" color={"gray"} />
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
