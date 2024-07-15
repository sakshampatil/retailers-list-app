import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import CustomMarker from "@/components/customMarker";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { lightOrange } from "@/constants/Colors";
import { header, normal } from "@/constants/Size";

interface ISelectedItem {
  id: number;
  lat: number;
  lng: number;
}

interface IDropDownData {
  id: string;
  title: string;
  lat: number;
  lng: number;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

export default function RetailerLocationScreen() {
  const { latitude, longitude, id } = useLocalSearchParams();
  const retailerList = useAppSelector((state) => state.retailer.retailersList);

  const [search, setSearch] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ISelectedItem>({
    id: Number(id),
    lat: Number(latitude),
    lng: Number(longitude),
  });
  const [dropDownData, setDropDownData] = useState<IDropDownData[] | null>();

  useEffect(() => {
    if (retailerList !== null) {
      let result = retailerList.map((ele) => ({
        id: String(ele.id),
        title: ele.name,
        lat: ele.latitude,
        lng: ele.longitude,
      }));
      setDropDownData(result);
    }
  }, [retailerList]);

  const onDropDownSelect = (item: any) => {
    setSelectedItem({
      id: item.id,
      lat: item.lat,
      lng: item.lng,
    });
  };

  const closeSearch = () => {
    setSearch((prevState) => !prevState);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: search ? "" : "Retailer's Location",
          headerRight: () =>
            search ? (
              <View style={styles.searchBar}>
                {dropDownData && (
                  <AutocompleteDropdown
                    onChevronPress={closeSearch}
                    inputContainerStyle={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: lightOrange,
                    }}
                    textInputProps={{ placeholder: "Search" }}
                    ChevronIconComponent={
                      <MaterialCommunityIcons
                        size={25}
                        name="arrow-collapse-right"
                        color={lightOrange}
                      />
                    }
                    containerStyle={{}}
                    clearOnFocus={false}
                    closeOnBlur={true}
                    closeOnSubmit={false}
                    initialValue={{ id: String(selectedItem.id) }}
                    onSelectItem={(item) => {
                      item && onDropDownSelect(item);
                    }}
                    dataSet={dropDownData}
                  />
                )}
              </View>
            ) : (
              <TouchableOpacity onPress={closeSearch}>
                <AntDesign size={28} name="search1" />
              </TouchableOpacity>
            ),
        }}
      />

      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider="google"
          region={{
            latitude: selectedItem.lat,
            longitude: selectedItem.lng,
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
                <CustomMarker isSelected={ele.id === selectedItem.id} name={ele.name} />
              </Marker>
            ))}
        </MapView>
      </View>
    </>
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
  searchBar: {
    width: wWidth * 0.8,
  },
});
