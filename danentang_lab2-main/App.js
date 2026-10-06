import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#6B62F2" />

      <View style={styles.phoneFrame}>
        <View style={styles.headerRow}>
          <View style={styles.avatarWrap}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        <Text style={styles.name}>NGUYỄN THỊ DIỄM QUỲNH</Text>
        <Text style={styles.job}>AI ENGINEER</Text>
        <Text style={styles.description}>Information Technology Student</Text>

        <View style={styles.divider} />

        <View style={styles.card}>
          <Text style={styles.icon}>☎</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Phone</Text>
            <Text style={styles.cardText}>0123 456 789</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>✉</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Email</Text>
            <Text style={styles.cardText}>quynh@gmail.com</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>📍</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Location</Text>
            <Text style={styles.cardText}>Da Nang, Vietnam</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6B62F2",
    justifyContent: "center",
    alignItems: "center",
  },

  phoneFrame: {
    width: "92%",
    maxWidth: 430,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  headerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  avatarWrap: {
    flex: 1,
    alignItems: "center",
    marginLeft: 46,
  },

  avatar: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#D9D5FF",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: 0.8,
    marginTop: 12,
  },

  job: {
    color: "#E7E3FF",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1.2,
    marginTop: 10,
  },

  description: {
    color: "#D9D7FF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 6,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginTop: 22,
    marginBottom: 18,
  },

  card: {
    width: "100%",
    minHeight: 86,
    backgroundColor: "#EFEFF5",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 14,
    shadowColor: "#2D2A5B",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  icon: {
    fontSize: 34,
    width: 42,
    textAlign: "center",
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: "#6D6D6D",
    fontSize: 15,
    marginBottom: 4,
  },

  cardText: {
    color: "#202020",
    fontSize: 23,
    fontWeight: "700",
  },
});