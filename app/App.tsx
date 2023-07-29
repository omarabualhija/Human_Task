import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation';
import React, {useLayoutEffect} from 'react';
import {COLORS} from './theme';
import './I18n';
import {translate} from './I18n';
import {handleChangeLanguage} from './utils';
import './utils/ignoreWarnings';
import {QueryClient, QueryClientProvider} from 'react-query';
import useConnection from './hooks/useConnection';
import {NoConnection} from './components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  let {isConnected} = useConnection();

  // Create a client
  const queryClient = new QueryClient();
  let data = translate('prefex');
  useLayoutEffect(() => {
    handleChangeLanguage(false, data);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          {isConnected ? <Navigation /> : <NoConnection />}
        </SafeAreaView>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
