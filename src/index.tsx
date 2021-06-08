import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Avatar} from './Avatar';
import {UserInfo} from './UserInfo';

export const Profile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
  };
  return (
    <View style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userRow}>
        <Avatar
          onChange={onAvatarChange}
          source={require('./avatar-placeholder.png')}
        />
        <UserInfo />
      </View>
      <View style={styles.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    alignItems: 'center',
    padding: 15,
    marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
});
