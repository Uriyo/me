// components/CustomCursor.tsx
"use client"
import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundImage: 'url(https://cdn.custom-cursor.com/db/cursor/pointer_26.png)', // Your cursor image path
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default CustomCursor;


