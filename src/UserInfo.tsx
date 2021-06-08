import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const UserInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={{fontSize: 16}}>Youssouf </Text>
      <Text
        style={{
          color: 'gray',
          fontSize: 16,
        }}>
        youssouf@email.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
  infoContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: 'center',
  },
});
