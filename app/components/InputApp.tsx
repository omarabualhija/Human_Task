import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
  Pressable,
  StyleProp,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import HeadingApp from './HeadingApp';
import IconApp from './IconApp';
import {COLORS, SPACING, hitSlop} from '../theme';
import {width} from '../common';
interface Iprops extends TextInputProps {
  style?: StyleProp<TextInputProps>;
  containerStyle?: any;
  numberOfLines?: number;
  title?: string;
  password?: boolean;
  icon?: React.ReactNode;
  value?: string;
  subTitle?: string;
  onPressSub?: Function;
  onPress?: Function;
  error?: boolean;
  editable?: boolean;
  titleStyle?: any;
}

const InputApp = forwardRef(function InputApp(
  props: Iprops & TextInputProps,
  ref: any,
) {
  let {
    onPressSub = () => '',
    onPress = () => '',
    editable: editableTxt = true,
  } = props;
  let [isSecure, setisSecure] = useState<boolean>(
    props.password ? true : false,
  );

  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {props.title && <HeadingApp size="sm">{props.title}</HeadingApp>}
        {props.subTitle && (
          <Pressable onPress={() => onPressSub()}>
            <HeadingApp size="sm">{props.subTitle}</HeadingApp>
          </Pressable>
        )}
      </View>

      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 48,
            backgroundColor: COLORS.white,
            borderRadius: SPACING.md,
            paddingHorizontal: SPACING.md,
          },
          {borderWidth: props.error ? 1 : 0, borderColor: COLORS.error},
          props.containerStyle,
        ]}>
        <TextInput
          placeholderTextColor={COLORS.text}
          {...props}
          ref={ref}
          secureTextEntry={isSecure}
          value={props.value}
          numberOfLines={props.numberOfLines ?? 1}
          style={[styles.input, props.style]}
          editable={editableTxt}
        />
        {props.icon && props.icon}
        {props.password && (
          <Pressable
            hitSlop={hitSlop}
            style={{
              //backgroundColor: 'red',
              height: '100%',
              justifyContent: 'center',
            }}
            onPress={() => setisSecure(prev => !prev)}>
            <IconApp
              name={isSecure ? 'eye' : 'eye-off'}
              type="Feather"
              color={COLORS.text}
              size={20}
            />
          </Pressable>
        )}

        {/* to solve IOS bug */}
        {!editableTxt && (
          <Pressable
            onPress={() => onPress()}
            style={{
              position: 'absolute',
              //   backgroundColor: 'red',
              width: '100%',
              height: '100%',
              zIndex: 9999,
            }}
          />
        )}
      </View>
    </View>
  );
});

export default InputApp;

const styles = StyleSheet.create({
  container: {
    width: width - SPACING.md,
    alignSelf: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
    //  textAlign: 'right',
    height: '100%',
  },
});
