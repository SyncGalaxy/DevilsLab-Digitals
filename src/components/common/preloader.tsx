"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onLoaded: () => void;
}

export default function Preloader({ onLoaded }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Guard every ref — if any is missing, bail out and unblock the page
    if (
      !preloaderRef.current ||
      !textRef.current ||
      !counterRef.current ||
      !overlayTopRef.current ||
      !overlayBottomRef.current
    ) {
      onLoaded();
      return;
    }

    // Set initial states IMMEDIATELY before any browser paint so Chrome
    // never shows a flash of the text at full opacity
    gsap.set(Array.from(textRef.current.children), { y: 100, opacity: 0 });
    gsap.set(counterRef.current, { opacity: 1 });

    // Counter animation
    const duration = 2;
    const increment = 100 / (duration * 60); // 60fps
    let currentCount = 0;

    const counterInterval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(counterInterval);
      }
      setCounter(Math.floor(currentCount));
    }, 1000 / 60);

    // Snapshot refs so cleanup always has valid values
    const preloaderEl = preloaderRef.current;
    const textEl = textRef.current;
    const counterEl = counterRef.current;
    const overlayTopEl = overlayTopRef.current;
    const overlayBottomEl = overlayBottomRef.current;

    // GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(counterInterval);
        onLoaded();
      },
    });

    tl
      // Animate text in
      .to(Array.from(textEl.children), {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
      })
      // Hold
      .to({}, { duration: 1.5 })
      // Fade out text + counter
      .to([textEl, counterEl], {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power2.in',
      })
      // Slide panels away
      .to(
        overlayTopEl,
        { y: '-100%', duration: 1, ease: 'power4.inOut' },
        '-=0.3'
      )
      .to(
        overlayBottomEl,
        { y: '100%', duration: 1, ease: 'power4.inOut' },
        '-=1'
      )
      // Final fade & hide
      .to(preloaderEl, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          preloaderEl.style.display = 'none';
        },
      });

    return () => {
      clearInterval(counterInterval);
      tl.kill();
    };
  }, [onLoaded]);

  return (
    <div 
      ref={preloaderRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#0a192f' }}
    >
      {/* Top Panel — will-change lets Chrome pre-composite on the GPU */}
      <div 
        ref={overlayTopRef}
        className="absolute top-0 left-0 w-full h-1/2"
        style={{ background: '#0a192f', willChange: 'transform' }}
      />
      
      {/* Bottom Panel */}
      <div 
        ref={overlayBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{ background: '#0a192f', willChange: 'transform' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Text — starts invisible via gsap.set() in useEffect */}
        <div 
          ref={textRef}
          className="overflow-hidden mb-8"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter" style={{ color: '#ffffff' }}>
            DEVILSLAB
          </div>
        </div>

        {/* Counter */}
        <div 
          ref={counterRef}
          className="text-2xl md:text-3xl font-bold tabular-nums"
          style={{ color: '#ffffff99', willChange: 'opacity, transform' }}
        >
          {counter}%
        </div>
      </div>

      {/* Animated line */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-white"
        style={{
          width: `${counter}%`,
          transition: 'width 0.1s linear'
        }}
      />
    </div>
  );
}
