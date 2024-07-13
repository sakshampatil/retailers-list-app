import { StyleSheet, SafeAreaView, ScrollView, View, Image } from "react-native";
import { useGetRetailersQuery } from "../../store/services/retailerApi";
import { useEffect } from "react";
import Retailer from "@/components/retailer";
import { IRetailer } from "@/types/types";

import OctIcons from "@expo/vector-icons/Octicons";
import { header } from "@/constants/Size";
import { lightOrange } from "@/constants/Colors";

export default function BeatScreen() {
  const { data, error, isLoading } = useGetRetailersQuery();

  useEffect(() => {
    console.log("DATA = ", data);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.moreContainer}>
          <OctIcons size={25} name="three-bars" color={lightOrange} />
        </View>
        <View style={styles.imageIconContainer}>
          <Image style={styles.imageIcon} source={require("../../assets/images/googleMaps.png")} />
        </View>
      </View>
      <ScrollView>
        {data && data.map((ele: IRetailer) => <Retailer key={ele.id} retailer={ele} />)}
        {/* <TouchableOpacity className="bg-orange-300 px-3 py-2 rounded-md">
        <Text className="text-white">Retailers</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#f4f5f5",
  },
  moreContainer: {
    width: 35,
    borderWidth: 2,
    borderColor: lightOrange,
    paddingHorizontal: 7,
    paddingVertical: 5,
    alignItems: "center",
  },
  imageIconContainer: {
    width: 35,
    borderWidth: 2,
    borderColor: "gray",
    paddingHorizontal: 7,
    paddingVertical: 5,
    alignItems: "center",
  },
  imageIcon: {
    width: 25,
    height: 25,
  },
});
