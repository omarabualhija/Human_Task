import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import IconApp from './IconApp';
import HeadingApp from './HeadingApp';
import {IMAGES, width} from '../common';
import {SPACING} from '../theme';

interface Iprops {
  onPressBack?: Function;
  mainTxt?: string;
  RightComponent?: React.ComponentType;
}
const HeaderApp: React.FC<Iprops> = ({
  onPressBack,
  mainTxt,
  RightComponent,
}) => {
  return (
    <View
      style={{
        width: width,
        height: 50,
        paddingHorizontal: SPACING.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {onPressBack ? (
        <Pressable
          style={{flex: 0.25, alignItems: 'flex-start'}}
          onPress={() => onPressBack()}>
          <IconApp
            name="arrow-left"
            type="SimpleLineIcons"
            size={20}
            color="#636773"
          />
        </Pressable>
      ) : (
        <View style={{flex: 0.25}} />
      )}
      {mainTxt ? (
        <View style={{flex: 0.5, alignItems: 'center'}}>
          <HeadingApp numberOfLines={1} size="sm">
            {mainTxt}
          </HeadingApp>
        </View>
      ) : (
        <Image
          style={{width: 80, height: 60, resizeMode: 'contain'}}
          source={IMAGES.logos.transparentLogo}
        />
      )}

      {RightComponent ? (
        <View style={{flex: 0.25, alignItems: 'flex-end'}}>
          <RightComponent />
        </View>
      ) : (
        <View style={{flex: 0.25}} />
      )}
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({});
