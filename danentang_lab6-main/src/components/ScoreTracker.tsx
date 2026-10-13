import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScoreTrackerProps {
  scoreIcons: boolean[];
}

export default function ScoreTracker({ scoreIcons }: ScoreTrackerProps) {
  return (
    <View style={styles.container}>
      {scoreIcons.map((isCorrect, index) => (
        <Text
          key={index}
          style={[styles.icon, isCorrect ? styles.correct : styles.wrong]}
        >
          {isCorrect ? '✓' : '✗'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 36,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 6,
  },
  correct: {
    color: '#4CAF50',
  },
  wrong: {
    color: '#F44336',
  },
});