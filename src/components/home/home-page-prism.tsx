"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from "@emailjs/browser";
import { 
    Sparkles, BarChart3, Infinity, BadgeCheck, Bot, Diamond, 
    HandMetal, Gamepad2, Workflow, ShieldCheck, Wand2, Heart,
    ArrowUpRight, ArrowRight, Coins, Activity, BrainCircuit, Zap,
    Quote, Star, CheckCircle, Wallet, Mail, Phone, MapPin
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Hero Section - Clean Modern Design
const PrismHeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Animated grid background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
                
                {/* Gradient overlays */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <div className="flex justify-center animate-fadeIn">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg ring-1 ring-black/5 text-xs sm:text-sm font-medium text-gray-700 hover:shadow-xl transition-shadow duration-300 whitespace-nowrap">
                            <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="hidden sm:inline">ENGINEERING DIGITAL EXCELLENCE</span>
                            <span className="sm:hidden">ENGINEERING EXCELLENCE</span>
                        </span>
                    </div>

                    {/* Main heading with gradient */}
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                            DEVILSLAB
                        </span>
                    </h1>

                    {/* Subheading - Main Value Proposition */}
                    <div className="space-y-4 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                            We Build Digital Products That Scale
                        </p>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            From AI-powered platforms to blockchain solutions, we engineer custom software that transforms ideas into market-leading products. 
                            <span className="block mt-2 font-semibold text-gray-800">Fast development. Enterprise quality. Built to last.</span>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                        <a 
                            href="#services"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <span className="relative z-10">View Our Services</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg ring-1 ring-black/5 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project
                        </a>
                    </div>

                    {/* Stats Bar */}
                    <div className="pt-12 animate-fadeInUp" style={{animationDelay: '0.35s'}}>
                        <div className="inline-flex items-center gap-8 lg:gap-12 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ring-1 ring-black/5">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">200+</div>
                                <div className="text-xs text-gray-600 mt-0.5">Projects Delivered</div>
                            </div>
                            <div className="w-px h-8 bg-gray-200" />
                            <div>
                                <div className="text-3xl font-bold text-gray-900">98%</div>
                                <div className="text-xs text-gray-600 mt-0.5">Client Satisfaction</div>
                            </div>
                            <div className="w-px h-8 bg-gray-200" />
                            <div>
                                <div className="text-3xl font-bold text-gray-900">12+</div>
                                <div className="text-xs text-gray-600 mt-0.5">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <BrainCircuit className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                            <p className="text-gray-600 text-sm">Neural networks, NLP, and computer vision solutions that learn and adapt</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Rapid Development</h3>
                            <p className="text-gray-600 text-sm">MVP to production in weeks, not months - with enterprise quality</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Infinite Scale</h3>
                            <p className="text-gray-600 text-sm">Cloud-native architecture built to handle millions of users</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

// Quote Section (Lyric-style animation)
const QuoteSection = () => {
    return (
        <section className="bg-neutral-100 pt-32 pb-32">
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <p className="sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-4xl font-medium text-gray-500 tracking-tight">
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '0s'}}>&quot;We harness</span>
                        <span className="lyric-line text-gray-900 font-semibold" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '0.8s', marginLeft: '0.5rem'}}>your data</span>
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '1.6s'}}>, understand your audience,</span>
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '2.4s'}}>and</span>
                        <span className="lyric-line text-gray-900 font-semibold" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '3.2s', marginLeft: '0.5rem'}}>use technology</span>
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '4s', marginLeft: '0.5rem'}}>to help your brand rise above the noise.</span>
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '4.8s'}}>The best part?</span>
                        <span className="lyric-line text-gray-900 font-semibold" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '5.6s', marginLeft: '0.5rem'}}>We execute</span>
                        <span className="lyric-line" style={{opacity: 0, display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '6.4s'}}>, too.&quot;</span>
                    </p>

                    <div className="mt-12 flex items-center justify-center gap-3" style={{opacity: 0, animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '7.2s'}}>
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 blur-3xl rounded-full" style={{
                                background: 'radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 70%)',
                                transform: 'translateY(10px)'
                            }} />
                            <div className="ring-1 ring-black/5 w-12 h-12 object-cover rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] bg-gray-900 flex items-center justify-center text-white font-bold">
                                DL
                            </div>
                        </div>
                        <span className="text-base text-gray-700">Founder of DevilsLab</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes lyricFadeIn {
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .lyric-line { transition: all 0.3s ease; }
                .lyric-line:hover { transform: scale(1.05); text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            `}</style>
        </section>
    );
};

// Benefits Section with animated cards
const BenefitsSection = () => {
    return (
        <section className="flex bg-white pt-32 pr-32 pb-32 pl-32 items-center justify-center">
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 uppercase tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        Benefits
                    </span>
                    <h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mt-6">Why Choose Us</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-3">Partner with an engineering team delivering smart solutions.</p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 - Clock */}
                    <div className="relative bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                        <div className="mb-8 flex items-center justify-center">
                            <div className="relative w-28 h-28 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center animate-pulse-soft" style={{
                                boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)',
                                animation: 'pulse-soft 3s ease-in-out infinite'
                            }}>
                                <div className="absolute w-2 h-2 bg-gray-300 rounded-full top-3 right-4 animate-bounce-gentle delay-500" />
                                <div className="w-1 h-10 bg-gray-800 rounded-full" style={{
                                    transformOrigin: 'bottom center',
                                    transform: 'rotate(18deg)',
                                    animation: 'rotate-slow 6s ease-in-out infinite'
                                }} />
                                <div className="absolute w-2 h-2 bg-gray-800 rounded-full bottom-1.5" />
                            </div>
                        </div>
                        <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Real-Time Analytics</h3>
                        <p className="text-gray-600 leading-relaxed">Stay ahead with accurate, real-time performance tracking.</p>
                    </div>

                    {/* Card 2 - Chart */}
                    <div className="relative bg-white ring-black/5 ring-1 rounded-3xl p-8 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                        <div className="mb-8">
                            <div className="relative overflow-visible animate-pulse-soft bg-gray-50 w-full h-28 ring-black/5 ring-1 rounded-2xl" style={{
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
                                animation: 'pulse-soft 3s ease-in-out infinite 1s'
                            }}>
                                <span className="absolute left-12 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5 animate-float delay-300" style={{boxShadow: '0 8px 18px rgba(0,0,0,0.06)'}}>
                                    20% Automation
                                </span>
                                <span className="absolute right-4 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5 animate-float delay-700" style={{boxShadow: '0 8px 18px rgba(0,0,0,0.06)'}}>
                                    60% Cost
                                </span>
                                <div className="absolute inset-x-8 bottom-4 flex gap-2 items-end justify-center">
                                    {[6, 10, 14, 20, 24].map((h, i) => (
                                        <div 
                                            key={i}
                                            className={`w-6 h-${h} bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle`}
                                            style={{
                                                boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                                                animation: `bounce-gentle 2s ease-in-out infinite ${i * 0.1}s`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">AI-Driven Growth</h3>
                        <p className="text-gray-600 leading-relaxed">Make smarter moves with accurate, real-time business insights.</p>
                    </div>

                    {/* Card 3 - Sync */}
                    <div className="relative bg-white ring-black/5 ring-1 rounded-3xl p-8 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                        <div className="flex overflow-hidden relative bg-gray-50 rounded-xl mb-8 items-center justify-center h-28">
                            <div className="relative flex ring-0 bg-white/0 opacity-25 w-28 h-28 rounded-full items-center justify-center" style={{
                                boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)'
                            }}>
                                <Infinity className="w-12 h-12 text-gray-800" />
                            </div>
                        </div>
                        <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Sync in real time</h3>
                        <p className="text-gray-600 leading-relaxed">Connect with your team instantly to track progress and updates.</p>
                    </div>
                </div>

                {/* Feature pills marquee */}
                <div className="flex flex-wrap gap-3 relative overflow-hidden w-full mt-10 items-center justify-center">
                    <div className="flex items-center gap-3 whitespace-nowrap" style={{animation: 'aura-marquee-rtl 28s linear infinite'}}>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Coins className="w-4 h-4" />
                                Cost Effective
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Activity className="w-4 h-4" />
                                Real-Time Insights
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Workflow className="w-4 h-4" />
                                Automation
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <BrainCircuit className="w-4 h-4" />
                                Data-Driven Decisions
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Zap className="w-4 h-4" />
                                Faster Innovation
                            </span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0" aria-hidden="true">
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Coins className="w-4 h-4" />
                                Cost Effective
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Activity className="w-4 h-4" />
                                Real-Time Insights
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Workflow className="w-4 h-4" />
                                Automation
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <BrainCircuit className="w-4 h-4" />
                                Data-Driven Decisions
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
                                <Zap className="w-4 h-4" />
                                Faster Innovation
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes aura-marquee-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes pulse-soft {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes rotate-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-700 { animation-delay: 0.7s; }
            `}</style>
        </section>
    );
};

// Enhanced Services Section with 3D Card Flip
const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: <BrainCircuit size={40} />,
            title: "ARTIFICIAL INTELLIGENCE",
            shortDesc: "Neural networks & ML",
            fullDesc: "Advanced AI solutions with neural networks that learn and adapt. From NLP to computer vision, we build intelligent systems that drive innovation.",
            tags: ["ML", "NLP", "Vision"],
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: <Workflow size={40} />,
            title: "WEB3 & BLOCKCHAIN",
            shortDesc: "Decentralized solutions",
            fullDesc: "Build the future with blockchain technology. Smart contracts, DeFi platforms, and NFT marketplaces that are secure and scalable.",
            tags: ["Smart Contracts", "DeFi", "NFT"],
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: <Zap size={40} />,
            title: "CUSTOM PLATFORMS",
            shortDesc: "Scalable architecture",
            fullDesc: "Enterprise-grade platforms engineered for infinite scale. Cloud-native solutions with microservices architecture and API-first design.",
            tags: ["Cloud", "API", "DevOps"],
            color: "from-orange-500 to-red-600"
        },
        {
            icon: <Activity size={40} />,
            title: "RAPID PROTOTYPING",
            shortDesc: "Idea to MVP fast",
            fullDesc: "Transform concepts into working prototypes in record time. Validate your ideas quickly with professional-grade MVPs.",
            tags: ["MVP", "POC", "Launch"],
            color: "from-green-500 to-teal-600"
        },
        {
            icon: <Sparkles size={40} />,
            title: "FULL-STACK DEVELOPMENT",
            shortDesc: "End-to-end solutions",
            fullDesc: "Complete development lifecycle from frontend to backend. Modern frameworks, responsive design, and robust infrastructure.",
            tags: ["Frontend", "Backend", "Mobile"],
            color: "from-indigo-500 to-blue-600"
        },
        {
            icon: <Bot size={40} />,
            title: "AUTOMATION & AI AGENTS",
            shortDesc: "Intelligent automation",
            fullDesc: "Deploy AI agents that handle complex workflows autonomously. RPA, chatbots, and intelligent automation that saves time and money.",
            tags: ["RPA", "Workflows", "Bots"],
            color: "from-pink-500 to-rose-600"
        }
    ];

    return (
        <section className="bg-neutral-100 pt-32 pb-32 relative overflow-hidden" id="services">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />
            
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 uppercase tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        CAPABILITIES
                    </span>
                    <h2 className="sm:text-5xl text-4xl font-bold tracking-tight mb-4 mt-6">Our Services</h2>
                    <p className="sm:text-xl text-lg text-gray-600 max-w-2xl mx-auto">Engineering tomorrow&apos;s solutions with cutting-edge technology</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div 
                            key={i}
                            className="group relative h-96 cursor-pointer"
                            style={{ perspective: '1000px' }}
                            onMouseEnter={() => setHoveredCard(i)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div 
                                className={`absolute inset-0 transition-all duration-700 transform-style-3d ${
                                    hoveredCard === i ? 'rotate-y-180' : ''
                                }`}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front */}
                                <div 
                                    className="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col justify-between ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div>
                                        <div className="mb-6 text-gray-900 transform group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-3 text-gray-900">{service.title}</h3>
                                        <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {service.tags.map((tag, j) => (
                                            <span key={j} className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Animated corner */}
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Back */}
                                <div 
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl p-8 flex items-center justify-center ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.08)]`}
                                    style={{ 
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <div className="text-center text-white">
                                        <div className="mb-6">{service.icon}</div>
                                        <p className="text-lg leading-relaxed mb-6">{service.fullDesc}</p>
                                        <span className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                                            Learn More →
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover glow */}
                            {hoveredCard === i && (
                                <div className="absolute -inset-1 bg-gradient-to-br from-black/5 to-transparent pointer-events-none blur-sm rounded-3xl" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:scale-105"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </section>
    );
};

// Testimonials Section
const TestimonialsSection = () => {
    return (
        <section className="bg-gray-50 pt-32 pb-32">
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
                    <span className="inline-flex items-center gap-2 ring-1 ring-black/5 uppercase text-xs font-medium text-gray-700 tracking-wide bg-white rounded-full px-3 py-1 shadow-sm">
                        Customers
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">What Our Clients Say</h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">Join customers who trust technology to transform their business.</p>
                </div>

                {/* Feature Row */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 sm:mb-10 items-center justify-center">
                    {/* Big Quote Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-4 translate-y-4 scale-95 opacity-60" />
                        <div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-2 translate-y-2 scale-[0.97] opacity-80" />
                        
                        <div className="relative sm:p-8 bg-white max-h-full ring-black/5 ring-1 rounded-3xl p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] z-10">
                            <p className="text-xl sm:text-2xl leading-relaxed text-gray-900 text-center">
                                Their <span className="text-gray-500">technology-driven</span> approach helped us reach the right audience and <span className="text-gray-800">grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className="text-gray-800">delivering results</span> we couldn&apos;t achieve before.
                            </p>
                            <div className="mt-6 flex justify-center">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full ring-1 ring-black/5 bg-white shadow-sm">
                                    <Quote className="w-4.5 h-4.5 text-gray-800" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <div className="relative mx-auto">
                        <div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-4 translate-y-4 scale-95 opacity-60" />
                        <div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-2 translate-y-2 scale-[0.97] opacity-80" />
                        
                        <div className="relative bg-white max-w-fit ring-black/5 ring-1 rounded-3xl p-2 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] z-10">
                            <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-gray-900 to-gray-700 p-16 sm:h-80 lg:h-full w-full h-24 flex items-center justify-center">
                                <p className="text-white text-3xl font-bold">CLIENT SUCCESS</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {[
                        { name: 'Brendan', role: 'Marketing Director at StratIQ', text: 'We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.', stars: 4 },
                        { name: 'Lena M', role: 'Manager at NovaTech', text: 'Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We\'re already seeing results.', stars: 4 },
                        { name: 'Eli R', role: 'COO at GridFrame', text: 'From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.', stars: 4 }
                    ].map((testimonial, i) => (
                        <div key={i} className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6">
                            <div className="flex gap-1 text-gray-800 mb-3 items-center">
                                {[...Array(testimonial.stars)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-current" />
                                ))}
                                <Star className="w-4 h-4 text-gray-300" />
                            </div>
                            <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold ring-1 ring-black/5 shadow-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                    <div>
                        <div className="text-3xl font-semibold tracking-tight text-gray-900">100+</div>
                        <div className="mt-1 text-sm text-gray-500">Projects Completed</div>
                    </div>
                    <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pl-0 sm:pl-8 pt-8 sm:pt-0">
                        <div className="text-3xl font-semibold tracking-tight text-gray-900">95%</div>
                        <div className="mt-1 text-sm text-gray-500">Client Satisfaction</div>
                    </div>
                    <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pl-0 sm:pl-8 pt-8 sm:pt-0">
                        <div className="text-3xl font-semibold tracking-tight text-gray-900">10+</div>
                        <div className="mt-1 text-sm text-gray-500">Years of Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Form Section
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactFormSection = () => {
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
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-600">Let&apos;s discuss your next project</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input 
                                            {...field} 
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 text-base bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input 
                                            {...field} 
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 text-base bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <textarea 
                                            {...field} 
                                            rows={6}
                                            placeholder="Your Message"
                                            className="w-full px-4 py-3 text-base bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 resize-none transition-colors"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 text-base font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors shadow-[0_6px_20px_rgba(0,0,0,0.12)] disabled:opacity-50"
                        >
                            {isSubmitting ? <Loader2 className="inline animate-spin mr-2" size={20} /> : null}
                            Send Message
                        </button>
                    </form>
                </Form>

                {/* Contact Info */}
                <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <Mail className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">contact@devilslab.com</p>
                    </div>
                    <div className="p-4">
                        <Phone className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="p-4">
                        <MapPin className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main Export
export default function HomePagePrism() {
    return (
        <div className="overflow-x-hidden">
            <PrismHeroSection />
            <QuoteSection />
            <BenefitsSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactFormSection />
        </div>
    );
}
