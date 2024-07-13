import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function ArenaScreen() {
  return (
    <View style={styles.container}>
      <Text>Arena Tab</Text>
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
