import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuizButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}

export default function QuizButton({ title, color, onPress }: QuizButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});