import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'netflix-sans': require('../assets/fonts/NetflixSansRegular.ttf'),
          'netflix-sans-bold': require('../assets/fonts/NetflixSansBold.ttf'),
          'netflix-sans-medium': require('../assets/fonts/NetflixSansMedium.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
