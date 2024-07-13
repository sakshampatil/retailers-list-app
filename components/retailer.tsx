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

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesomeSix from "@expo/vector-icons/FontAwesome6";
import IonIcons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";

interface IRetailerProps {
  retailer: IRetailer;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const baseFontSize = 16;

export default function Retailer({ retailer }: IRetailerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: retailer.photo,
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
        {/* SubHeader  */}
        <View style={styles.subHeader}>
          <MaterialCommunityIcons size={normal} name="map-marker-outline" color={"gray"} />
          <Text style={styles.subHeaderText}>View</Text>
        </View>
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
    height: wHeight * 0.14,
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
  context: {
    flexDirection: "row",
    gap: 4,
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