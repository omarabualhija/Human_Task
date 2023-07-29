import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme';
type Iprops = {
  loading: boolean;
};
const LoadingApp = ({loading}: Iprops) => {
  return (
    <>
      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={COLORS.tint} />
        </View>
      )}
    </>
  );
};

export default LoadingApp;

const styles = StyleSheet.create({});
