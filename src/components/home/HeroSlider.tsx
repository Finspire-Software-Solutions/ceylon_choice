import { useEffect, useRef, useState } from 'react';
import HeroSlide from './HeroSlide';
import { heroSlides } from '@/data/heroSlides';
import { Button } from '@/components/ui/button';

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(0);
  const [deltaX, setDeltaX] = useState(0);

  useEffect(() => {
    if (hover || dragging) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [hover, dragging]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    startXRef.current = e.clientX;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDeltaX(e.clientX - startXRef.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    const threshold = 60;
    if (deltaX > threshold) setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
    else if (deltaX < -threshold) setIndex((i) => (i + 1) % heroSlides.length);
    setDragging(false);
    setDeltaX(0);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="overflow-hidden touch-pan-y select-none"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(calc(-${index * 100}% + ${deltaX}px))` }}
      >
        {heroSlides.map((s, i) => (
          <div key={i} className="min-w-full">
            <HeroSlide {...s} />
          </div>
        ))}
      </div>
      <div className="mt-3 md:mt-4 flex items-center justify-center gap-1.5 sm:gap-2">
        {heroSlides.map((_, i) => (
          <Button
            key={i}
            variant={index === i ? 'default' : 'outline'}
            size="icon"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full p-0 min-w-0 touch-manipulation"
          />
        ))}
      </div>
    </div>
  );
}