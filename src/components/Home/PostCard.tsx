import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UserPostType } from '../../constants/types';
import { ms, s } from '../../utils/scale';
import { Fonts } from '../../constants/fonts';

const PostCard = ({ body, title }: UserPostType) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.hr} />
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: s(16),
    borderRadius: s(16),
    gap: s(12),

    shadowColor: '#5fb7ffff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: {
    fontFamily: Fonts.INTER.bold,
    fontSize: ms(20),
    color: '#000000',
  },
  hr: {
    borderBottomWidth: s(1),
    borderBottomColor: '#868686ff',
  },
  body: {
    fontFamily: Fonts.INTER.medium,
    fontSize: ms(16),
    color: '#000000',
  },
});
