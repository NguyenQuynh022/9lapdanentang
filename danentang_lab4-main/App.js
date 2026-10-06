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

  // 현재 답변 상태
  const [answer, setAnswer] = useState(
    "질문해봐"
  );

  // 답변 목록
  const answers = [
    "예",
    "아니요",
    "확실해",
    "잘 모르겠어",
    "다시 물어봐",
    "아마도",
    "물론",
    "다시 시도",
  ];

  // Hàm tạo câu trả lời ngẫu nhiên
  const askQuestion = () => {

    const randomIndex =
      Math.floor(Math.random() * answers.length);

    setAnswer(answers[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#2a0909"
      />

      {/* TITLE */}
      <Text style={styles.title}>
        레드 매직8볼
      </Text>

      <Text style={styles.subtitle}>
        질문을 하고 공을 눌러보세요
      </Text>

      {/* ANSWER */}
      <View style={styles.answerBox}>

        <Text style={styles.answer}>
          {answer}
        </Text>

      </View>

      {/* MAGIC BALL */}
      <Pressable
        onPress={askQuestion}
        style={({ pressed }) => [
          styles.ballButton,
          pressed && styles.ballPressed,
        ]}
      >

        <Image
          source={require("./assets/magic8ball.png")}
          style={styles.ball}
        />

      </Pressable>

      {/* BUTTON */}
      <Pressable
        onPress={askQuestion}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >

        <Text style={styles.buttonText}>
          레드 매직8볼 물어보기
        </Text>

      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: "#3a0d0d",

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: 25,
  },

  title: {
    color: "#ffb4b4",

    fontSize: 32,

    fontWeight: "bold",

    letterSpacing: 3,

    marginBottom: 8,
  },

  subtitle: {
    color: "#ffd1d1",

    fontSize: 15,

    textAlign: "center",

    marginBottom: 25,
  },

  answerBox: {
    minWidth: 220,

    paddingHorizontal: 20,

    paddingVertical: 14,

    borderRadius: 15,

    backgroundColor: "#1a0505",

    marginBottom: 25,

    alignItems: "center",
  },

  answer: {
    color: "#fff1f1",

    fontSize: 18,

    fontWeight: "bold",

    textAlign: "center",

    letterSpacing: 1,
  },

  ballButton: {
    borderRadius: 150,

    marginBottom: 30,
  },

  ballPressed: {
    transform: [
      {
        scale: 0.95,
      },
    ],
  },

  ball: {
    width: 260,

    height: 260,

    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#d62828",

    paddingVertical: 16,

    paddingHorizontal: 30,

    borderRadius: 30,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  buttonPressed: {
    backgroundColor: "#b71c1c",
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "#fff4f4",

    fontSize: 15,

    fontWeight: "bold",

    letterSpacing: 1,
  },

});
