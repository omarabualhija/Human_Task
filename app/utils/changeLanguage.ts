import {I18nManager} from 'react-native';

import RNRestart from 'react-native-restart';
import {loadString, saveString} from './storage';
import {AsyncStorageKey} from '../common';
import i18next from '../I18n';
('../common/constant');
export let handleChangeLanguage = async (
  reset: boolean,
  currentLang?: string,
) => {
  let lang = await loadString(AsyncStorageKey.Lang);

  if (lang) {
    if (lang === 'ar') {
      I18nManager.allowRTL(reset ? false : true);
      I18nManager.forceRTL(reset ? false : true);
      await saveString(AsyncStorageKey.Lang, reset ? 'en' : 'ar');
      i18next.changeLanguage(reset ? 'en' : 'ar');
    } else {
      I18nManager.allowRTL(reset ? true : false);
      I18nManager.forceRTL(reset ? true : false);
      await saveString(AsyncStorageKey.Lang, reset ? 'ar' : 'en');
      i18next.changeLanguage(reset ? 'ar' : 'en');
    }
  } else if (currentLang == 'en') {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    await saveString(AsyncStorageKey.Lang, 'en');
    //await i18next.changeLanguage('en');
  } else {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    await saveString(AsyncStorageKey.Lang, 'ar');
    // await i18next.changeLanguage('ar');
  }

  if (reset) {
    setTimeout(() => {
      RNRestart.restart();
    }, 200);
  }
};
