import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {IMAGES, width} from '../common';

const NoConnection = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Lottie
        style={styles.lottie}
        loop
        autoPlay
        source={IMAGES.lottie.noConnection}
      />
    </View>
  );
};

export default NoConnection;

const styles = StyleSheet.create({
  lottie: {
    width: width,
    height: width,
  },
});
