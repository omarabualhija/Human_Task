import {Dimensions, I18nManager, Platform} from 'react-native';

export let {width, height} = Dimensions.get('screen');

export let isRTL = I18nManager.isRTL;
export let isIOS = Platform.OS === 'ios';
