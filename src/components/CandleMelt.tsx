import React from 'react';

export default function CandleMelt() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 animate-melt bg-gradient-to-b from-pink-200 via-red-100 to-transparent" />
    </div>
  );
}