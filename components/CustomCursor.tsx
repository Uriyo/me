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
      className="fixed pointer-events-none z-50 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundImage: 'url(https://res.cloudinary.com/doyqpfgiq/image/upload/v1737873719/folioassets/customcursor_beywd3.webp)', // Your cursor image path
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default CustomCursor;


