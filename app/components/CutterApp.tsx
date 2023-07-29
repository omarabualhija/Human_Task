import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme';

const CutterApp = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 2,
        backgroundColor: COLORS.separator,
      }}
    />
  );
};

export default CutterApp;

const styles = StyleSheet.create({});
