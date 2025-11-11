"use client";

import { useState, useEffect } from 'react';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
            <div className="text-center">
                {/* Logo Animation */}
                <div className="mb-12 perspective-1000" style={{ perspective: '1000px' }}>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white animate-pulse">
                        DEVILSLAB
                    </h1>
                </div>

                {/* Progress Bar */}
                <div className="w-80 h-1 bg-white/20 relative overflow-hidden">
                    <div 
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <div className="mt-6 text-white font-mono text-2xl font-bold">
                    {progress}%
                </div>

                {/* Loading Text */}
                <div className="mt-4 text-white/50 font-mono text-sm tracking-widest">
                    // INITIALIZING SYSTEMS
                </div>
            </div>

            {/* Geometric decorations */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-white/10 rotate-45" />
        </div>
    );
}
