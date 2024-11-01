import 'react-native-reanimated';
// Import your global CSS file
import "../global.css";

import * as SplashScreen from 'expo-splash-screen';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack } from 'expo-router';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
});

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
    </ThemeProvider>
    </QueryClientProvider>
  );
}
