import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ResultsScreen() {
  const router = useRouter();
  const { bmiResult, resultText, interpretation } = useLocalSearchParams<{
    bmiResult: string;
    resultText: string;
    interpretation: string;
  }>();

  const getResultColor = () => {
    if (resultText === 'BÌNH THƯỜNG') return '#43D49A';
    if (resultText === 'THỪA CÂN') return '#FF6B8A';
    return '#F6C453';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTag}>Kết quả sức khỏe</Text>
        <Text style={styles.titleText}>Chỉ số BMI của bạn</Text>
      </View>

      <View style={styles.resultCard}>
        <Text style={[styles.resultCategory, { color: getResultColor() }]}>{resultText}</Text>
        <Text style={styles.bmiValue}>{bmiResult}</Text>
        <Text style={styles.bodyText}>{interpretation}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.9} style={styles.bottomButton} onPress={() => router.back()}>
        <Text style={styles.bottomButtonText}>TÍNH LẠI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081425',
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 8,
  },
  headerTag: {
    color: '#8FE3D5',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.8,
  },
  resultCard: {
    flex: 1,
    backgroundColor: '#111F35',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#050B16',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  resultCategory: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  bmiValue: {
    fontSize: 76,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -1.5,
  },
  bodyText: {
    fontSize: 17,
    color: '#EAF1FF',
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 12,
  },
  bottomButton: {
    backgroundColor: '#FF6B8A',
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 16,
    marginBottom: 12,
    shadowColor: '#FF6B8A',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
});