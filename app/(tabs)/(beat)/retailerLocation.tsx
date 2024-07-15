import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import CustomMarker from "@/components/customMarker";

interface ILatlng {
  lat: number;
  lng: number;
}

export default function RetailerLocationScreen() {
  const { latitude, longitude } = useLocalSearchParams();
  const retailerList = useAppSelector((state) => state.retailer.retailersList);

  const [latlng, setLatlng] = useState<ILatlng>({
    lat: Number(latitude),
    lng: Number(longitude),
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: latlng.lat,
          longitude: latlng.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {retailerList &&
          retailerList.map((ele) => (
            <Marker
              key={ele.id}
              coordinate={{ latitude: ele.latitude, longitude: ele.longitude }}
              title={ele.name}
            >
              <CustomMarker name={ele.name} />
            </Marker>
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
