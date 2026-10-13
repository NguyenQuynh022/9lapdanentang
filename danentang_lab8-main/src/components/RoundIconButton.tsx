import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RoundIconButtonProps {
  icon: string;
  onPress: () => void;
}

export default function RoundIconButton({ icon, onPress }: RoundIconButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}>
      <Text style={styles.iconText}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EEF4FF',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    shadowColor: '#0F172A',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconText: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
  },
});