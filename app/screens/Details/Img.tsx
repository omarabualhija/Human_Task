import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES, width} from '../../common';
type Iprops = {
  poster: string;
};
const Img = ({poster}: Iprops) => {
  return (
    <Image
      defaultSource={IMAGES.shared.defaultPoster}
      source={
        poster?.includes('N/A') ? IMAGES.shared.defaultPoster : {uri: poster}
      }
      style={{
        width: width,
        height: width,
        resizeMode: 'contain',
        borderRadius: 15,
      }}
    />
  );
};

export default Img;

const styles = StyleSheet.create({});
