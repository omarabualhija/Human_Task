import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context'; //see https://reactnavigation.org/docs/handling-safe-area/#use-the-hook-for-more-control
import HeadingApp from '../HeadingApp';
import {Iprops, ItoastRef} from './Toast.type';
let {height} = Dimensions.get('window');
const Toast = forwardRef<ItoastRef>((props, ToastRef) => {
  const insets = useSafeAreaInsets();
  let [showToast, setShowToast] = useState(false);
  let [txtMsg, setTxtMsg] = useState<string>('');
  let [timer, setTimer] = useState<number>(5000);
  let [positionToast, setPositionToast] = useState<'top' | 'bottom' | 'center'>(
    'center',
  );
  let show = ({txt, position, duration = 5000}: Iprops): undefined => {
    setShowToast(true);
    setTimer(duration);
    setTxtMsg(txt);
    setPositionToast(position ?? 'center');
    let key = setTimeout(() => {
      setShowToast(false);
      clearTimeout(key);
    }, timer);
  };
  useImperativeHandle(ToastRef, () => ({
    show,
  }));

  let $positionStyle = {
    marginTop: positionToast === 'top' ? insets.top : 0,
    marginBottom: positionToast === 'bottom' ? insets.bottom : 0,
    ...(positionToast === 'top'
      ? styles.top
      : positionToast === 'bottom'
      ? styles.bottom
      : styles.center),
  };

  let $toastStyle = [styles.main, $positionStyle];

  return (
    <>
      {showToast && (
        <View style={$toastStyle}>
          <HeadingApp size="xs" style={{color: '#FFF'}}>
            {txtMsg}
          </HeadingApp>
        </View>
      )}
    </>
  );
});

export default Toast;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    padding: 6,
    backgroundColor: 'rgba(0,0,0,.8)',
    borderRadius: 4,
    alignSelf: 'center',
    zIndex: 99999999,
    overflow: 'hidden',
  },
  bottom: {
    bottom: 0,
  },
  top: {
    top: 0,
  },
  center: {
    top: height / 2,
  },
});
