import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context'; //see https://reactnavigation.org/docs/handling-safe-area/#use-the-hook-for-more-control
import {width, height as _height} from '../common';
import {COLORS, SPACING} from '../theme';
import useThemeApp from '../hooks/useThemeApp';
const ModalApp = ({
  isVisible,
  children,
  onClose,
  onModalShow = () => '',
  propagateSwipe = false,
  height = _height,
  avoidKeyboard = false,
  position = 'bottom',
}: {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: Function;
  onModalShow?: Function;
  propagateSwipe?: boolean;
  height?: number;
  avoidKeyboard?: boolean;
  position?: 'bottom' | 'center';
}) => {
  const insets = useSafeAreaInsets();
  let {theme} = useThemeApp();

  return (
    <Modal
      isVisible={isVisible}
      scrollOffset={100}
      propagateSwipe={propagateSwipe}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      backdropOpacity={0.2}
      onModalShow={() => onModalShow()}
      onBackdropPress={() => onClose()}
      deviceWidth={width}
      deviceHeight={height}
      avoidKeyboard={avoidKeyboard}
      hideModalContentWhileAnimating={false}
      swipeDirection={propagateSwipe ? undefined : 'down'}
      onSwipeComplete={() => onClose()}
      onBackButtonPress={() => onClose()}
      coverScreen
      style={{
        zIndex: 999,
        width: width,
        height: height,
        justifyContent: position === 'bottom' ? 'flex-end' : 'center',
        margin: 0,
      }}>
      {position === 'bottom' ? (
        <View
          style={{
            width: width,
            height: height - insets.top,
            borderTopStartRadius: SPACING.md,
            borderTopEndRadius: SPACING.md,
            backgroundColor:
              theme === 'dark' ? COLORS.darkBackground : COLORS.white,
          }}>
          <View
            style={{
              width: 40,
              height: 5,
              backgroundColor: '#D9D9D9',
              borderRadius: SPACING.md,
              alignSelf: 'center',
              marginTop: SPACING.md / 2,
            }}
          />
          {children}
        </View>
      ) : (
        <View
          style={{
            width: width - SPACING.md,
            height: height,
            position: 'absolute',
            backgroundColor:
              theme === 'dark' ? COLORS.darkBackground : COLORS.white,
            borderRadius: SPACING.md,
            alignSelf: 'center',
          }}>
          {children}
        </View>
      )}
    </Modal>
  );
};

export default ModalApp;

const styles = StyleSheet.create({});
