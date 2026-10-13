import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ReusableCardProps {
  color: string;
  cardChild?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function ReusableCard({ color, cardChild, onPress, style }: ReusableCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      style={[styles.card, { backgroundColor: color }, style]}
      onPress={onPress}
      disabled={!onPress}
    >
      {cardChild}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#050B16',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
});