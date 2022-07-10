import React from 'react';

export default function TodoItem({ text, completed, onClick }: any) {
  return (
    <div
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
  );
}
