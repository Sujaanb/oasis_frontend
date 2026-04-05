import React from 'react';
import { createRoot } from 'react-dom/client';
import { GenUIProvider } from '../../src/providers/GenUIProvider';
import MessageRenderer from '../../src/components/MessageRenderer';

const sampleMessage = {
  id: '1',
  role: 'assistant',
  content: [
    { type: 'text', value: 'Hello! This is a POC message rendered by the Oasis React SDK.' },
    { type: 'choice', value: ['Yes', 'No', "Maybe"] }
  ]
};

function App() {
  return (
    <GenUIProvider config={{ endpoint: 'https://example.com' }}>
      <div style={{ padding: 20 }}>
        <h1>Oasis React SDK Example</h1>
        <MessageRenderer message={sampleMessage as any} />
      </div>
    </GenUIProvider>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
