import { ScrollView, StyleSheet, Text, View } from 'react-native';

const cards = [
  { title: 'Wellness', subtitle: 'Reset & recharge', value: '4.8/5' },
  { title: 'Focus', subtitle: 'Deep work streak', value: '12 days' },
  { title: 'Travel', subtitle: 'Next destination', value: 'Kyiv' },
];

const articleList = [
  '5 habits to start your morning in a calmer rhythm',
  'Designing a workspace that actually helps you focus',
  'Small rituals that improve energy and clarity',
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Discover</Text>
        <Text style={styles.title}>Inspiration</Text>
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Featured</Text>
        <Text style={styles.heroTitle}>Build a life that feels lighter every day</Text>
        <Text style={styles.heroText}>
          A thoughtful routine can turn scattered effort into steady momentum.
        </Text>
      </View>

      <View style={styles.cardGrid}>
        {cards.map((card) => (
          <View key={card.title} style={styles.infoCard}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
            <Text style={styles.cardValue}>{card.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.listCard}>
        <Text style={styles.listTitle}>Fresh ideas</Text>
        {articleList.map((item, index) => (
          <View key={item} style={styles.listItem}>
            <Text style={styles.listNumber}>{index + 1}</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#090E1A',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 18,
  },
  header: {
    gap: 4,
  },
  eyebrow: {
    color: '#9CA3AF',
    fontSize: 12,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  title: {
    color: '#F8FAFC',
    fontSize: 30,
    fontWeight: '700',
  },
  heroCard: {
    backgroundColor: '#121B2D',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A3B59',
  },
  heroLabel: {
    color: '#A5B4FC',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '700',
    marginTop: 12,
  },
  heroText: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  infoCard: {
    width: '31%',
    minWidth: 108,
    flexGrow: 1,
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#263244',
  },
  cardTitle: {
    color: '#A5B4FC',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  cardSubtitle: {
    color: '#CBD5E1',
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
  },
  cardValue: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 14,
  },
  listCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#263244',
    padding: 18,
    gap: 12,
  },
  listTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  listNumber: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#1D4ED8',
    color: '#EFF6FF',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '700',
  },
  listText: {
    flex: 1,
    color: '#E2E8F0',
    fontSize: 14,
    lineHeight: 20,
  },
});