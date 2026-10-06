import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAudioPlayer } from "expo-audio";

export default function App() {
  const note1 = useAudioPlayer(require("./assets/sounds/note1.wav"));
  const note2 = useAudioPlayer(require("./assets/sounds/note2.wav"));
  const note3 = useAudioPlayer(require("./assets/sounds/note3.wav"));
  const note4 = useAudioPlayer(require("./assets/sounds/note4.wav"));
  const note5 = useAudioPlayer(require("./assets/sounds/note5.wav"));
  const note6 = useAudioPlayer(require("./assets/sounds/note6.wav"));
  const note7 = useAudioPlayer(require("./assets/sounds/note7.wav"));

  const playNote = (player) => {
    try {
      player.volume = 1;
      player.seekTo(0);
      player.play();
    } catch (error) {
      console.log("Lỗi phát âm thanh:", error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🎵 XYLOPHONE</Text>

      <Pressable
        style={[styles.bar, styles.red]}
        onPress={() => playNote(note1)}
      >
        <Text style={styles.noteText}>DO</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.orange]}
        onPress={() => playNote(note2)}
      >
        <Text style={styles.noteText}>RE</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.yellow]}
        onPress={() => playNote(note3)}
      >
        <Text style={styles.noteText}>MI</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.green]}
        onPress={() => playNote(note4)}
      >
        <Text style={styles.noteText}>FA</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.blue]}
        onPress={() => playNote(note5)}
      >
        <Text style={styles.noteText}>SOL</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.indigo]}
        onPress={() => playNote(note6)}
      >
        <Text style={styles.noteText}>LA</Text>
      </Pressable>

      <Pressable
        style={[styles.bar, styles.purple]}
        onPress={() => playNote(note7)}
      >
        <Text style={styles.noteText}>SI</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121826",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    color: "#f5f7ff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  bar: {
    width: "100%",
    height: 65,
    marginVertical: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  red: {
    backgroundColor: "#ff6b6b",
  },

  orange: {
    backgroundColor: "#f9a75f",
  },

  yellow: {
    backgroundColor: "#ffd166",
  },

  green: {
    backgroundColor: "#7bd389",
  },

  blue: {
    backgroundColor: "#4ecdc4",
  },

  indigo: {
    backgroundColor: "#5da8ff",
  },

  purple: {
    backgroundColor: "#a78bfa",
  },

  noteText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});