import { View, Text, StyleSheet } from "react-native";

export default function RetailerLocationScreen() {
  return (
    <View style={styles.container}>
      <Text>Retailers Location Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
