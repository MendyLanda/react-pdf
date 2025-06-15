import './index.css';

import { PDFViewer } from '@rpdf/renderer';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import EXAMPLES from './examples';

const ExamplesPage = () => {
  const [hash, setHash] = useState(
    window.location.hash.substring(1) || 'page-wrap',
  );

  const index = EXAMPLES.findIndex((example) => example.id === hash);

  useEffect(() => {
    const listener = (event) =>
      setHash(event.target.location.hash.substring(1));

    window.addEventListener('popstate', listener);

    return () => window.removeEventListener('popstate', listener);
  });

  const { Document } = EXAMPLES[index];

  return (
    <main className="flex w-screen h-screen">
      <nav className="bg-slate-100 w-60">
        <ul>
          {EXAMPLES.map((example) => (
            <li
              key={example.id}
              className="flex w-full px-4 py-1 transition-all border-b cursor-pointer hover:bg-slate-200 border-slate-300"
            >
              <a href={`#${example.id}`} className="flex-1">
                {example.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div key={hash} className="flex-1 h-full">
        <PDFViewer showToolbar={false} className="size-full">
          <Document />
        </PDFViewer>
      </div>
    </main>
  );
};

const MOUNT_ELEMENT = document.createElement('div');

document.body.appendChild(MOUNT_ELEMENT);

const root = createRoot(MOUNT_ELEMENT);

root.render(<ExamplesPage />);
