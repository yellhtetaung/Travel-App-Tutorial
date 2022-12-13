import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "../styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar translucent style="light" backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={Colors.white}
            onPress={navigation.goBack}
          />

          <Icon name="more-vert" size={28} color={Colors.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: "70%",
              color: Colors.white,
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {place.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color={Colors.orange} />
            <Text
              style={{ color: Colors.white, fontWeight: "bold", fontSize: 20 }}
            >
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" size={30} color={Colors.red} />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={Colors.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.primary,
            }}
          >
            {place.location}
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          About the trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: Colors.white }}
          >
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: Colors.grey,
              marginLeft: 2,
            }}
          >
            /per day
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.bookNowBtn}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 20,
  },

  imageDetails: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",

    position: "absolute",
    bottom: 30,

    padding: 20,
  },

  detailContainer: {
    flex: 0.3,
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },

  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 30,
    elevation: 10,

    position: "absolute",
    top: -30,
    right: 20,

    justifyContent: "center",
    alignItems: "center",

    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.dark,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  footer: {
    height: 100,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    paddingHorizontal: 20,
  },

  bookNowBtn: {
    width: 120,
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailsScreen;
