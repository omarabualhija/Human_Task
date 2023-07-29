import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TextStyle,
} from 'react-native';
import React from 'react';
import HeadingApp from './HeadingApp';
import {COLORS, SPACING, TYPOGRAPHY} from '../theme';
import {width} from '../common';

interface Iprops {
  txt: string;
  onPress: Function;
  outer?: boolean;
  txtStyle?: TextStyle;
  style?: any;
  loading?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  gray?: boolean;
  icon?: any;
  iconStyle?: any;
  transparent?: boolean;
}
const BtnApp = ({
  txt,
  onPress,
  style,
  txtStyle,
  disabled,
  loading,
  hasIcon = false,
  gray = false,
  icon,
  iconStyle,
  transparent = false,
}: Iprops) => {
  let $txtStyle = [
    styles.txt,
    {
      color: gray
        ? COLORS.text
        : transparent
        ? COLORS.palette.primary400
        : COLORS.white,
    },
    txtStyle,
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.btn,
        {
          backgroundColor: gray
            ? COLORS.backgrouund
            : transparent
            ? 'transparent'
            : COLORS.palette.primary400,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} size={'small'} />
      ) : (
        <>
          {hasIcon && <Image source={icon} style={iconStyle} />}
          <HeadingApp size="md" style={$txtStyle}>
            {txt}
          </HeadingApp>
        </>
      )}
    </TouchableOpacity>
  );
};

export default BtnApp;

const styles = StyleSheet.create({
  btn: {
    width: width - SPACING.md,
    alignSelf: 'center',
    height: 50,
    borderRadius: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  txt: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: TYPOGRAPHY.fonts.Roboto.normal,
  },
});
