
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import DndxHeroBackground from './dndx-hero-background';
import { ShieldCheck, FileText, Rocket, Share2, Vote } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ecosystemComponents = [
    { icon: ShieldCheck, title: "Adaptive Escrow" },
    { icon: FileText, title: "AI Compliance" },
    { icon: Rocket, title: "Secure Presale" },
    { icon: Share2, title: "Growth Tools" },
    { icon: Vote, title: "Governance DAO" }
];

export default function DndxPage() {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray<HTMLElement>('.g-fade-in');
            sections.forEach(section => {
                gsap.fromTo(section, 
                { opacity: 0, y: 30 }, 
                {
                    scrollTrigger: { trigger: section, start: 'top 85%', end: "top 50%", scrub: 1 },
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    stagger: 0.2
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="dndx-page bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section id="hero-dndx" className="relative flex flex-col justify-center items-center text-center overflow-hidden py-40 md:py-48 bg-gradient-to-b from-black via-primary to-black">
                <DndxHeroBackground />
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="relative z-10 max-w-5xl px-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 g-fade-in text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 pb-2">Dendrites (DNDX)</h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-6 g-fade-in">The AI-Powered Trust Layer for Web3.</p>
                     <p className="text-lg text-white/60 max-w-3xl mx-auto g-fade-in">
                        Dendrites is a decentralized ecosystem designed to bring security and fairness to Web3. By combining an AI compliance engine with an adaptive escrow system, DNDX creates a trusted environment for collaboration, token launches, and governance.
                    </p>
                </div>
            </section>
            
            {/* Core Components Section */}
            <section className="dndx-section py-24 md:py-32 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 g-fade-in text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 pb-2">An Ecosystem of Trust</h2>
                    <p className="text-lg text-white/60 mb-16 max-w-3xl mx-auto g-fade-in">Our core components work together to build a safer, more transparent Web3.</p>
                </div>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {ecosystemComponents.map((component, index) => {
                        const Icon = component.icon;
                        return (
                            <div key={index} className="flex flex-col items-center p-6 g-fade-in bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-purple-500/10 border-2 border-purple-400 rounded-full flex items-center justify-center text-purple-300 mb-4 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                                  <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-white/90 text-center">{component.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-24 md:py-32 px-8 text-center bg-transparent">
                 <div className="max-w-3xl mx-auto g-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">Join the Future of Trust.</h2>
                    <p className="text-lg md:text-xl text-white/60 mb-12">Become an early supporter and help build a safer, more transparent Web3 economy.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button asChild size="lg" className="rounded-full bg-purple-500 hover:bg-purple-600 text-white px-10 py-7 text-lg font-semibold shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all transform hover:-translate-y-1">
                            <a href="http://Waitlist.dendrites.ai" target="_blank" rel="noopener noreferrer">Join The Presale</a>
                        </Button>
                        <Button variant="secondary" size="lg" asChild className="rounded-full px-10 py-7 text-lg font-semibold border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all">
                            <a href="https://discord.gg/GkhErQkg" target="_blank" rel="noopener noreferrer">Join Discord</a>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
        );
    
    }


