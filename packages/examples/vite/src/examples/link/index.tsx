import React from 'react';
import { Document, Page, Link, Text, View } from '@rpdf/renderer';

const LinkExample = () => (
  <Document>
    <Page>
      <Link src="https://google.com">Some text link</Link>

      <Link src="https://google.com">
        Some <Text style={{ backgroundColor: 'red' }}>stylized</Text> text link
      </Link>

      <Link src="https://google.com">
        <Text>
          Some <Text style={{ backgroundColor: 'red' }}>stylized</Text> text
          link
        </Text>
      </Link>

      <Link src="https://google.com">
        <View style={{ width: 40, height: 40, backgroundColor: 'red' }} />
      </Link>
    </Page>
  </Document>
);

export default {
  id: 'link',
  name: 'Link',
  description: '',
  Document: LinkExample,
};
