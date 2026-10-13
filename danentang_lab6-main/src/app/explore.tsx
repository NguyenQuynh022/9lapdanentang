import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const imageUrl =
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80';

const steps = [
  {
    number: '01',
    title: 'Đọc câu hỏi',
    description: 'Mỗi câu đều có ảnh minh họa để bạn khám phá thêm về chủ đề.',
  },
  {
    number: '02',
    title: 'Chọn Đúng hoặc Sai',
    description: 'Chọn một đáp án duy nhất cho mỗi câu hỏi.',
  },
  {
    number: '03',
    title: 'Khám phá điều mới',
    description: 'Xem giải thích sau mỗi lượt và thử sức với trọn bộ 8 câu.',
  },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FB" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>CHÀO MỪNG BẠN ĐẾN VỚI</Text>
        <Text style={styles.title}>Quiz vui mỗi ngày</Text>
        <Text style={styles.subtitle}>
          Một chút tò mò, thêm thật nhiều kiến thức thú vị về thế giới quanh ta.
        </Text>

        <View style={styles.imageCard}>
          <Image
            source={{ uri: imageUrl }}
            contentFit="cover"
            transition={250}
            style={styles.image}
          />
          <View style={styles.imageShade} />
          <Text style={styles.imageCaption}>SẴN SÀNG KHÁM PHÁ?</Text>
        </View>

        <Text style={styles.sectionTitle}>Cách chơi</Text>
        <View style={styles.stepsCard}>
          {steps.map((step, index) => (
            <View
              key={step.number}
              style={[styles.step, index < steps.length - 1 && styles.stepBorder]}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{step.number}</Text>
              </View>
              <View style={styles.stepCopy}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <Link href="/" asChild>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.startButton, pressed && styles.pressed]}>
            <Text style={styles.startButtonText}>BẮT ĐẦU TRẢ LỜI</Text>
            <Text style={styles.startArrow}>→</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 30,
  },
  eyebrow: {
    color: '#3867F4',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  title: {
    color: '#172B4D',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 7,
  },
  subtitle: {
    color: '#7A8799',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 22,
  },
  imageCard: {
    height: 190,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: '#DCE5F2',
    marginBottom: 26,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 29, 52, 0.23)',
  },
  imageCaption: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginHorizontal: 17,
    marginBottom: 17,
  },
  sectionTitle: {
    color: '#172B4D',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 13,
  },
  stepsCard: {
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 13,
  },
  stepBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F6',
  },
  numberBadge: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: '#EAF0FF',
  },
  numberText: {
    color: '#3867F4',
    fontSize: 11,
    fontWeight: '800',
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    color: '#172B4D',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4,
  },
  stepDescription: {
    color: '#7A8799',
    fontSize: 12,
    lineHeight: 17,
  },
  startButton: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderRadius: 16,
    backgroundColor: '#3867F4',
    marginTop: 22,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.9,
  },
  startArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.82,
  },
});
