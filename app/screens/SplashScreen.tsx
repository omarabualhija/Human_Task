import {Image, StyleSheet,Animated, View} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {RootStackScreenProps} from '../navigation/types';
 import { IMAGES, width} from '../common';
import { HeadingApp } from '../components';
import { SPACING } from '../theme';
import { delay } from '../utils';
 interface Isplash extends RootStackScreenProps<'Splash'> {}
let DELAY_MS=6000
const SplashScreen: FC<Isplash> = ({navigation}) => {
    let opacityRef=useRef(new Animated.Value(1)).current 
  useEffect(() => {
   handleHideAnimation()

   //In the real project, we will call the init APi instead of the delay function 
   delay(DELAY_MS).then(()=>navigation.replace("Home"))
  }, []);


  let handlediplayAnimation=()=>{
     Animated.timing(opacityRef,{
      toValue:0,
      delay:500,
      duration:500,
      useNativeDriver:true
     }).start(({finished})=>{
      handleHideAnimation()
     })
  }
  let handleHideAnimation=()=>{
     Animated.timing(opacityRef,{
      toValue:1,
      delay:500,
      duration:500,
      useNativeDriver:true
     }).start(({finished})=>{
      handlediplayAnimation()
     })
  }


  return(
<View style={styles.container} >
  <Animated.Image source={IMAGES.logos.transparentLogo} style={[styles.img,{opacity:opacityRef}]} />
</View>
  )
};

export default SplashScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,justifyContent:"center",alignItems:"center"
  },
  img:{
    width:width-SPACING.lg,
    height:80,
    resizeMode:"contain"
  },
  
});
