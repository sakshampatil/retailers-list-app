import { lightOrange } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from "react-native";

export default function ArenaScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/retailerList"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 22 }}>Retailers</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: lightOrange,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
