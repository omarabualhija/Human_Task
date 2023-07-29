import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import IconApp from './IconApp';
interface Iprops {
  onPress: Function;
  color?: string;
  size?: number;
  type?: string;
  name?: string;
  style?: any;
  isImg?: boolean;
  source?: any;
  imgStyle?: StyleProp<ImageStyle>;
}
const BtnIconApp = ({
  onPress,
  color,
  name,
  size,
  type,
  isImg = false,
  style,
  source,
  imgStyle,
}: Iprops) => {
  return (
    <Pressable onPress={() => onPress()} style={style}>
      {isImg ? (
        <Image source={source} style={imgStyle} />
      ) : (
        <IconApp
          name={name ?? ''}
          size={size}
          color={color}
          type={type ?? ''}
        />
      )}
    </Pressable>
  );
};

export default BtnIconApp;

const styles = StyleSheet.create({});
