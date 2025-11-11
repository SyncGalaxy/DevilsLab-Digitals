'use client';

import { useEffect, useState } from 'react';
import { Shield, Zap, Brain, Lock, Globe, CheckCircle } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

const features = [
    {
        icon: Shield,
        title: 'Adaptive Escrow',
        description: 'Smart contract-based escrow that adjusts terms dynamically based on project milestones and deliverables, ensuring fair payment for all parties.'
    },
    {
        icon: Brain,
        title: 'AI Compliance Engine',
        description: 'Automated compliance monitoring using machine learning to ensure all transactions meet regulatory requirements across jurisdictions.'
    },
    {
        icon: Lock,
        title: 'Zero-Knowledge Verification',
        description: 'Privacy-preserving identity verification that protects sensitive information while maintaining trust and security in the network.'
    },
    {
        icon: Zap,
        title: 'Instant Settlements',
        description: 'Lightning-fast transaction processing with minimal fees, powered by layer-2 scaling solutions and optimized smart contracts.'
    },
    {
        icon: Globe,
        title: 'Cross-Chain Compatibility',
        description: 'Seamless integration across multiple blockchain networks, enabling truly decentralized and interoperable transactions.'
    },
    {
        icon: CheckCircle,
        title: 'Reputation Oracle',
        description: 'Decentralized reputation system that aggregates on-chain and off-chain data to provide transparent credibility scores.'
    }
];

const benefits = [
    'Trustless collaboration without intermediaries',
    'Reduced transaction costs by up to 90%',
    'Instant global payments in any currency',
    'Complete transparency and audit trails',
    'Automated dispute resolution mechanisms',
    'Regulatory compliance built-in'
];

export default function DNDXPageUltra() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <PhysicsBackground />
            <main className="relative min-h-screen" style={{ background: colors.white }}>
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6">
                            <span 
                                className={`inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider border ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                style={{ 
                                    color: colors.navy,
                                    borderColor: `${colors.navy}20`,
                                    background: `${colors.navy}05`
                                }}
                            >
                                Powered by Blockchain
                            </span>
                        </div>
                        <h1 
                            className={`text-7xl md:text-8xl lg:text-9xl font-black mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: colors.navy,
                                animationDelay: '0.1s'
                            }}
                        >
                            Dendrites (DNDX)
                        </h1>
                        <p 
                            className={`text-xl md:text-2xl max-w-3xl mb-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.2s'
                            }}
                        >
                            A decentralized protocol for secure, trustless collaboration and payment infrastructure. Built for the future of work.
                        </p>

                        {/* CTA Buttons */}
                        <div className={`flex flex-wrap gap-4 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                            <a
                                href="https://dendrites.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300"
                                style={{
                                    background: colors.navy,
                                    color: colors.white
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${colors.navy}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Explore DNDX
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border transition-all duration-300"
                                style={{
                                    background: colors.white,
                                    color: colors.navy,
                                    borderColor: `${colors.navy}20`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `${colors.navy}05`;
                                    e.currentTarget.style.borderColor = colors.navy;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = colors.white;
                                    e.currentTarget.style.borderColor = `${colors.navy}20`;
                                }}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 
                            className={`text-5xl md:text-6xl font-black mb-16 text-center ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: colors.navy,
                                animationDelay: '0.4s'
                            }}
                        >
                            Key Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-8 border transition-all duration-500 group ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                        style={{
                                            background: colors.white,
                                            borderColor: `${colors.navy}10`,
                                            animationDelay: `${0.5 + index * 0.1}s`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 20px 60px ${colors.navy}15`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div 
                                            className="w-16 h-16 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-5"
                                            style={{ background: `${colors.navy}10` }}
                                        >
                                            <Icon 
                                                className="w-8 h-8"
                                                style={{ color: colors.navy }}
                                            />
                                        </div>
                                        <h3 
                                            className="text-2xl font-bold mb-3"
                                            style={{ color: colors.navy }}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p 
                                            className="leading-relaxed"
                                            style={{ color: `${colors.navy}90` }}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 
                            className="text-5xl md:text-6xl font-black mb-12 text-center"
                            style={{ color: colors.navy }}
                        >
                            Why Choose DNDX?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 border transition-all duration-300"
                                    style={{
                                        background: colors.white,
                                        borderColor: `${colors.navy}10`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = `${colors.navy}03`;
                                        e.currentTarget.style.borderColor = `${colors.navy}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = colors.white;
                                        e.currentTarget.style.borderColor = `${colors.navy}10`;
                                    }}
                                >
                                    <CheckCircle 
                                        className="w-6 h-6 flex-shrink-0 mt-1"
                                        style={{ color: colors.navy }}
                                    />
                                    <span 
                                        className="text-lg font-medium"
                                        style={{ color: colors.navy }}
                                    >
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 pb-32 px-6">
                    <div 
                        className="max-w-4xl mx-auto text-center p-16 border"
                        style={{ borderColor: `${colors.navy}10` }}
                    >
                        <h3 
                            className="text-4xl md:text-5xl font-black mb-6"
                            style={{ color: colors.navy }}
                        >
                            Join the Decentralized Future
                        </h3>
                        <p 
                            className="text-xl mb-8"
                            style={{ color: `${colors.navy}99` }}
                        >
                            Explore how DNDX can power your next project or platform.
                        </p>
                        <a
                            href="https://dendrites.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300"
                            style={{
                                background: colors.navy,
                                color: colors.white
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = `0 20px 40px ${colors.navy}40`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Visit Dendrites.ai
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
