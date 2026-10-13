import { Image } from 'expo-image';
import React, { useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ScoreTracker from '../components/ScoreTracker';
import QuizBrain from '../services/QuizBrain';

const COLORS = {
  background: '#F4F7FB',
  ink: '#172B4D',
  muted: '#7A8799',
  blue: '#3867F4',
  blueTint: '#EAF0FF',
  green: '#16845B',
  greenTint: '#E8F7F0',
  red: '#C44D55',
  redTint: '#FFF0F0',
  white: '#FFFFFF',
};

export default function HomeScreen() {
  const quizBrain = useRef(new QuizBrain()).current;
  const [question, setQuestion] = useState(quizBrain.getCurrentQuestion());
  const [scoreIcons, setScoreIcons] = useState<boolean[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const questionNumber = quizBrain.getQuestionNumber() + 1;
  const totalQuestions = quizBrain.getTotalQuestions();
  const isCorrect = selectedAnswer === question.answer;
  const progress = isComplete ? 100 : (questionNumber / totalQuestions) * 100;

  const checkAnswer = (choice: boolean) => {
    if (selectedAnswer !== null) return;

    const correct = choice === question.answer;
    setSelectedAnswer(choice);
    setScoreIcons((current) => [...current, correct]);
    if (correct) setCorrectCount((current) => current + 1);
  };

  const continueQuiz = () => {
    if (selectedAnswer === null) return;

    if (quizBrain.isFinished()) {
      setIsComplete(true);
      return;
    }

    quizBrain.nextQuestion();
    setQuestion(quizBrain.getCurrentQuestion());
    setSelectedAnswer(null);
  };

  const restartQuiz = () => {
    quizBrain.reset();
    setQuestion(quizBrain.getCurrentQuestion());
    setScoreIcons([]);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setIsComplete(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>TRẮC NGHIỆM KIẾN THỨC</Text>
            <Text style={styles.brand}>Quiz vui mỗi ngày</Text>
          </View>
          <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>{totalQuestions} CÂU</Text>
          </View>
        </View>

        {isComplete ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultEmoji}>🎉</Text>
            <Text style={styles.resultEyebrow}>BẠN ĐÃ HOÀN THÀNH</Text>
            <Text style={styles.resultTitle}>Làm tốt lắm!</Text>
            <Text style={styles.resultScore}>
              {correctCount}
              <Text style={styles.resultScoreTotal}> / {totalQuestions}</Text>
            </Text>
            <Text style={styles.resultDescription}>
              câu trả lời chính xác. Sẵn sàng thử lại để phá kỷ lục chưa?
            </Text>
            <ScoreTracker scoreIcons={scoreIcons} />
            <Pressable
              accessibilityRole="button"
              onPress={restartQuiz}
              style={({ pressed }) => [styles.restartButton, pressed && styles.pressed]}>
              <Text style={styles.restartButtonText}>CHƠI LẠI</Text>
              <Text style={styles.restartArrow}>↻</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <View style={styles.progressSection}>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>TIẾN ĐỘ</Text>
                <Text style={styles.progressCount}>
                  {questionNumber}
                  <Text style={styles.progressTotal}> / {totalQuestions}</Text>
                </Text>
              </View>
              <View
                accessibilityRole="progressbar"
                accessibilityValue={{ min: 0, max: totalQuestions, now: questionNumber }}
                style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
              </View>
            </View>

            <View style={styles.imageCard}>
              <Image
                source={{ uri: question.imageUrl }}
                contentFit="cover"
                transition={250}
                style={styles.questionImage}
              />
              <View style={styles.imageShade} />
              <View style={styles.imageTag}>
                <Text style={styles.imageTagText}>{question.category}</Text>
              </View>
              <Text style={styles.imageCaption}>MỞ RỘNG THẾ GIỚI QUANH BẠN</Text>
            </View>

            <View style={styles.questionBlock}>
              <Text style={styles.questionLabel}>CÂU HỎI {String(questionNumber).padStart(2, '0')}</Text>
              <Text style={styles.questionText}>{question.text}</Text>
            </View>

            <View style={styles.answerRow}>
              <AnswerButton
                title="ĐÚNG"
                symbol="✓"
                answer={true}
                selectedAnswer={selectedAnswer}
                correctAnswer={question.answer}
                onPress={checkAnswer}
              />
              <AnswerButton
                title="SAI"
                symbol="×"
                answer={false}
                selectedAnswer={selectedAnswer}
                correctAnswer={question.answer}
                onPress={checkAnswer}
              />
            </View>

            {selectedAnswer !== null && (
              <View
                style={[
                  styles.feedback,
                  isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
                ]}>
                <Text
                  style={[
                    styles.feedbackTitle,
                    isCorrect ? styles.feedbackTitleCorrect : styles.feedbackTitleWrong,
                  ]}>
                  {isCorrect ? 'Chính xác!' : 'Chưa đúng rồi!'}
                </Text>
                <Text style={styles.feedbackText}>{question.explanation}</Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={continueQuiz}
                  style={({ pressed }) => [
                    styles.continueButton,
                    pressed && styles.pressed,
                  ]}>
                  <Text style={styles.continueButtonText}>
                    {quizBrain.isFinished() ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'}
                  </Text>
                  <Text style={styles.continueArrow}>→</Text>
                </Pressable>
              </View>
            )}

            <View style={styles.footer}>
              <ScoreTracker scoreIcons={scoreIcons} />
              <Text style={styles.footerLabel}>CÂU ĐÚNG / SAI</Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

interface AnswerButtonProps {
  title: string;
  symbol: string;
  answer: boolean;
  selectedAnswer: boolean | null;
  correctAnswer: boolean;
  onPress: (answer: boolean) => void;
}

function AnswerButton({
  title,
  symbol,
  answer,
  selectedAnswer,
  correctAnswer,
  onPress,
}: AnswerButtonProps) {
  const isSelected = selectedAnswer === answer;
  const isRevealedCorrect = selectedAnswer !== null && answer === correctAnswer;
  const isRevealedWrong = isSelected && answer !== correctAnswer;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: selectedAnswer !== null, selected: isSelected }}
      disabled={selectedAnswer !== null}
      onPress={() => onPress(answer)}
      style={({ pressed }) => [
        styles.answerButton,
        isRevealedCorrect && styles.answerCorrect,
        isRevealedWrong && styles.answerWrong,
        pressed && selectedAnswer === null && styles.pressed,
      ]}>
      <Text
        style={[
          styles.answerSymbol,
          isRevealedCorrect && styles.answerSymbolLight,
          isRevealedWrong && styles.answerSymbolLight,
        ]}>
        {symbol}
      </Text>
      <Text
        style={[
          styles.answerText,
          (isRevealedCorrect || isRevealedWrong) && styles.answerTextLight,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  eyebrow: {
    color: COLORS.blue,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
  brand: {
    color: COLORS.ink,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 4,
  },
  countBadge: {
    backgroundColor: COLORS.blueTint,
    borderRadius: 16,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  countBadgeText: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },
  progressLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  progressCount: {
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: '800',
  },
  progressTotal: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  progressTrack: {
    height: 7,
    borderRadius: 8,
    backgroundColor: '#E4EAF2',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.blue,
  },
  imageCard: {
    height: 200,
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: '#DCE5F2',
    justifyContent: 'flex-end',
    marginBottom: 23,
  },
  questionImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 29, 52, 0.2)',
  },
  imageTag: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: 'rgba(255,255,255,0.93)',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  imageTagText: {
    color: COLORS.ink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  imageCaption: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginHorizontal: 17,
    marginBottom: 16,
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowRadius: 8,
  },
  questionBlock: {
    marginBottom: 19,
  },
  questionLabel: {
    color: COLORS.blue,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  questionText: {
    color: COLORS.ink,
    fontSize: 24,
    lineHeight: 33,
    fontWeight: '800',
  },
  answerRow: {
    flexDirection: 'row',
    gap: 12,
  },
  answerButton: {
    flex: 1,
    minHeight: 62,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    borderWidth: 1,
    borderColor: '#E4EAF2',
    borderRadius: 18,
    backgroundColor: COLORS.white,
  },
  answerCorrect: {
    borderColor: COLORS.green,
    backgroundColor: COLORS.green,
  },
  answerWrong: {
    borderColor: COLORS.red,
    backgroundColor: COLORS.red,
  },
  answerSymbol: {
    color: COLORS.blue,
    fontSize: 21,
    fontWeight: '700',
  },
  answerSymbolLight: {
    color: COLORS.white,
  },
  answerText: {
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  answerTextLight: {
    color: COLORS.white,
  },
  feedback: {
    borderRadius: 18,
    marginTop: 14,
    padding: 15,
  },
  feedbackCorrect: {
    backgroundColor: COLORS.greenTint,
  },
  feedbackWrong: {
    backgroundColor: COLORS.redTint,
  },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 5,
  },
  feedbackTitleCorrect: {
    color: COLORS.green,
  },
  feedbackTitleWrong: {
    color: COLORS.red,
  },
  feedbackText: {
    color: COLORS.ink,
    fontSize: 13,
    lineHeight: 19,
  },
  continueButton: {
    minHeight: 45,
    borderRadius: 13,
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 13,
  },
  continueButtonText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  continueArrow: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#E4EAF2',
  },
  footerLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  resultCard: {
    flex: 1,
    minHeight: 520,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 26,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    shadowColor: '#253A5B',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  resultEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  resultEyebrow: {
    color: COLORS.blue,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
  resultTitle: {
    color: COLORS.ink,
    fontSize: 26,
    fontWeight: '800',
    marginTop: 8,
  },
  resultScore: {
    color: COLORS.blue,
    fontSize: 62,
    fontWeight: '800',
    marginTop: 8,
  },
  resultScoreTotal: {
    color: COLORS.muted,
    fontSize: 28,
    fontWeight: '700',
  },
  resultDescription: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 15,
  },
  restartButton: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 16,
    backgroundColor: COLORS.blue,
    marginTop: 25,
  },
  restartButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  restartArrow: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
});
