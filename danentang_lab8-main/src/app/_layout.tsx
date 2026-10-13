import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#081425' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'BMI CALCULATOR' }} />
      <Stack.Screen name="results" options={{ title: 'KẾT QUẢ BMI' }} />
    </Stack>
  );
}