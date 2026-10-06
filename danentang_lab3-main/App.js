import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {

  // State của hai viên xúc xắc
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  // Hàm tung xúc xắc
  const rollDice = () => {

    const randomDice1 =
      Math.floor(Math.random() * 6) + 1;

    const randomDice2 =
      Math.floor(Math.random() * 6) + 1;

    setDice1(randomDice1);
    setDice2(randomDice2);
  };

  // Danh sách hình xúc xắc
  const diceImages = {
    1: require("./assets/dice1.png"),
    2: require("./assets/dice2.png"),
    3: require("./assets/dice3.png"),
    4: require("./assets/dice4.png"),
    5: require("./assets/dice5.png"),
    6: require("./assets/dice6.png"),
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#111827"
      />

      {/* TITLE */}
      <Text style={styles.title}>
        DICEE
      </Text>

      <Text style={styles.subtitle}>
        Roll the dice
      </Text>

      {/* DICE */}
      <View style={styles.diceContainer}>

        <Image
          source={diceImages[dice1]}
          style={styles.dice}
        />

        <Image
          source={diceImages[dice2]}
          style={styles.dice}
        />

      </View>

      {/* RESULT */}
      <Text style={styles.result}>
        {dice1 + dice2}
      </Text>

      {/* BUTTON */}
      <Pressable
        style={styles.button}
        onPress={rollDice}
      >
        <Text style={styles.buttonText}>
          ROLL DICE
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    color: "#F9FAFB",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 5,
  },

  subtitle: {
    color: "#A5B4FC",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 40,
  },

  diceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  dice: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },

  result: {
    color: "#FDE68A",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#7C3AED",
    paddingVertical: 16,
    paddingHorizontal: 45,
    borderRadius: 30,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#F5F3FF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

});