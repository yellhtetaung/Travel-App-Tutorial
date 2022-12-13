import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Colors from "../styles/Colors";

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent style="light" backgroundColor="rgba(0,0,0,0)" />

      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={styles.details}>
          <Text
            style={{ color: Colors.white, fontSize: 35, fontWeight: "bold" }}
          >
            Discover
          </Text>
          <Text
            style={{ color: Colors.white, fontSize: 35, fontWeight: "bold" }}
          >
            world with us
          </Text>
          <Text style={{ color: Colors.white, lineHeight: 25, marginTop: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            sem non erat vehicula dignissim. Morbi eget congue ante, feguiat.
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View style={styles.btn}>
              <Text style={{ fontWeight: "bold" }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    height: "50%",
    position: "absolute",
    bottom: 0,

    paddingHorizontal: 40,
  },

  btn: {
    width: 120,
    height: 50,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardScreen;
