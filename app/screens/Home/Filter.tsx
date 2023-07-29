import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeadingApp, IconApp} from '../../components';
import {COLORS} from '../../theme';
import YearModal from '../../components/YearModal';

type Iprops = {
  onSelect: (value: IFilterValue) => void;
};
let arr = [
  {id: 1, name: 'movie'},
  {id: 2, name: 'series'},
  {id: 3, name: 'episode'},
];
const Filter = ({onSelect}: Iprops) => {
  let [y, setY] = useState<string | undefined>();
  let [type, setType] = useState<ItypeMovie>();
  let [yearModal, setYearModal] = useState<boolean>(false);

  useEffect(() => {
    onSelect({type, y});
  }, [type, y]);

  let Label = ({txt, hasIcon = false}: {txt: string; hasIcon?: boolean}) => (
    <View
      style={{
        padding: 6,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: txt == type ? COLORS.white : COLORS.border,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: txt == type ? COLORS.tint : COLORS.background,
      }}>
      <HeadingApp
        style={{color: txt == type ? COLORS.white : COLORS.text}}
        size="xs">
        {txt}
      </HeadingApp>
      {hasIcon && <IconApp name="arrow-drop-down" type="MaterialIcons" />}
    </View>
  );

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap: 12, paddingHorizontal: 12}}
      style={{flexDirection: 'row', flexGrow: 0}}>
      {arr.map(item => (
        <Pressable
          onPress={() => {
            if (item.name === type) setType(undefined);
            else setType(item.name as any);
          }}>
          <Label txt={item.name} />
        </Pressable>
      ))}
      <Pressable
        onPress={() => {
          setYearModal(true);
        }}>
        <Label hasIcon txt={y ?? 'year'} />
      </Pressable>
      <YearModal
        visible={yearModal}
        onSelect={(y: string) => {
          setYearModal(false);
          if (y == '0') setY(undefined); //to reset the y
          else if (y) setY(y);
        }}
      />
    </ScrollView>
  );
};

export default Filter;

const styles = StyleSheet.create({});
