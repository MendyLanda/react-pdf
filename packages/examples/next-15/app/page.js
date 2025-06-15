'use client';

import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  Text,
} from '@rpdf/renderer';

export default function Home() {
  const doc = (
    <Document>
      <Page
        style={{
          padding: 40,
          paddingTop: 32,
        }}
      >
        <Text>Hello world from client</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFViewer className="w-full h-svh">{doc}</PDFViewer>

      <PDFDownloadLink document={doc}>Download</PDFDownloadLink>
    </div>
  );
}
