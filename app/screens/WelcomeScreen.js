import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        {/* <Text style={styles.tagLine}>Sell what you don't need</Text> */}
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    objectFit: "contain",
  },
  tagLine: { color: "#FFF", fontWeight: "700", fontSize: 24 },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#FC5C65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
