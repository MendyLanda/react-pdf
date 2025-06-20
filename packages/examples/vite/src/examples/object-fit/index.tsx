import React from 'react';
import { Document, Page, View, Image, Text, StyleSheet } from '@rpdf/renderer';

const styles = StyleSheet.create({
  image: {
    objectFit: 'contain',
    objectPosition: '0%',
    width: '100%',
    height: '100%',
  },
  surrounding: {
    width: '200pt',
    height: '200pt',
    border: '1px solid red',
    backgroundColor: 'tomato',
    marginBottom: '10',
  },
});

const ObjectFit = () => (
  <Document>
    <Page>
      <View style={styles.surrounding}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
          style={styles.image}
        />
        <Text style={{ textDecoration: 'none' }}>Object Fit Contain</Text>
      </View>
      <View style={styles.surrounding}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
          style={[styles.image, { objectFit: 'cover' }]}
        />
        <Text>Object Fit: Auto</Text>
      </View>
      <View style={styles.surrounding}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
          style={[styles.image, { objectFit: 'none' }]}
        />
        <Text>Object Fit: None</Text>
      </View>
    </Page>
  </Document>
);

export default {
  id: 'object-fit',
  name: 'Object Fit',
  description: '',
  Document: ObjectFit,
};
