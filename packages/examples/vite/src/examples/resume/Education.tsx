import React from 'react';
import { Text, View, StyleSheet } from '@rpdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const Education = () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>Jedi Academy</Text>
    <Text style={styles.degree}>Jedi Master</Text>
    <Text style={styles.candidate}>A long, long time ago</Text>
  </View>
);

export default Education;
