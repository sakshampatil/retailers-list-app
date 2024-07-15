import { IRetailer } from "@/types/types";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { lightOrange, Orange } from "@/constants/Colors";
import { header, normal, small, superSmall } from "@/constants/Size";
import { format } from "date-fns";
import Popover, { PopoverPlacement, PopoverMode } from "react-native-popover-view";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesomeSix from "@expo/vector-icons/FontAwesome6";
import IonIcons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
import { useRef, useState } from "react";
import { Link } from "expo-router";

interface IRetailerProps {
  retailer: IRetailer;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const baseFontSize = 16;

export default function Retailer({ retailer }: IRetailerProps) {
  const popover = useRef();
  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: retailer.image,
          }}
        />
      </View>
      <View style={styles.cardContainer}>
        {/* Header  */}
        <View style={styles.header}>
          <Text style={styles.headerName}>{retailer.name}</Text>
          <View style={styles.headerIcons}>
            <Pressable style={styles.iconContainer}>
              <MaterialIcons size={header} name="edit" color={lightOrange} />
            </Pressable>

            <Pressable style={styles.iconContainer}>
              <IonIcons size={header} name="call-outline" color={lightOrange} />
            </Pressable>
          </View>
        </View>
        {/* PopOver  */}
        <Popover
          mode={PopoverMode.RN_MODAL}
          popoverStyle={styles.PopoverContainer}
          placement={PopoverPlacement.BOTTOM}
          isVisible={showPopover}
          onRequestClose={() => setShowPopover(false)}
          from={
            <TouchableOpacity onPress={() => setShowPopover(true)} style={{ width: 35 }}>
              <View style={styles.subHeader}>
                <MaterialCommunityIcons size={normal} name="map-marker-outline" color={"gray"} />
                <Text style={styles.subHeaderText}>View</Text>
              </View>
            </TouchableOpacity>
          }
        >
          <Link
            href={{
              pathname: "/retailerLocation",
              params: { latitude: retailer.latitude, longitude: retailer.longitude },
            }}
            asChild
          >
            <TouchableOpacity onPress={() => setShowPopover(false)} style={styles.popoverContext}>
              <View style={styles.subHeader}>
                <MaterialCommunityIcons size={normal} name="map-marker-outline" color={"gray"} />
                <Text style={styles.subHeaderText}>Address</Text>
              </View>
              <View>
                <Text>{`${retailer.city}, ${retailer.state}, ${retailer.zipCode}`}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </Popover>
        {/* Context  */}
        <View style={styles.context}>
          <View style={styles.subContext}>
            <Text style={styles.contextText}>Last Visit</Text>
            <Text style={styles.contextVal}>{format(retailer.lastVisitDate, "MM/dd/yyyy")}</Text>
          </View>
          <View style={styles.subContext}>
            <Text style={styles.contextText}>Last Order</Text>
            <Text style={styles.contextVal}>{format(retailer.lastOrderDate, "MM/dd/yyyy")}</Text>
          </View>
          <View style={styles.subContext}>
            <Text style={styles.contextText}>Last Order Value</Text>
            <Text style={styles.contextVal}>{`₹ ${retailer.lastOrderValue}`}</Text>
          </View>
        </View>
        {/* Footer  */}
        <View style={styles.footer}>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesomeSix name="arrow-up-short-wide" size={normal} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.footerButtonText}>Place Order</Text>
          </View>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity style={styles.footerButton}>
              <Foundation name="page-add" size={normal} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.footerButtonText}>Add Remarks</Text>
          </View>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity style={styles.footerButton}>
              <MaterialCommunityIcons name="lightbulb-on-outline" size={normal} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.footerButtonText}>Insights</Text>
          </View>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity style={styles.footerButton}>
              <MaterialCommunityIcons name="storefront-outline" size={normal} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.footerButtonText}>Stock</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    marginTop: 5,
  },
  imageContainer: {
    height: "auto",
    width: wWidth * 0.3,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  iconContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: lightOrange,
    padding: 2,
  },
  cardContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerName: {
    fontSize: baseFontSize + wWidth * 0.005,
    width: wWidth * 0.5,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 5,
  },
  subHeader: {
    flexDirection: "row",
  },
  subHeaderText: {
    color: "gray",
  },
  PopoverContainer: {
    borderColor: lightOrange,
    borderBottomColor: lightOrange,
    borderBottomWidth: 2,
    borderWidth: 2,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  popoverContext: {
    flexDirection: "column",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  subContext: {
    flexDirection: "column",
    // alignItems: "center",
  },
  contextText: {
    fontSize: small,
  },
  contextVal: {
    fontSize: small,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  footerButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footerButton: {
    backgroundColor: Orange,
    padding: 7,
    borderRadius: 10,
    width: 30,
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: superSmall,
    color: "gray",
  },
});
