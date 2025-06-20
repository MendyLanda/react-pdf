import React from 'react';
import { Document, Page, View } from '@rpdf/renderer';

const Box = ({ origin }) => (
  <View
    debug
    style={{
      margin: 5,
      width: 80,
      height: 80,
      transformOrigin: origin,
    }}
  />
);

const TransformOrigin = () => {
  return (
    <Document>
      <Page style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        <Box origin="left" />
        <Box origin="center" />
        <Box origin="right" />
        <Box origin="top" />
        <Box origin="bottom" />
        <Box origin={10} />
        <Box origin="10 10" />
        <Box origin="top left" />
        <Box origin="left top" />
        <Box origin="top right" />
        <Box origin="right top" />
        <Box origin="top center" />
        <Box origin="center top" />
        <Box origin="center center" />
        <Box origin="center bottom" />
        <Box origin="bottom center" />
        <Box origin="bottom left" />
        <Box origin="left bottom" />
        <Box origin="bottom right" />
        <Box origin="right bottom" />
        <Box origin="10 bottom" />
        <Box origin="bottom 10" />
        <Box origin="top 10" />
        <Box origin="10 top" />
        <Box origin="left 10" />
        <Box origin="10mm 1in" />
      </Page>
    </Document>
  );
};

export default {
  id: 'transform-origin',
  name: 'Transform Origin',
  description: '',
  Document: TransformOrigin,
};
