import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "../styles/Colors";
import places from "../styles/Places";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon name="flight" size={25} color={Colors.primary} />,
    <Icon name="beach-access" size={25} color={Colors.primary} />,
    <Icon name="near-me" size={25} color={Colors.primary} />,
    <Icon name="place" size={25} color={Colors.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text
            style={{
              color: Colors.white,
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={20} color={Colors.white} />
              <Text style={{ marginLeft: 5, color: Colors.white }}>
                {place.location}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={Colors.white} />
              <Text style={{ marginLeft: 5, color: Colors.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecomendedCard = ({ place }) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={place.image}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={22} color={Colors.white} />
              <Text style={{ color: Colors.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={Colors.white} />
              <Text style={{ color: Colors.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: Colors.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar translucent style="light" />
      <View style={styles.header}>
        <Icon name="sort" size={28} color={Colors.white} />
        <Icon name="notifications-none" size={28} color={Colors.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: Colors.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>beautiful places</Text>
            <View style={styles.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{
                  color: Colors.dark,
                  width: "85%",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={styles.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={styles.sectionTitle}>Recomended</Text>
          <FlatList
            // snapToAlignment={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <RecomendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
  },

  headerTitle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 23,
  },

  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 12,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",

    shadowOffset: { width: 3, height: 3 },
    shadowColor: Colors.dark,
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",

    marginHorizontal: 20,
    marginVertical: 20,
  },

  cardImage: {
    width: width / 2,
    height: 220,
    borderRadius: 10,

    marginRight: 20,
    padding: 10,

    overflow: "hidden",
  },

  rmCardImage: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",

    marginRight: 20,
    padding: 10,
  },
});

export default HomeScreen;
