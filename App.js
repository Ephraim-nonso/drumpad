import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

const drumKit = {
  bass1: require("./assets/bass.mp3"),
  bass2: require("./assets/bass2.mp3"),
  bass3: require("./assets/bass3.mp3"),
  cymbal: require("./assets/cymbal.mp3"),
  cymbal2: require("./assets/cymbal2.mp3"),
  drumstick: require("./assets/drumstick.mp3"),
  hihat: require("./assets/hihat.mp3"),
  snare: require("./assets/snare.mp3"),
  tom: require("./assets/tom.mp3"),
};

const color = {
  bass: "#c0392b",
  cymbal: "#2980b9",
  drumstick: "#34495e",
  hihat: "#8e44ad",
  snare: "#d35400",
  tom: "#95a5a6",
};

export default class App extends React.Component {
  playSound = async (drumKitSound) => {
    try {
      const soundObject = new Audio.Sound();
      const path = drumKit[drumKitSound];
      await soundObject.loadAsync(path);
      await soundObject.playAsync().then((status) => {
        console.log(status);
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.rowContainer}>
          <Text style={styles.text}>Drum Pad</Text>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("bass1");
            }}
          >
            <View
              style={[{ backgroundColor: color["bass"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("bass2");
            }}
          >
            <View
              style={[{ backgroundColor: color["bass"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("bass3");
            }}
          >
            <View
              style={[{ backgroundColor: color["bass"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("cymbal");
            }}
          >
            <View
              style={[{ backgroundColor: color["cymbal"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("cymbal2");
            }}
          >
            <View
              style={[{ backgroundColor: color["cymbal"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("drumstick");
            }}
          >
            <View
              style={[{ backgroundColor: color["drumstick"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("hihat");
            }}
          >
            <View
              style={[{ backgroundColor: color["hihat"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("snare");
            }}
          >
            <View
              style={[{ backgroundColor: color["snare"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("tom");
            }}
          >
            <View
              style={[{ backgroundColor: color["tom"] }, styles.tiles]}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
    margin: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  tiles: {
    height: 130,
    width: 100,
    margin: 5,
    borderRadius: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});
