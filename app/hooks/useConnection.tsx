import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useConnection = () => {
  let [isConnected, setIsConnected] = useState<boolean>(true);

  useLayoutEffect(() => {
    (async () => {
      const unsubscribe = NetInfo.addEventListener((state: any) => {
        setIsConnected(state.isConnected);
      });

      // Unsubscribe
      () => unsubscribe();
    })();
  }, []);
  return {isConnected};
};

export default useConnection;

const styles = StyleSheet.create({});
