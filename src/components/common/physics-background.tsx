'use client';

import { useEffect, useRef } from 'react';

interface FallingLetter {
    x: number;
    y: number;
    text: string;
    size: number;
    velocity: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
}

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

export default function PhysicsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Tech words that will fall
        const words = ['AI', 'ML', 'GPT', 'LLM', 'DEV', 'LAB', 'NLP', 'DL', 'API', 'UX'];
        const letters: FallingLetter[] = [];

        // Create falling letters - REDUCED from 15 to 6 for cleaner look
        for (let i = 0; i < 6; i++) {
            letters.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                text: words[Math.floor(Math.random() * words.length)],
                size: 250 + Math.random() * 150, // Larger: 250-400px
                velocity: 0.15 + Math.random() * 0.2, // Slower: 0.15-0.35
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.3, // Slower rotation
                opacity: 0.015 + Math.random() * 0.02 // Lower opacity: 1.5-3.5%
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            letters.forEach((letter) => {
                // Update position
                letter.y += letter.velocity;
                letter.rotation += letter.rotationSpeed;

                // Reset if off screen
                if (letter.y > canvas.height + letter.size) {
                    letter.y = -letter.size;
                    letter.x = Math.random() * canvas.width;
                }

                // Draw letter
                ctx.save();
                ctx.translate(letter.x, letter.y);
                ctx.rotate((letter.rotation * Math.PI) / 180);
                ctx.font = `900 ${letter.size}px Inter, sans-serif`;
                ctx.fillStyle = colors.navy;
                ctx.globalAlpha = letter.opacity;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(letter.text, 0, 0);
                ctx.restore();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
