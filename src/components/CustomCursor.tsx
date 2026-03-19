import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [role="button"], input, textarea, select, [data-clickable]'));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[10000] rounded-full border-2 transition-all duration-150"
        style={{
          left: pos.x - (hovering ? 10 : 15),
          top: pos.y - (hovering ? 10 : 15),
          width: hovering ? 20 : 30,
          height: hovering ? 20 : 30,
          borderColor: hovering ? '#00F5FF' : '#00FF41',
          animation: 'spin 4s linear infinite',
        }}
      />
      <div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          left: pos.x - 2,
          top: pos.y - 2,
          width: 4,
          height: 4,
          backgroundColor: '#00FF41',
        }}
      />
    </>
  );
};

export default CustomCursor;
