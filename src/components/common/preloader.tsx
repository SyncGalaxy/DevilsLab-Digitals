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
    if (!preloaderRef.current || !textRef.current || !counterRef.current) return;

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

    // GSAP Timeline - Refokus style
    const tl = gsap.timeline({ 
      onComplete: () => {
        clearInterval(counterInterval);
        onLoaded();
      }
    });

    // Animate text in
    tl.fromTo(textRef.current.children,
      { 
        y: 100,
        opacity: 0
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out'
      }
    )
    // Hold
    .to({}, { duration: 1.5 })
    // Fade out text
    .to([textRef.current, counterRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: 'power2.in'
    })
    // Slide up panels
    .to(overlayTopRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut'
    }, '-=0.3')
    .to(overlayBottomRef.current, {
      y: '100%',
      duration: 1,
      ease: 'power4.inOut'
    }, '-=1')
    // Final cleanup
    .to(preloaderRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      }
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
      {/* Top Panel */}
      <div 
        ref={overlayTopRef}
        className="absolute top-0 left-0 w-full h-1/2"
        style={{ background: '#0a192f' }}
      />
      
      {/* Bottom Panel */}
      <div 
        ref={overlayBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{ background: '#0a192f' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Text */}
        <div 
          ref={textRef}
          className="overflow-hidden mb-8"
        >
          <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter" style={{ color: '#ffffff' }}>
            DEVILSLAB
          </div>
        </div>

        {/* Counter */}
        <div 
          ref={counterRef}
          className="text-2xl md:text-3xl font-bold tabular-nums"
          style={{ color: '#ffffff99' }}
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
