import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export const ImageIcon = () => {
  return <Image style={styles.icon} source={require('./image-gallery.png')} />;
};

export const CameraIcon = () => {
  return <Image style={styles.icon} source={require('./photo-camera.png')} />;
};
