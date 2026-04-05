import React from 'react';
import type { LLMMessage } from '../types';

export const MessageRenderer: React.FC<{ message: LLMMessage }> = ({ message }) => {
  return (
    <div role="article" aria-label={`message-${message.id}`} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: '#666' }}>{message.role}</div>
      <div style={{ marginTop: 8 }}>
        {message.content.map((item, idx) => {
          if (item.type === 'text') return <p key={idx} style={{ margin: '6px 0' }}>{item.value}</p>;
          if (item.type === 'image') return <img key={idx} src={item.value} alt="message-image" style={{ maxWidth: '100%' }} />;
          if (item.type === 'choice') return (
            <div key={idx}>
              {Array.isArray(item.value) ? item.value.map((c: string, i: number) => (
                <button key={i} style={{ marginRight: 6 }}>{c}</button>
              )) : null}
            </div>
          );
          return null;
        })}
      </div>
    </div>
  );
};

export default MessageRenderer;
