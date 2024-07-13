import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useGetRetailersQuery } from "../../store/services/retailerApi";
import { useEffect } from "react";
import Retailer from "@/components/retailer";
import { IRetailer } from "@/types/types";

export default function BeatScreen() {
  const { data, error, isLoading } = useGetRetailersQuery();

  useEffect(() => {
    console.log("DATA = ", data);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
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
});
