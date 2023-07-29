import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';

const useTheme = () => {
  let [theme, setTheme] = useState<'dark' | 'light'>(
    useColorScheme() === 'dark' ? 'dark' : 'light',
  );

  console.log(theme);
  return {theme};
};

export default useTheme;

const styles = StyleSheet.create({});
