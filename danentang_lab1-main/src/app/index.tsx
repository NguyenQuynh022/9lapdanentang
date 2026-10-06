import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1729" />

      <View style={styles.topBar}>
        <View style={styles.topIconBox}>
          <Text style={styles.topIcon}>✦</Text>
        </View>

        <Text style={styles.headerText}>I Am Rich</Text>

        <View style={styles.topDotBox}>
          <Text style={styles.topDot}>•</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.diamond}>💎</Text>
        <Text style={styles.title}>I AM RICH</Text>
        <Text style={styles.subtitle}>wealth is a state of mind</Text>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.tabButton}>
          <Text style={styles.tabIcon}>◉</Text>
        </View>
        <View style={styles.tabButtonActive}>
          <Text style={styles.tabIconActive}>✦</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1729",
  },
  topBar: {
    height: 92,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    backgroundColor: "#101C2E",
    borderBottomWidth: 1,
    borderBottomColor: "#1A2D45",
  },
  topIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#1B2D45",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334E72",
  },
  topIcon: {
    color: "#8AB4FF",
    fontSize: 18,
    fontWeight: "700",
  },
  headerText: {
    color: "#F5F7FA",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  topDotBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#1B2D45",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334E72",
  },
  topDot: {
    color: "#E0EAF9",
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
  },
  diamond: {
    fontSize: 120,
    marginBottom: 12,
  },
  title: {
    color: "#F3F7FF",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 3,
  },
  subtitle: {
    marginTop: 10,
    color: "#B7C6D9",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "lowercase",
  },
  bottomBar: {
    height: 74,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    backgroundColor: "#0B1729",
    paddingBottom: 12,
  },
  tabButton: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#10223B",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#203A5F",
  },
  tabButtonActive: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#1F5CF5",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#80A8FF",
  },
  tabIcon: {
    color: "#A5B9D6",
    fontSize: 20,
  },
  tabIconActive: {
    color: "#F4F8FF",
    fontSize: 20,
  },
});
