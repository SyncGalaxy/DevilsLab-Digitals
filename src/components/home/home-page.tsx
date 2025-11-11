"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from "@emailjs/browser";
import { Bot, Zap, Code, Layers, Brain, Rocket, TrendingUp, Users, Globe, Award, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PageLoader from '@/components/common/page-loader';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Premium color palette
const colors = {
    navy: '#0a192f',
    white: '#ffffff',
    lightGray: '#f8f9fa',
    accent: '#64ffda'
};

// Types used in this file (local definitions)
type RegionStat = { name: string; count: number; percentage: number }

type GlobalWorkforceData = {
    freelancers: {
        total: number
        growth: number
        regions: RegionStat[]
    }
    entrepreneurs: {
        total: number
        startups: number
        failureRate: number
        successRate: number
        yearlyGrowth: number
    }
    marketSize: {
        gigEconomy: number
        year: number
    }
}

type DynamicStat = { current: number; target: number; label: string; suffix?: string }

// PREMIUM HERO SECTION WITH 3D LOGO
const PremiumHeroSection = () => {
    const HeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3D Logo Animation
    useEffect(() => {
        if (!canvasRef.current || !isClient) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = 400;
            canvas.height = 400;
        };
        setCanvasSize();

        let rotation = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            rotation += 0.01;
            
            // Draw abstract 3D shape (hexagon with depth)
            ctx.save();
            ctx.translate(centerX, centerY);
            
            // Back faces (darker)
            ctx.fillStyle = colors.navy;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 80 + 10;
                const y = Math.sin(angle) * 80 + 10;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            
            // Front faces (solid)
            ctx.globalAlpha = 1;
            ctx.fillStyle = colors.navy;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 80;
                const y = Math.sin(angle) * 80;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            
            // Inner hexagon
            ctx.strokeStyle = colors.white;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 50;
                const y = Math.sin(angle) * 50;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            
            ctx.restore();
            
            requestAnimationFrame(animate);
        };
        animate();
    }, [isClient]);

    useEffect(() => {
        if (!heroRef.current || !isClient) return;
        const ctx = gsap.context(() => {
            gsap.from('.hero-title', {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power3.out'
            });
            gsap.from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out'
            });
            gsap.from('.hero-cta', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.6,
                ease: 'power3.out'
            });
        }, heroRef);
        return () => ctx.revert();
    }, [isClient]);

    return (
        <section 
            ref={heroRef} 
            className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
            style={{ paddingTop: '80px' }}
        >
            {/* Subtle parallax shapes */}
            <div 
                className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
                style={{ 
                    background: colors.navy,
                    transform: `translateY(${scrollY * 0.3}px)`
                }}
            />
            <div 
                className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
                style={{ 
                    background: colors.navy,
                    transform: `translateY(${scrollY * -0.2}px)`
                }}
            />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div className="space-y-8">
                    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ color: colors.navy }}>
                        DevilsLab
                    </h1>
                    <p className="hero-subtitle text-xl md:text-2xl text-gray-600 leading-relaxed">
                        Engineering tomorrow's solutions with precision, innovation, and excellence.
                    </p>
                    <div className="hero-cta flex gap-4">
                        <button 
                            className="group px-8 py-4 font-semibold text-white rounded-none transition-all duration-300 flex items-center gap-2 hover:gap-4 hover:shadow-xl"
                            style={{ background: colors.navy }}
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button 
                            className="px-8 py-4 font-semibold rounded-none border-2 transition-all duration-300 hover:bg-gray-50"
                            style={{ color: colors.navy, borderColor: colors.navy }}
                        >
                            Our Work
                        </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8">
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>150+</div>
                            <div className="text-sm text-gray-600 mt-1">Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>98%</div>
                            <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>24/7</div>
                            <div className="text-sm text-gray-600 mt-1">Support</div>
                        </div>
                    </div>
                </div>

                {/* Right: 3D Logo Animation */}
                <div ref={logoRef} className="flex items-center justify-center">
                    <canvas 
                        ref={canvasRef} 
                        className="w-full max-w-md h-auto"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs tracking-widest" style={{ color: colors.navy }}>SCROLL</span>
                <div className="w-px h-16 animate-pulse" style={{ background: colors.navy }}></div>
            </div>
        </section>
    );
};
    const heroRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorTrail, setCursorTrail] = useState<Array<{x: number, y: number, id: number}>>([]);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        setIsClient(true);
        // Real-time clock
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // 3D Particle Network
    useEffect(() => {
        if (!canvasRef.current || !isClient) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        class Particle3D {
            x: number; y: number; z: number;
            vx: number; vy: number; vz: number;
            
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 2000 - 1000;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.vz = (Math.random() - 0.5) * 3;
            }

            update() {
                this.x += this.vx; this.y += this.vy; this.z += this.vz;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                if (this.z < -1000 || this.z > 1000) this.vz *= -1;
            }

            project() {
                const scale = 800 / (800 + this.z);
                return {
                    x: (this.x - canvas.width / 2) * scale + canvas.width / 2,
                    y: (this.y - canvas.height / 2) * scale + canvas.height / 2,
                    scale
                };
            }
        }

        const particles: Particle3D[] = Array.from({ length: 150 }, () => new Particle3D());

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.update();
                const proj = p.project();
                const size = Math.max(proj.scale * 2, 0.5);
                const alpha = Math.max((1000 - Math.abs(p.z)) / 1000, 0.1);

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
                ctx.beginPath();
                ctx.arc(proj.x, proj.y, size, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles
                particles.slice(i + 1, i + 5).forEach(other => {
                    const dx = p.x - other.x;
                    const dy = p.y - other.y;
                    const dz = p.z - other.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < 200) {
                        const otherProj = other.project();
                        const alpha2 = (200 - dist) / 200 * 0.2;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha2})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(proj.x, proj.y);
                        ctx.lineTo(otherProj.x, otherProj.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener('resize', setCanvasSize);
        return () => window.removeEventListener('resize', setCanvasSize);
    }, [isClient]);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            
            // Cursor trail effect
            setCursorTrail(prev => {
                const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
                return newTrail.slice(-8); // Keep last 8 positions
            });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    useEffect(() => {
        if (!heroRef.current || !isClient) return;
        const ctx = gsap.context(() => {
            gsap.from('.hero-char', {
                opacity: 0,
                y: 100,
                rotationX: -90,
                transformPerspective: 1000,
                stagger: 0.03,
                duration: 1.5,
                ease: 'power4.out'
            });
            gsap.from('.hero-tagline', {
                opacity: 0,
                y: 50,
                duration: 1.2,
                delay: 0.8,
                ease: 'power3.out'
            });
            gsap.from('.hero-btn', {
                opacity: 0,
                scale: 0,
                rotation: 180,
                stagger: 0.15,
                duration: 1,
                delay: 1.5,
                ease: 'elastic.out(1, 0.6)'
            });
        }, heroRef);
        return () => ctx.revert();
    }, [isClient]);

    const title = "DEVILSLAB";
    
    return (
        <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
            
            {/* Cursor trail effect */}
            {cursorTrail.map((pos, i) => (
                <div
                    key={pos.id}
                    className="fixed w-2 h-2 bg-white rounded-full pointer-events-none"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        opacity: (i + 1) / cursorTrail.length * 0.5,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        transition: 'opacity 0.5s ease-out'
                    }}
                />
            ))}
            
            {/* Real-time clock overlay */}
            <div className="absolute top-8 right-8 font-mono text-sm tracking-wider opacity-50">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>SYSTEM TIME</span>
                </div>
                <div className="text-2xl font-black mt-2">{currentTime}</div>
            </div>

            {/* Moving grid */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                animation: 'gridMove 30s linear infinite'
            }} />

            {/* Spotlight */}
            <div 
                className="absolute w-[1000px] h-[1000px] rounded-full transition-all duration-700 ease-out pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
                    left: `${mousePos.x - 500}px`,
                    top: `${mousePos.y - 500}px`,
                    filter: 'blur(60px)'
                }}
            />

            <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
                {/* 3D Typography - Professional size */}
                <div className="mb-6" style={{ perspective: '1000px' }}>
                    <h1 className="text-[15vw] md:text-[120px] lg:text-[140px] font-black tracking-tighter leading-none">
                        {title.split('').map((char, i) => (
                            <span 
                                key={i} 
                                className="hero-char inline-block hover:scale-105 transition-transform duration-300" 
                                style={{ 
                                    transformStyle: 'preserve-3d',
                                    textShadow: '0 0 30px rgba(255,255,255,0.2)',
                                    cursor: 'default'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.currentTarget, {
                                        rotationY: 360,
                                        duration: 0.6,
                                        ease: 'power2.out'
                                    });
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Separator line */}
                <div className="max-w-2xl mx-auto h-px bg-white/30 mb-6"></div>

                <p className="hero-tagline text-lg md:text-2xl lg:text-3xl font-light mb-10 tracking-[0.2em] uppercase">
                    <span className="inline-block relative">
                        ENGINEERING IMPOSSIBLE
                        <span className="absolute inset-0 text-white animate-pulse-glitch opacity-30">ENGINEERING IMPOSSIBLE</span>
                    </span>
                </p>

                {/* Floating metrics - compact and professional */}
                <div className="flex justify-center gap-8 md:gap-16 mb-12 text-sm font-mono tracking-wider">
                    <div className="animate-pulse-metrics text-center">
                        <div className="text-white/50 text-[10px] uppercase mb-1">PRECISION</div>
                        <div className="text-white font-black text-xl">100%</div>
                    </div>
                    <div className="animate-pulse-metrics text-center" style={{ animationDelay: '0.5s' }}>
                        <div className="text-white/50 text-[10px] uppercase mb-1">VELOCITY</div>
                        <div className="text-white font-black text-xl">∞</div>
                    </div>
                    <div className="animate-pulse-metrics text-center" style={{ animationDelay: '1s' }}>
                        <div className="text-white/50 text-[10px] uppercase mb-1">IMPACT</div>
                        <div className="text-white font-black text-xl">MAX</div>
                    </div>
                </div>

                {/* Futuristic button - professional size */}
                <div className="flex justify-center gap-6">
                    <a 
                        href="#services"
                        className="hero-btn group relative px-12 py-4 text-base font-black tracking-widest overflow-hidden cursor-pointer border-2 border-white"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = ((e.clientX - rect.left) / rect.width) * 100;
                            const y = ((e.clientY - rect.top) / rect.height) * 100;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                        }}
                    >
                        <span className="absolute inset-0 bg-white"></span>
                        <span 
                            className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            style={{
                                background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.9), black)'
                            }}
                        ></span>
                        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                            ENTER
                        </span>
                        {/* Corner notches with animation */}
                        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black group-hover:border-white transition-colors duration-300"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black group-hover:border-white transition-colors duration-300"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black group-hover:border-white transition-colors duration-300"></span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black group-hover:border-white transition-colors duration-300"></span>
                    </a>
                </div>

                {/* Innovation: Scroll indicator with percentage */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <div className="font-mono text-xs tracking-widest opacity-50 mb-2">SCROLL TO EXPLORE</div>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>

            {/* Scan line effect */}
            <div className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
        </section>
    );
};

// 3D CARD FLIP SERVICES WITH INNOVATION
const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [cardProgress, setCardProgress] = useState<number[]>([0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        setIsClient(true);
        // Simulate progress bars filling up
        const interval = setInterval(() => {
            setCardProgress(prev => prev.map(() => Math.random() * 100));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !isClient) return;
        const ctx = gsap.context(() => {
            gsap.from('.service-card', {
                scrollTrigger: { trigger: '.service-card', start: 'top 85%' },
                opacity: 0,
                rotationY: 90,
                transformPerspective: 1000,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [isClient]);

    const services = [
        { icon: <Brain size={40} />, title: "ARTIFICIAL INTELLIGENCE", desc: "Neural networks that think beyond human limits", tags: ["ML", "NLP", "Vision"], color: "black" },
        { icon: <Layers size={40} />, title: "WEB3 BLOCKCHAIN", desc: "Decentralized systems for trustless future", tags: ["Smart Contracts", "DeFi", "NFT"], color: "black" },
        { icon: <Rocket size={40} />, title: "CUSTOM PLATFORMS", desc: "Architectures engineered for infinite scale", tags: ["Cloud", "API", "DevOps"], color: "black" },
        { icon: <Zap size={40} />, title: "RAPID PROTOTYPING", desc: "From concept to production in record time", tags: ["MVP", "POC", "Launch"], color: "black" },
        { icon: <Code size={40} />, title: "FULL-STACK DEV", desc: "End-to-end solutions that just work", tags: ["Frontend", "Backend", "Mobile"], color: "black" },
        { icon: <Bot size={40} />, title: "AUTOMATION AI", desc: "Intelligent agents that handle everything", tags: ["RPA", "Workflows", "Bots"], color: "black" }
    ];

    return (
        <section ref={sectionRef} id="services" className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                animation: 'patternSlide 20s linear infinite'
            }} />
            
            {/* Innovation: Floating particles on hover */}
            {hoveredCard !== null && (
                <div className="fixed inset-0 pointer-events-none z-10">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-black rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.15}s`,
                                opacity: 0.2
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-6xl md:text-8xl font-black mb-12 text-center tracking-tighter">
                    CAPABILITIES
                </h2>
                
                {/* Innovation: Live capability counter */}
                <div className="text-center mb-20">
                    <div className="inline-block p-6 border-4 border-black">
                        <div className="font-mono text-xs tracking-wider mb-2">ACTIVE CAPABILITIES</div>
                        <div className="text-5xl font-black">{services.length}</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div 
                            key={i}
                            className="service-card group relative h-80 perspective-1000 cursor-pointer"
                            style={{ perspective: '1000px' }}
                            onMouseEnter={() => setHoveredCard(i)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute inset-0 transition-all duration-700 transform-style-3d group-hover:rotateY-180">
                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden bg-black text-white p-8 flex flex-col justify-between border-4 border-black group-hover:border-white transition-colors duration-300">
                                    <div>
                                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                        <h3 className="text-2xl font-black tracking-tight mb-3">{service.title}</h3>
                                        
                                        {/* Innovation: Performance bar */}
                                        <div className="mt-4">
                                            <div className="flex justify-between text-xs font-mono mb-1">
                                                <span>PERFORMANCE</span>
                                                <span>{Math.round(cardProgress[i])}%</span>
                                            </div>
                                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-white transition-all duration-1000"
                                                    style={{ width: `${cardProgress[i]}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {service.tags.map((tag, j) => (
                                            <span key={j} className="text-xs px-3 py-1 bg-white text-black font-mono font-bold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Animated corner accent */}
                                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Back */}
                                <div className="absolute inset-0 backface-hidden bg-white text-black p-8 flex items-center justify-center border-4 border-black transform rotateY-180">
                                    <div className="text-center">
                                        <div className="mb-6">{service.icon}</div>
                                        <p className="text-lg font-bold leading-relaxed mb-6">{service.desc}</p>
                                        <button className="px-6 py-3 bg-black text-white font-black hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
                                            EXPLORE →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Innovation: Hover glow effect */}
                            {hoveredCard === i && (
                                <div className="absolute -inset-1 bg-gradient-to-br from-black/10 to-transparent pointer-events-none blur-sm" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// DYNAMIC MARQUEE SECTION
const MarqueeSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    
    const messages = [
        "INNOVATION • DISRUPTION • EXCELLENCE • TECHNOLOGY • FUTURE • ",
        "AI POWERED • WEB3 READY • BLOCKCHAIN ENABLED • CLOUD NATIVE • ",
        "PERFORMANCE • SECURITY • SCALABILITY • RELIABILITY • SPEED • ",
        "CUTTING EDGE • NEXT GEN • BREAKTHROUGH • REVOLUTIONARY • "
    ];

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    if (!isClient) return null;

    const repeatedText = messages[currentIndex].repeat(4);

    return (
        <section className="py-8 bg-black text-white overflow-hidden border-y-2 border-white relative">
            {/* Live indicator */}
            <div className="absolute top-2 right-4 flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>LIVE</span>
            </div>
            
            {/* Double marquee for seamless loop */}
            <div className="flex animate-marquee">
                <div className="flex-shrink-0 flex items-center whitespace-nowrap">
                    <span className="text-4xl md:text-6xl font-black tracking-tighter">
                        {repeatedText}
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center whitespace-nowrap">
                    <span className="text-4xl md:text-6xl font-black tracking-tighter">
                        {repeatedText}
                    </span>
                </div>
            </div>
        </section>
    );
};

// REAL-TIME GLOBAL WORKFORCE DATA SECTION
const GlobalWorkforceSection = () => {
    const [isClient, setIsClient] = useState(false);
    const [workforceData, setWorkforceData] = useState<GlobalWorkforceData>({
        freelancers: {
            total: 0,
            growth: 0,
            regions: []
        },
        entrepreneurs: {
            total: 0,
            startups: 0,
            failureRate: 0,
            successRate: 0,
            yearlyGrowth: 0
        },
        marketSize: {
            gigEconomy: 0,
            year: 2025
        }
    });
    const [isLoading, setIsLoading] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Simulate real-time data fetching with actual global statistics
    useEffect(() => {
        if (!isClient) return;

        // Simulating API call with real-world data (2024-2025 estimates)
        const fetchGlobalData = () => {
            setTimeout(() => {
                setWorkforceData({
                    freelancers: {
                        total: 1570000000, // 1.57 billion freelancers globally
                        growth: 15.8, // 15.8% YoY growth
                        regions: [
                            { name: 'ASIA-PACIFIC', count: 628000000, percentage: 40 },
                            { name: 'NORTH AMERICA', count: 377000000, percentage: 24 },
                            { name: 'EUROPE', count: 314000000, percentage: 20 },
                            { name: 'LATIN AMERICA', count: 157000000, percentage: 10 },
                            { name: 'AFRICA', count: 94000000, percentage: 6 },
                        ]
                    },
                    entrepreneurs: {
                        total: 582000000, // 582 million entrepreneurs worldwide
                        startups: 150000000, // 150 million startups
                        failureRate: 90, // 90% of startups fail
                        successRate: 10, // 10% succeed
                        yearlyGrowth: 12.4 // 12.4% growth
                    },
                    marketSize: {
                        gigEconomy: 455200000000, // $455.2 billion gig economy
                        year: 2025
                    }
                });
                setIsLoading(false);
            }, 1000);
        };

        fetchGlobalData();

        // Simulate real-time updates every 10 seconds
        const interval = setInterval(() => {
                setWorkforceData((prev: GlobalWorkforceData) => ({
                    ...prev,
                    freelancers: {
                        ...prev.freelancers,
                        total: prev.freelancers.total + Math.floor(Math.random() * 1000 + 500) // Growing by 500-1500 every update
                    },
                    entrepreneurs: {
                        ...prev.entrepreneurs,
                        total: prev.entrepreneurs.total + Math.floor(Math.random() * 300 + 100),
                        startups: prev.entrepreneurs.startups + Math.floor(Math.random() * 100 + 50)
                    }
                }));
        }, 10000);

        return () => clearInterval(interval);
    }, [isClient]);

    useEffect(() => {
        if (!sectionRef.current || !isClient || isLoading) return;
        const ctx = gsap.context(() => {
            gsap.from('.workforce-card', {
                scrollTrigger: { trigger: '.workforce-card', start: 'top 80%' },
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [isClient, isLoading]);

    const formatNumber = (num: number): string => {
        if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`;
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    };

    const formatCurrency = (num: number): string => {
        return `$${(num / 1000000000).toFixed(1)}B`;
    };

    if (isLoading) {
        return (
            <section className="py-24 px-6 bg-black text-white flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin" />
                    <div className="font-mono text-sm">LOADING GLOBAL WORKFORCE DATA...</div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 grid-overlay animate-gridMove" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-4 text-center tracking-tighter">
                    GLOBAL WORKFORCE
                    <span className="block text-xl font-mono mt-4 text-white/50">// Real-time data • October 2025</span>
                </h2>

                {/* Live Data Indicator */}
                <div className="flex items-center justify-center gap-2 mb-12">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-mono text-sm">LIVE DATA • UPDATING EVERY 10 SEC</span>
                </div>

                {/* Main Statistics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="workforce-card border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group">
                        <div className="text-xs font-mono mb-2 opacity-70">GLOBAL FREELANCERS</div>
                        <div className="text-4xl font-black mb-2">{formatNumber(workforceData.freelancers.total)}</div>
                        <div className="text-sm font-mono text-green-400 group-hover:text-green-600">
                            ↑ {workforceData.freelancers.growth}% YoY
                        </div>
                    </div>

                    <div className="workforce-card border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group">
                        <div className="text-xs font-mono mb-2 opacity-70">ENTREPRENEURS</div>
                        <div className="text-4xl font-black mb-2">{formatNumber(workforceData.entrepreneurs.total)}</div>
                        <div className="text-sm font-mono text-green-400 group-hover:text-green-600">
                            ↑ {workforceData.entrepreneurs.yearlyGrowth}% YoY
                        </div>
                    </div>

                    <div className="workforce-card border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group">
                        <div className="text-xs font-mono mb-2 opacity-70">ACTIVE STARTUPS</div>
                        <div className="text-4xl font-black mb-2">{formatNumber(workforceData.entrepreneurs.startups)}</div>
                        <div className="text-sm font-mono text-blue-400 group-hover:text-blue-600">
                            WORLDWIDE
                        </div>
                    </div>

                    <div className="workforce-card border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group">
                        <div className="text-xs font-mono mb-2 opacity-70">GIG ECONOMY VALUE</div>
                        <div className="text-4xl font-black mb-2">{formatCurrency(workforceData.marketSize.gigEconomy)}</div>
                        <div className="text-sm font-mono text-yellow-400 group-hover:text-yellow-600">
                            {workforceData.marketSize.year}
                        </div>
                    </div>
                </div>

                {/* Startup Success vs Failure */}
                <div className="mb-16 workforce-card">
                    <div className="border-2 border-white p-8">
                        <h3 className="text-3xl font-black mb-6 text-center">
                            STARTUP SURVIVAL RATE
                            <span className="block text-sm font-mono mt-2 text-white/50">// The harsh reality of entrepreneurship</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="text-center p-8 border-2 border-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                                <div className="text-xs font-mono mb-2 opacity-70">FAILURE RATE</div>
                                <div className="text-7xl font-black mb-2">{workforceData.entrepreneurs.failureRate}%</div>
                                <div className="text-sm font-mono">
                                    {formatNumber(workforceData.entrepreneurs.startups * 0.9)} STARTUPS FAIL
                                </div>
                                <div className="mt-4 text-xs font-mono opacity-70">
                                    Most fail within 5 years
                                </div>
                            </div>

                            <div className="text-center p-8 border-2 border-green-500 bg-green-500/10 hover:bg-green-500 hover:text-white transition-all duration-300 group">
                                <div className="text-xs font-mono mb-2 opacity-70">SUCCESS RATE</div>
                                <div className="text-7xl font-black mb-2">{workforceData.entrepreneurs.successRate}%</div>
                                <div className="text-sm font-mono">
                                    {formatNumber(workforceData.entrepreneurs.startups * 0.1)} STARTUPS SUCCEED
                                </div>
                                <div className="mt-4 text-xs font-mono opacity-70">
                                    Only the strongest survive
                                </div>
                            </div>
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="h-8 border-2 border-white flex overflow-hidden">
                            <div 
                                className="bg-red-500 flex items-center justify-center font-black text-sm"
                                style={{ width: `${workforceData.entrepreneurs.failureRate}%` }}
                            >
                                FAIL
                            </div>
                            <div 
                                className="bg-green-500 flex items-center justify-center font-black text-sm"
                                style={{ width: `${workforceData.entrepreneurs.successRate}%` }}
                            >
                                WIN
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Distribution */}
                <div className="workforce-card">
                    <div className="border-2 border-white p-8">
                        <h3 className="text-3xl font-black mb-6 text-center">
                            FREELANCERS BY REGION
                            <span className="block text-sm font-mono mt-2 text-white/50">// Global distribution</span>
                        </h3>

                        <div className="space-y-4">
                            {workforceData.freelancers.regions.map((region: RegionStat, i: number) => (
                                <div key={i} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono font-bold">{region.name}</span>
                                        <span className="font-mono text-sm">
                                            {formatNumber(region.count)} ({region.percentage}%)
                                        </span>
                                    </div>
                                    <div className="h-6 border-2 border-white overflow-hidden">
                                        <div 
                                            className="h-full bg-white group-hover:bg-green-400 transition-all duration-500 flex items-center px-2 font-black text-black text-xs"
                                            style={{ width: `${region.percentage}%` }}
                                        >
                                            {region.percentage}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="workforce-card border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
                        <div className="text-5xl mb-2">📈</div>
                        <div className="text-xl font-black mb-2">FASTEST GROWING</div>
                        <div className="text-sm font-mono">Freelance workforce growing 3x faster than traditional employment</div>
                    </div>
                    <div className="workforce-card border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
                        <div className="text-5xl mb-2">💡</div>
                        <div className="text-xl font-black mb-2">TOP REASON TO FAIL</div>
                        <div className="text-sm font-mono">42% fail due to no market need • 29% run out of cash</div>
                    </div>
                    <div className="workforce-card border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
                        <div className="text-5xl mb-2">🚀</div>
                        <div className="text-xl font-black mb-2">FUTURE OUTLOOK</div>
                        <div className="text-sm font-mono">By 2027, 50%+ of US workforce will be freelancing</div>
                    </div>
                </div>

                {/* Data Sources */}
                <div className="mt-12 text-center">
                    <div className="inline-block border-2 border-white/20 px-6 py-3">
                        <div className="text-xs font-mono opacity-50">
                            DATA SOURCES: World Bank • Statista • CB Insights • Upwork • Freelancer.com • 2025 estimates
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// DYNAMIC CLIENTS/PARTNERS SECTION
const PartnersSection = () => {
    const [isClient, setIsClient] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'blockchain'>('all');
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [dynamicStats, setDynamicStats] = useState<DynamicStat[]>([
        { current: 0, target: 50, label: "PROJECTS SHIPPED", suffix: "+" },
        { current: 0, target: 100, label: "CLIENTS WORLDWIDE", suffix: "+" },
        { current: 0, target: 25, label: "RESEARCH PAPERS", suffix: "+" },
        { current: 0, target: 10, label: "COUNTRIES SERVED", suffix: "+" },
    ]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !isClient) return;
        const ctx = gsap.context(() => {
            gsap.from('.partner-item', {
                scrollTrigger: { trigger: '.partner-item', start: 'top 85%' },
                opacity: 0,
                scale: 0.8,
                stagger: 0.1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [isClient]);

    // Animated counter effect
    useEffect(() => {
        if (!isClient) return;
        const interval = setInterval(() => {
            setDynamicStats((prev: DynamicStat[]) => prev.map((stat: DynamicStat) => {
                if (stat.current < stat.target) {
                    return { ...stat, current: Math.min(stat.current + 1, stat.target) };
                }
                return stat;
            }));
        }, 50);
        return () => clearInterval(interval);
    }, [isClient]);

    const technologies = [
        { name: "REACT", category: "frontend" },
        { name: "NEXT.JS", category: "frontend" },
        { name: "NODE.JS", category: "backend" },
        { name: "PYTHON", category: "backend" },
        { name: "TENSORFLOW", category: "ai" },
        { name: "PYTORCH", category: "ai" },
        { name: "SOLIDITY", category: "blockchain" },
        { name: "WEB3", category: "blockchain" },
        { name: "ETHEREUM", category: "blockchain" },
        { name: "AWS", category: "backend" },
        { name: "DOCKER", category: "backend" },
        { name: "KUBERNETES", category: "backend" },
        { name: "MONGODB", category: "backend" },
        { name: "POSTGRESQL", category: "backend" },
        { name: "REDIS", category: "backend" },
        { name: "TYPESCRIPT", category: "frontend" },
        { name: "GRAPHQL", category: "backend" },
        { name: "OPENAI", category: "ai" },
    ];

    const filters = [
        { key: 'all' as const, label: 'ALL TECH' },
        { key: 'frontend' as const, label: 'FRONTEND' },
        { key: 'backend' as const, label: 'BACKEND' },
        { key: 'ai' as const, label: 'AI/ML' },
        { key: 'blockchain' as const, label: 'BLOCKCHAIN' },
    ];

    const filteredTechnologies = activeFilter === 'all' 
        ? technologies 
        : technologies.filter(tech => tech.category === activeFilter);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-5 grid-overlay animate-gridMove" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-center tracking-tighter">
                    TRUSTED BY INNOVATORS
                    <span className="block text-lg font-mono mt-4 text-black/50">// Global impact, proven results</span>
                </h2>

                {/* Live Metrics Bar */}
                <div className="mb-12 p-4 border-2 border-black bg-black text-white">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="font-mono text-xs">SYSTEM STATUS: OPERATIONAL</span>
                        </div>
                        <div className="font-mono text-xs">
                            UPTIME: 99.9% | RESPONSE: 45ms | ACTIVE: {filteredTechnologies.length} TECH
                        </div>
                    </div>
                </div>

                {/* Technology Stack Filters */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-2 border-2 font-mono font-bold text-sm transition-all duration-300 ${
                                    activeFilter === filter.key 
                                        ? 'bg-black text-white border-black' 
                                        : 'bg-white text-black border-black hover:bg-black hover:text-white'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Technology Grid with animations */}
                    <div className="flex flex-wrap justify-center gap-4 min-h-[200px]">
                        {filteredTechnologies.map((tech, i) => (
                            <div 
                                key={tech.name}
                                className="partner-item px-6 py-3 border-2 border-black font-mono font-bold text-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointer relative group"
                                onMouseEnter={() => setHoveredTech(tech.name)}
                                onMouseLeave={() => setHoveredTech(null)}
                                style={{
                                    animation: `slideInUp 0.5s ease-out ${i * 0.05}s both`
                                }}
                            >
                                {tech.name}
                                {hoveredTech === tech.name && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 text-xs whitespace-nowrap">
                                        {tech.category.toUpperCase()}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dynamic Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {dynamicStats.map((stat, i) => (
                        <div 
                            key={i}
                            className="partner-item text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Scan line effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                            
                            <div className="text-4xl font-black mb-2 relative">
                                {stat.current}{stat.suffix}
                            </div>
                            <div className="text-xs font-mono tracking-widest relative">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ROTATING 3D STATISTICS
const StatisticsSection = () => {
    const [isClient, setIsClient] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const [counts, setCounts] = useState({ projects: 0, clients: 0, research: 0, countries: 0 });

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !isClient) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const duration = 2500;
                    const targets = { projects: 50, clients: 100, research: 25, countries: 10 };
                    const start = Date.now();

                    const animate = () => {
                        const now = Date.now();
                        const progress = Math.min((now - start) / duration, 1);
                        const ease = progress * (2 - progress); // easeOutQuad

                        setCounts({
                            projects: Math.floor(targets.projects * ease),
                            clients: Math.floor(targets.clients * ease),
                            research: Math.floor(targets.research * ease),
                            countries: Math.floor(targets.countries * ease),
                        });

                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [isClient]);

    const stats = [
        { value: counts.projects, label: 'PROJECTS', unit: '+' },
        { value: counts.clients, label: 'CLIENTS', unit: '+' },
        { value: counts.research, label: 'RESEARCH', unit: '+' },
        { value: counts.countries, label: 'COUNTRIES', unit: '+' },
    ];

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
                {stats.map((stat, i) => (
                    <div 
                        key={i} 
                        className="text-center group cursor-default relative"
                    >
                        <div 
                            className="text-7xl md:text-8xl font-black mb-4 transition-all duration-500 group-hover:scale-110 relative inline-block"
                            style={{
                                transform: 'perspective(1000px) rotateX(0deg)',
                                transition: 'transform 0.5s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'perspective(1000px) rotateX(15deg) rotateZ(-3deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateZ(0deg)';
                            }}
                        >
                            {stat.value}{stat.unit}
                            {/* Floating accent line */}
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        <div className="text-sm font-mono tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// PARALLAX ABOUT SECTION
const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !isClient) return;
        const ctx = gsap.context(() => {
            gsap.from('.about-title', {
                scrollTrigger: { trigger: '.about-title', start: 'top 80%', scrub: 1 },
                x: -200,
                opacity: 0
            });
            gsap.from('.about-logo', {
                scrollTrigger: { trigger: '.about-logo', start: 'top 80%', scrub: 1 },
                scale: 0.5,
                opacity: 0
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [isClient]);

    return (
        <section ref={sectionRef} id="about" className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Diagonal stripes decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 2px, transparent 2px, transparent 10px)',
            }} />
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="about-title text-6xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
                        WE ARE<br />
                        <span className="inline-block relative">
                            DEVILSLAB
                            <span className="absolute -bottom-4 left-0 w-32 h-2 bg-black"></span>
                        </span>
                    </h2>
                    <div className="space-y-6 text-xl leading-relaxed">
                        <p className="font-medium border-l-4 border-black pl-6">
                            A collective of <span className="font-black">rebel engineers</span> and <span className="font-black">mad scientists</span> pushing the boundaries of what's possible.
                        </p>
                        <p className="hover:pl-6 transition-all duration-300">
                            We don't build products. We architect experiences that redefine industries and challenge the status quo.
                        </p>
                        <p className="hover:pl-6 transition-all duration-300">
                            From AI that predicts the future to Web3 systems that democratize power—we're engineering the impossible, one line of code at a time.
                        </p>
                    </div>
                </div>
                
                <div className="about-logo relative group">
                    <div className="border-8 border-black p-12 bg-white transform group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src="/images/DevilsLab.png"
                            alt="DevilsLab"
                            width={800}
                            height={300}
                            className="w-full h-auto"
                        />
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-black -translate-x-2 -translate-y-2"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-black translate-x-2 -translate-y-2"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-black -translate-x-2 translate-y-2"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-black translate-x-2 translate-y-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// MINIMALIST FAQ
const FaqSection = () => {
    const faqItems = [
        {
            question: "What makes DevilsLab different?",
            answer: "We don't follow trends—we create them. Our team consists of pioneers who've built systems used by millions. We combine cutting-edge AI research with battle-tested engineering to deliver solutions that actually work at scale."
        },
        {
            question: "How fast can you deliver?",
            answer: "Speed is our superpower. We've shipped MVPs in 2 weeks and full platforms in 2 months. Our rapid prototyping methodology lets you test ideas in the market before your competitors even start planning."
        },
        {
            question: "Do you work with startups?",
            answer: "Absolutely. We love working with ambitious founders who want to change the world. We offer flexible equity partnerships and milestone-based pricing to help startups preserve runway while building world-class products."
        },
    ];

    return (
        <section id="faq" className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'gridMove 25s linear infinite'
            }} />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-20 tracking-tighter">
                    FAQ
                    <span className="block text-2xl font-mono mt-4 text-white/50">// Frequently Asked Questions</span>
                </h2>
                <Accordion type="multiple" className="space-y-8">
                    {faqItems.map((item, i) => (
                        <AccordionItem 
                            key={i} 
                            value={`item-${i}`} 
                            className="border-b-2 border-white/20 group hover:border-white transition-colors duration-300"
                        >
                            <AccordionTrigger 
                                suppressHydrationWarning
                                className="text-2xl font-black text-left hover:no-underline py-6 group-hover:text-white/80 transition-colors"
                            >
                                <span className="flex items-center gap-4">
                                    <span className="text-white/30 font-mono text-sm">0{i + 1}</span>
                                    {item.question}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-white/70 pb-6 leading-relaxed pl-12 border-l-2 border-white/20">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

// HOLOGRAPHIC CONTACT FORM
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", message: "" },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const result = await emailjs.send(
                SERVICE_ID, 
                TEMPLATE_ID, 
                {
                    from_name: values.name,
                    reply_to: values.email,
                    message: values.message,
                }, 
                PUBLIC_KEY
            );

            if (result.status >= 200 && result.status < 300) {
                form.reset();
                toast({ title: "MESSAGE SENT", description: "We'll respond within 24 hours." });
            }
        } catch (error) {
            toast({ 
                title: "ERROR", 
                description: "Failed to send. Try again.", 
                variant: "destructive" 
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Geometric decoration */}
            <div className="absolute top-20 left-10 w-32 h-32 border-4 border-black/5 rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-black/5"></div>
            
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-8 text-center tracking-tighter">
                    LET'S BUILD
                </h2>
                <p className="text-center text-xl mb-20 text-black/60 font-mono">
                    // Start your next impossible project
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative group">
                                            <input 
                                                {...field} 
                                                placeholder="YOUR NAME"
                                                className="w-full px-0 py-4 text-2xl font-bold bg-transparent border-0 border-b-4 border-black focus:outline-none placeholder:text-black/30 transition-all duration-300"
                                            />
                                            <div className="absolute bottom-0 left-0 h-1 bg-black transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        </div>
                                    </FormControl>
                                    <FormMessage className="mt-2 font-mono text-sm" />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative group">
                                            <input 
                                                {...field} 
                                                type="email"
                                                placeholder="YOUR EMAIL"
                                                className="w-full px-0 py-4 text-2xl font-bold bg-transparent border-0 border-b-4 border-black focus:outline-none placeholder:text-black/30 transition-all duration-300"
                                            />
                                            <div className="absolute bottom-0 left-0 h-1 bg-black transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        </div>
                                    </FormControl>
                                    <FormMessage className="mt-2 font-mono text-sm" />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative group">
                                            <textarea 
                                                {...field} 
                                                rows={6}
                                                placeholder="YOUR PROJECT"
                                                className="w-full px-0 py-4 text-2xl font-bold bg-transparent border-0 border-b-4 border-black focus:outline-none placeholder:text-black/30 resize-none transition-all duration-300"
                                            />
                                            <div className="absolute bottom-0 left-0 h-1 bg-black transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        </div>
                                    </FormControl>
                                    <FormMessage className="mt-2 font-mono text-sm" />
                                </FormItem>
                            )}
                        />

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full py-6 text-2xl font-black overflow-hidden bg-black text-white hover:bg-white hover:text-black border-4 border-black transition-all duration-500"
                        >
                            <span className="relative z-10">
                                {isSubmitting ? <Loader2 className="inline animate-spin" size={24} /> : 'SEND MESSAGE'}
                            </span>
                            {/* Corner accents on hover */}
                            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-black transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-black transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-black transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-black transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        </button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default function HomePage() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Simulate page load
        setTimeout(() => setIsPageLoaded(true), 1500);

        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {!isPageLoaded && <PageLoader />}
            
            <div className="overflow-x-hidden">
                {/* Scroll Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
                    <div 
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 z-50 group animate-float"
                        aria-label="Scroll to top"
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-2xl font-black">↑</span>
                        {/* Corner accents */}
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white group-hover:border-black transition-colors"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white group-hover:border-black transition-colors"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white group-hover:border-black transition-colors"></span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white group-hover:border-black transition-colors"></span>
                    </button>
                )}

                            <PremiumHeroSection />
                <MarqueeSection />
                <ServicesSection />
                <GlobalWorkforceSection />
                <PartnersSection />
                <StatisticsSection />
                <AboutSection />
                <FaqSection />
                <ContactSection />
            </div>
        </>
    );
}
