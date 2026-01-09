import { StyleSheet, View } from 'react-native';
import React from 'react';
import { s } from '../../utils/scale';

const PostLoader = () => {
  return (
    <View style={styles.container}>
      {new Array(10).fill(0).map(() => {
        return <View style={styles.card} />;
      })}
    </View>
  );
};

export default PostLoader;

const styles = StyleSheet.create({
  container: {
    gap: s(16),
  },
  card: {
    height: s(100),
    width: '100%',
    backgroundColor: 'grey',
  },
});
