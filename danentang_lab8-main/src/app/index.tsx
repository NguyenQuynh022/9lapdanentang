import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import ReusableCard from '../components/ReusableCard';
import RoundIconButton from '../components/RoundIconButton';
import CalculatorBrain from '../services/CalculatorBrain';

const ACTIVE_CARD_COLOR = '#1E2A47';
const INACTIVE_CARD_COLOR = '#121A2E';
const BOTTOM_CONTAINER_COLOR = '#FF6B8A';

export default function BMICalculatorScreen() {
  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(60);
  const [age, setAge] = useState<number>(20);

  const handleCalculate = () => {
    const calc = new CalculatorBrain(height, weight);
    const bmiResult = calc.calculateBMI();
    const resultText = calc.getResult();
    const interpretation = calc.getInterpretation();

    router.push({
      pathname: '/results',
      params: { bmiResult, resultText, interpretation },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTag}>Health dashboard</Text>
        <Text style={styles.title}>BMI Calculator</Text>
      </View>

      <View style={styles.row}>
        <ReusableCard
          color={selectedGender === 'male' ? ACTIVE_CARD_COLOR : INACTIVE_CARD_COLOR}
          style={styles.flexItem}
          onPress={() => setSelectedGender('male')}
          cardChild={
            <View style={styles.iconContainer}>
              <Text style={styles.emojiIcon}>♂</Text>
              <Text style={styles.label}>NAM</Text>
            </View>
          }
        />
        <ReusableCard
          color={selectedGender === 'female' ? ACTIVE_CARD_COLOR : INACTIVE_CARD_COLOR}
          style={styles.flexItem}
          onPress={() => setSelectedGender('female')}
          cardChild={
            <View style={styles.iconContainer}>
              <Text style={styles.emojiIcon}>♀</Text>
              <Text style={styles.label}>NỮ</Text>
            </View>
          }
        />
      </View>

      <ReusableCard
        color={ACTIVE_CARD_COLOR}
        style={styles.heightCard}
        cardChild={
          <View style={styles.centerAlign}>
            <Text style={styles.label}>CHIỀU CAO</Text>
            <View style={styles.unitRow}>
              <Text style={styles.numberText}>{height}</Text>
              <Text style={styles.unitText}>cm</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={100}
              maximumValue={220}
              step={1}
              value={height}
              minimumTrackTintColor="#FF6B8A"
              maximumTrackTintColor="#7F8AA5"
              thumbTintColor="#FF6B8A"
              onValueChange={(val) => setHeight(val)}
            />
          </View>
        }
      />

      <View style={styles.row}>
        <ReusableCard
          color={ACTIVE_CARD_COLOR}
          style={styles.flexItem}
          cardChild={
            <View style={styles.centerAlign}>
              <Text style={styles.label}>CÂN NẶNG</Text>
              <Text style={styles.numberText}>{weight}</Text>
              <View style={styles.buttonRow}>
                <RoundIconButton icon="-" onPress={() => setWeight((w) => Math.max(1, w - 1))} />
                <RoundIconButton icon="+" onPress={() => setWeight((w) => w + 1)} />
              </View>
            </View>
          }
        />
        <ReusableCard
          color={ACTIVE_CARD_COLOR}
          style={styles.flexItem}
          cardChild={
            <View style={styles.centerAlign}>
              <Text style={styles.label}>TUỔI</Text>
              <Text style={styles.numberText}>{age}</Text>
              <View style={styles.buttonRow}>
                <RoundIconButton icon="-" onPress={() => setAge((a) => Math.max(1, a - 1))} />
                <RoundIconButton icon="+" onPress={() => setAge((a) => a + 1)} />
              </View>
            </View>
          }
        />
      </View>

      <TouchableOpacity activeOpacity={0.9} style={styles.bottomButton} onPress={handleCalculate}>
        <Text style={styles.bottomButtonText}>TÍNH TOÁN BMI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081425',
    paddingHorizontal: 16,
    paddingTop: 12,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 8,
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
  title: {
    color: '#F7FBFF',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  row: {
    flexDirection: 'row',
  },
  flexItem: {
    flex: 1,
    height: 150,
  },
  heightCard: {
    marginVertical: 8,
    paddingVertical: 20,
  },
  centerAlign: {
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  emojiIcon: {
    fontSize: 50,
    color: '#C5D4FF',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#AEBED8',
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  unitRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
  },
  numberText: {
    fontSize: 46,
    color: '#FFFFFF',
    fontWeight: '900',
    letterSpacing: -1,
  },
  unitText: {
    fontSize: 18,
    color: '#AEBED8',
    marginLeft: 8,
    fontWeight: '600',
  },
  slider: {
    width: '90%',
    height: 40,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  bottomButton: {
    backgroundColor: BOTTOM_CONTAINER_COLOR,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 12,
    shadowColor: '#FF6B8A',
    shadowOpacity: 0.4,
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