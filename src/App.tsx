import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import Typewriter from './components/Typewriter';
import CandleMelt from './components/CandleMelt';

function App() {
  const [showSecondInterface, setShowSecondInterface] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowSecondInterface(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSecondInterface) {
        setShowHearts(true);
      }
    }, 35000); // Start showing hearts near the end of typing

    return () => clearTimeout(timer);
  }, [showSecondInterface]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 relative overflow-hidden">
      <audio ref={audioRef} loop>
        <source src="https://dnb6aguatjtbl.cloudfront.net/c74neh%2Ffile%2Fdf534c78cfba4b6c628933a4d0b2d1bd_9d143457cb145434f9cecafac716cb8c.mp3?response-content-disposition=inline%3Bfilename%3D%22df534c78cfba4b6c628933a4d0b2d1bd_9d143457cb145434f9cecafac716cb8c.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1730838290&Signature=h1qF3BqyVlAKwbkRXTHmJg2vepljl3yvUeII06qPJW7cjVU9Yc4Aug0UAgt9rwJZxAUjvv6PI7qEOqKxleUjrrypsQ6MjzMxN7xNI6tagtFa2WUYRqloOnbcuR1AyA~cjcyrUIidqjqoKcpWcvI1bt4-yBTbthRjNbsF5HfGS9AieEqHvdiz0UZf53SIiSyq29Jgb~EFhG8cMVZa6F7xNn69FF01M~g-56uZOv7KlN72AwEVXErPblYbOi-gnEgJOxvdAFgvqzA-UfaDv-zx-dz1xYwgrbxUuESr3tLzyeiqFB8YBmzwVq0j5sAu7wPlydl59gnBFQgzvWf48IcjPg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" type="audio/mpeg" />
      </audio>

      {!showSecondInterface ? (
        <div className="flex items-center justify-center min-h-screen">
          <button
            onClick={handleClick}
            className="text-4xl md:text-6xl font-bold text-red-600 hover:text-red-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Happy birthday my love
          </button>
        </div>
      ) : (
        <>
          <CandleMelt />
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
              <Typewriter />
            </div>
          </div>
          {showHearts && <FloatingHearts />}
        </>
      )}
    </div>
  );
}

function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="absolute animate-float text-pink-500"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: 0.6 + Math.random() * 0.4,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
          }}
        />
      ))}
    </div>
  );
}

export default App;