import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IconApp, InputApp} from '../../components';
import {COLORS} from '../../theme';
import {translate} from '../../I18n';
type Iprops = {
  onSubmit: (txt: string) => void;
};
const SearchBox = ({onSubmit}: Iprops) => {
  let [searchText, setSearchTxt] = useState<string>('');

  return (
    <InputApp
      numberOfLines={1}
      returnKeyType="search"
      onSubmitEditing={() => onSubmit(searchText)}
      icon={
        <Pressable onPress={() => onSubmit(searchText)}>
          <IconApp
            name="search1"
            type="AntDesign"
            size={20}
            color={COLORS.tint}
          />
        </Pressable>
      }
      placeholder={translate('searchhere')}
      onChangeText={(txt: string) => setSearchTxt(txt)}
    />
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
