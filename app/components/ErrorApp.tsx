import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingApp from './HeadingApp';
import {COLORS} from '../theme';
type Iprops = {
  error: boolean;
};
const ErrorApp = ({error}: Iprops) => {
  return (
    <>
      {error && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <HeadingApp size="md" style={{color: COLORS.error}}>
            somthingWrong
          </HeadingApp>
        </View>
      )}
    </>
  );
};

export default ErrorApp;

const styles = StyleSheet.create({});
