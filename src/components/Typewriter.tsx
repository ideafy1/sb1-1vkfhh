import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const message = "Hello! This is kuchi puchi from the macro world having macro issues. I havee never iimagined having so real, so rare, so cute, so handsome, so sexy, so everything person in my life. Talking to you after so long on 12th july, I never imagined being this close to you. Thank you for making me strong, Thank you for making me laugh, Thank you for making me realise who i am, Thank you for being an important part of my life, Thank you for everything you have done for me. happppyyyy birthdayyyyyyyyy I LOVE YOU❤️";

export default function Typewriter() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentChar = 0;
    
    const typing = setInterval(() => {
      if (currentChar < message.length) {
        setText(prev => prev + message[currentChar]);
        currentChar++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursor);
    };
  }, []);

  return (
    <div className="relative font-serif text-lg md:text-xl leading-relaxed text-pink-900">
      {text}
      {showCursor && (
        <Heart className="inline-block ml-1 text-red-500 animate-pulse" size={24} />
      )}
    </div>
  );
}