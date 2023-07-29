import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalApp from './ModalApp';
import HeadingApp from './HeadingApp';
import {height} from '../common';
import {COLORS} from '../theme';
type Iprops = {
  visible: boolean;
  onSelect: (year: string) => void;
};
const YearModal = ({visible, onSelect}: Iprops) => {
  const years = [];
  for (let year = 1970; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }
  return (
    <ModalApp
      isVisible={visible}
      onClose={() => onSelect('')}
      height={height / 2}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 12}}>
        <Pressable style={styles.slice} onPress={() => onSelect('0')}>
          <HeadingApp size="sm">any</HeadingApp>
        </Pressable>
        {years.map(item => (
          <Pressable
            onPress={() => onSelect(String(item))}
            style={styles.slice}>
            <HeadingApp size="sm">{item}</HeadingApp>
          </Pressable>
        ))}
      </ScrollView>
    </ModalApp>
  );
};

export default YearModal;

const styles = StyleSheet.create({
  slice: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
});
