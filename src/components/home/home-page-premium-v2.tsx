"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import HeroBackground from "@/components/home/hero-cube-background";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// World-Class Hero with 3D Background
const PremiumHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Desktop View */}
            <div className="hidden lg:block relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="max-w-[650px]">
                        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <h1 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-tight text-[#1e293b] leading-[1.1] mb-6">
                                We Build Systems That Work.<br />Starting With Your Lead Generation.
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                                The Surge System installs a complete lead-generation infrastructure in 30 days. One transparent package. ₹75,000. Execution-focused.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#flagship"
                                    className="px-8 py-3.5 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    See How The System Works
                                </a>
                                <a 
                                    href="#contact"
                                    className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    Book A Strategy Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: 3D Cube */}
                    <div className="relative flex items-center justify-center h-full">
                        <div className="relative w-full max-w-[320px] h-[500px]">
                            <HeroBackground />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden relative z-10 w-full px-6 sm:px-8 py-20">
                <div className="flex flex-col items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full max-w-[600px]">
                        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <h1 className="text-[2.5rem] sm:text-[3.25rem] font-bold tracking-tight text-[#1e293b] leading-[1.1] mb-6 text-center">
                                We Build Systems That Work.<br />Starting With Your Lead Generation.
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed text-center">
                                The Surge System installs a complete lead-generation infrastructure in 30 days. One transparent package. ₹75,000. Execution-focused.
                            </p>

                            <div className="flex flex-col gap-4">
                                <a 
                                    href="#flagship"
                                    className="px-8 py-3.5 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    See How The System Works
                                </a>
                                <a 
                                    href="#contact"
                                    className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    Book A Strategy Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3D Cube */}
                    <div className="relative w-full max-w-[260px] h-[400px] mx-auto">
                        <HeroBackground />
                    </div>
                </div>
            </div>

            {/* Trust Bar - Bottom */}
            <div className="absolute bottom-12 left-6 sm:left-16 right-6 sm:right-16 z-10">
                <p className="text-gray-500 text-sm">Based in Hyderabad • Transparent pricing • No long-term contracts</p>
            </div>
        </section>
    );
};

// Flagship Package Section
const FlagshipPackage = () => {
    const packageRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (packageRef.current) {
            observer.observe(packageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const packageComponents = [
        { component: "Strategy & Planning", description: "Business analysis, competitor research, offer positioning, strategy document", amount: "15,000" },
        { component: "Landing Page / Website Setup", description: "Custom landing page designed, built, and hosted (live)", amount: "15,000" },
        { component: "Ads Setup & Configuration", description: "Google Ads + Meta Ads accounts configured, campaigns structured, tracking installed", amount: "20,000" },
        { component: "Lead CRM Setup", description: "Lightweight CRM for lead tracking and follow-ups (included)", amount: "Included" },
        { component: "WhatsApp Automation", description: "Automated lead capture and response system (active and tested)", amount: "10,000" },
        { component: "Testing & Go-Live", description: "Soft launch, tracking validation, optimization before full launch", amount: "10,000" },
        { component: "30-Day Support", description: "Hands-on troubleshooting and adjustment support after go-live", amount: "5,000" }
    ];

    return (
        <section id="flagship" ref={packageRef} className="py-24 bg-[#fafafa]">
            <div className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 bg-[#1e293b] text-white text-sm font-medium rounded-full mb-4">
                            FLAGSHIP SERVICE
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            The Surge System
                        </h2>
                        <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                            A complete lead-generation infrastructure installed in 30 days. No retainers. No surprises. One transparent package.
                        </p>
                    </div>

                    {/* The Problem */}
                    <div className="mb-12 max-w-[800px] mx-auto">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-4">The Problem</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Most businesses try to figure out lead generation by themselves—stitching together freelancers, tools, and guesswork. It rarely works.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The Surge System installs everything you need as a single, structured system: strategy, landing pages, ads, automation, and go-live support.
                        </p>
                    </div>

                    {/* Who This Is For */}
                    <div className="mb-12 max-w-[800px] mx-auto">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-6">Who This Is For</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-base font-semibold text-[#1e293b] mb-3">Built for businesses that:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Need consistent lead flow, not one-off campaigns</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Prefer transparent pricing over monthly retainers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Value structured execution over creative experiments</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-[#1e293b] mb-3">Not built for:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Businesses looking for brand design or content marketing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Companies expecting guaranteed lead volume</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1e293b] mt-1">•</span>
                                        <span>Projects requiring ongoing ads management (we can discuss that separately)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* What You Get */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-6 text-center">What You Get</h3>
                    </div>

                    {/* Pricing Table */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm mb-6">
                        {/* Table Header */}
                        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                            <div className="grid grid-cols-[2fr,3fr,1fr] gap-4">
                                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                    Component
                                </div>
                                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                    What's Included
                                </div>
                                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider text-right">
                                    Amount (₹)
                                </div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-100">
                            {packageComponents.map((item, index) => (
                                <div key={index} className="px-8 py-5 hover:bg-gray-50 transition-colors">
                                    <div className="grid grid-cols-[2fr,3fr,1fr] gap-4 items-start">
                                        <div className="text-base font-medium text-gray-900">
                                            {item.component}
                                        </div>
                                        <div className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </div>
                                        <div className="text-base font-medium text-gray-900 text-right">
                                            {item.amount}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="bg-[#1e293b] px-8 py-6">
                            <div className="grid grid-cols-[2fr,3fr,1fr] gap-4 items-center">
                                <div className="text-lg font-bold text-white col-span-2">
                                    Total Investment
                                </div>
                                <div className="text-3xl font-bold text-white text-right">
                                    ₹75,000
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div className="text-center mb-12 space-y-2">
                        <p className="text-gray-600 font-medium">
                            <strong>Important notes:</strong>
                        </p>
                        <p className="text-gray-600">
                            • This is a one-time setup fee. No monthly retainers required.
                        </p>
                        <p className="text-gray-600">
                            • Ad spend budget is additional and controlled by you.
                        </p>
                        <p className="text-gray-600">
                            • Timeline: 30 days from kickoff to first ad running.
                        </p>
                        <p className="text-gray-600">
                            • CRM included is limited to lead management only. Advanced CRM solutions are available separately.
                        </p>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-12 max-w-[800px] mx-auto bg-white rounded-2xl border-2 border-gray-200 p-8">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-4">Deliverables (Not Promises)</h3>
                        <p className="text-gray-600 mb-6">At the end of 30 days, you will have:</p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Lead generation strategy document</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Custom landing page (hosted, live, and optimized)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Google Ads account configured and running</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Meta Ads account configured and running</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">WhatsApp automation workflow (active and tested)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Full tracking and analytics setup</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#1e293b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">30 days of go-live support</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-6 italic">
                            We build the system. You drive the strategy. Together, it works.
                        </p>
                    </div>

                    {/* Guarantees */}
                    <div className="mb-12 max-w-[800px] mx-auto">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-6">What We Guarantee (And What We Don't)</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                                <h4 className="text-base font-semibold text-[#1e293b] mb-4">What We Guarantee:</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Full transparency:</strong> you see every component, every cost, every step</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>On-time delivery:</strong> 30-day system installation or we extend support at no cost</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>No surprises:</strong> one fixed price, one clear scope</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span><strong>Real support:</strong> 30 days of hands-on assistance after go-live</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                                <h4 className="text-base font-semibold text-[#1e293b] mb-4">What We Don't Guarantee:</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-0.5">✗</span>
                                        <span><strong>Specific lead volume</strong> (depends on your market, offer, and ad budget)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-0.5">✗</span>
                                        <span><strong>Instant ROI</strong> (lead generation requires testing and optimization)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-0.5">✗</span>
                                        <span><strong>Ongoing management</strong> (this is a system installation, not a retainer service)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact"
                            className="px-8 py-3.5 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200 inline-flex items-center justify-center"
                        >
                            Book Your Strategy Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services - Apple-style Product Cards
const PremiumServices = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: "Web Development",
            tiers: [
                {
                    name: "Static Website",
                    pricing: "Starting from ₹25,000",
                    description: "Professional static websites with modern design, responsive layouts, and fast performance."
                },
                {
                    name: "Dynamic Website",
                    pricing: "Starting from ₹60,000",
                    description: "Feature-rich dynamic websites with databases, user authentication, and custom functionality."
                }
            ]
        },
        {
            title: "SaaS Development",
            tiers: [
                {
                    name: "SaaS MVP",
                    pricing: "Starting from ₹1,50,000",
                    description: "Minimum viable product to validate your SaaS idea with core features and user authentication."
                },
                {
                    name: "Scalable SaaS Platform",
                    pricing: "Starting from ₹4,00,000",
                    description: "Full-scale SaaS platform with advanced features, integrations, and enterprise-grade infrastructure."
                }
            ]
        },
        {
            title: "Web3 Development",
            tiers: [
                {
                    name: "Web3 Integration",
                    pricing: "Starting from ₹1,00,000",
                    description: "Add blockchain functionality to existing applications—wallet connectivity, token integration, and smart contract interaction."
                },
                {
                    name: "Full Web3 Platform",
                    pricing: "Starting from ₹2,50,000",
                    description: "Complete decentralized platform with custom smart contracts, NFT systems, DeFi protocols, or DAO infrastructure."
                }
            ]
        },
        {
            title: "Research & Development (R&D)",
            tiers: [
                {
                    name: "R&D Retainer",
                    pricing: "₹75,000 per month",
                    description: "Ongoing technical research, proof-of-concept development, feasibility studies, and innovation exploration. Minimum 1 month engagement."
                }
            ]
        }
    ];

    return (
        <section id="services" ref={servicesRef} className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            Beyond Surge: Custom Systems For Serious Projects
                        </h2>
                        <p className="text-lg text-gray-600 max-w-[700px]">
                            For clients who need deeper engineering work—custom platforms, blockchain infrastructure, or long-term research projects—we build systems that require months, not weeks.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-[#1e293b] mb-6">
                                    {service.title}
                                </h3>
                                <div className="space-y-6">
                                    {service.tiers.map((tier, idx) => (
                                        <div key={idx} className={idx > 0 ? "pt-6 border-t border-gray-200" : ""}>
                                            <div className="mb-3">
                                                <div className="text-base font-semibold text-[#1e293b] mb-1">{tier.name}</div>
                                                <div className="text-lg font-bold text-[#1e293b]">{tier.pricing}</div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200"
                        >
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// How We Work Section
const HowWeWork = () => {
    const workRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (workRef.current) {
            observer.observe(workRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const process = [
        {
            week: "Week 1",
            title: "Discovery & Strategy",
            items: [
                "Business analysis and competitor research",
                "Offer positioning and messaging",
                "Technical requirements and platform selection"
            ],
            output: "Strategy document and project roadmap"
        },
        {
            week: "Weeks 2–3",
            title: "System Build",
            items: [
                "Landing page design and development",
                "Ads account setup and campaign structure",
                "WhatsApp automation configuration",
                "Tracking and analytics installation"
            ],
            output: "Live infrastructure, ready for testing"
        },
        {
            week: "Week 4",
            title: "Testing & Launch",
            items: [
                "Soft launch with controlled traffic",
                "Tracking validation and data verification",
                "Final optimization and adjustment"
            ],
            output: "System running, ads live, automation active"
        },
        {
            week: "Post-Launch",
            title: "30-Day Support",
            items: [
                "Monitoring and troubleshooting",
                "Adjustment support as you learn the system",
                "Questions answered, issues resolved"
            ],
            output: "Stable, operational system you can manage or hand off"
        }
    ];

    const principles = [
        {
            number: "1",
            title: "Product-First Thinking",
            description: "We approach every project as a product—thinking deeply about architecture, scalability, and long-term maintainability from day one."
        },
        {
            number: "2",
            title: "Execution Over Ideas",
            description: "Ideas are cheap. Execution is everything. We focus on structured, systematic execution that delivers working systems, not just plans."
        },
        {
            number: "3",
            title: "Transparency Always",
            description: "You see every component, every decision, every cost. No hidden fees, no scope creep, no surprises."
        }
    ];

    return (
        <section id="how-we-work" ref={workRef} className="py-24 bg-[#fafafa]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-600 max-w-[700px]">
                            We believe trust comes from transparency. Here's exactly how we execute the Surge System and approach all projects.
                        </p>
                    </div>

                    {/* Process */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-10 text-center">Our Process (Surge System)</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((phase, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                                    <div className="text-sm font-bold text-[#1e293b] mb-2">{phase.week}</div>
                                    <h4 className="text-xl font-semibold text-[#1e293b] mb-4">{phase.title}</h4>
                                    <ul className="space-y-2 mb-4">
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-[#1e293b] mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-xs font-semibold text-gray-500 mb-1">OUTPUT:</p>
                                        <p className="text-sm text-gray-700">{phase.output}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Principles */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-10 text-center">Our Principles</h3>
                        <div className="grid md:grid-cols-3 gap-10">
                            {principles.map((principle, index) => (
                                <div key={index}>
                                    <div className="text-5xl font-bold text-[#1e293b] mb-4">{principle.number}</div>
                                    <h4 className="text-xl font-semibold text-[#1e293b] mb-3">{principle.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Flagship Product Section
const FlagshipProductSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            Flagship Product
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12 shadow-sm">
                        <h3 className="text-3xl font-bold text-[#1e293b] mb-4">
                            SyncGalaxy
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            SyncGalaxy is our internal SaaS product built and launched by devilsLab Digitals. It represents our approach to designing, building, and shipping real-world software products.
                        </p>
                        <a
                            href="https://syncgalaxy.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200"
                        >
                            Visit SyncGalaxy
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Selected Work Section
const SelectedWorkSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const work = [
        {
            name: 'SyncGalaxy',
            type: 'Internal Product',
            role: 'Designed, built, and launched a complete SaaS platform for team collaboration and project management.'
        },
        {
            name: 'DNDX',
            type: 'Technology Partner',
            role: 'Integrated blockchain-based infrastructure for secure payment processing and decentralized collaboration systems.'
        }
    ];

    return (
        <section id="selected-work" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            Selected Work
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {work.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-[#1e293b]">
                                        {item.name}
                                    </h3>
                                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                        {item.type}
                                    </span>
                                </div>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {item.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// FAQ Section
const FAQSection = () => {
    const faqRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const faqs = [
        {
            question: "What exactly is included in the ₹75,000 Surge System?",
            answer: "The full breakdown is in the Surge System section above, but in short: strategy and planning, custom landing page, Google and Meta ads setup, WhatsApp automation, testing and go-live, plus 30 days of support. Everything you need to start generating leads."
        },
        {
            question: "Do I need to pay for ad spend separately?",
            answer: "Yes. The ₹75,000 covers the system installation. Your ad spend (the budget you give to Google and Meta to show your ads) is separate and controlled entirely by you. We'll help you determine an appropriate starting budget during strategy."
        },
        {
            question: "What if I've never run ads before?",
            answer: "That's fine. We guide you through the entire process and provide 30 days of hands-on support after launch. You don't need prior experience—just a willingness to learn the system we install."
        },
        {
            question: "How is this different from hiring a freelancer or agency?",
            answer: "Freelancers typically handle one piece (either a landing page OR ads OR automation). Agencies often require monthly retainers with unclear deliverables. We install the complete system as a single package with transparent pricing and a fixed timeline."
        },
        {
            question: "Can you guarantee X number of leads or a specific ROI?",
            answer: "No. Lead volume depends on your market, your offer, your ad budget, and how well your product or service resonates with your audience. We guarantee the system is built correctly and delivered on time. The results depend on execution and market response."
        },
        {
            question: "What if I need ongoing ads management after 30 days?",
            answer: "The Surge System is designed for you to manage yourself or hand off to an in-house team or freelancer. If you need ongoing management from us, we can discuss a separate retainer, but that's not included in the ₹75,000 package."
        },
        {
            question: "What happens if the system doesn't work?",
            answer: "If we fail to deliver the system as specified within 30 days, we extend support at no additional cost until it's operational. However, 'working' means the system is built correctly and running—not that you're getting a specific number of leads. Lead generation requires testing, iteration, and optimization over time."
        },
        {
            question: "Do you work with businesses outside Hyderabad?",
            answer: "Yes. While we're based in Hyderabad, we work with businesses across India. Everything is handled remotely, with regular video calls and updates."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with B2B and B2C businesses across most industries—tech, healthcare, education, finance, real estate, e-commerce, and more. As long as you have a clear offer and target market, we can build the system."
        },
        {
            question: "How do I know if the Surge System is right for me?",
            answer: "Book a strategy call. We'll discuss your business, your current lead-generation challenges, and whether the Surge System is a fit. If it's not, we'll tell you honestly."
        }
    ];

    return (
        <section id="faq" ref={faqRef} className="py-24 bg-[#fafafa]">
            <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-[600px]">
                            Common questions about the Surge System and our services
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-base font-semibold text-[#1e293b] pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="text-xl text-gray-400 flex-shrink-0">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-gray-600 mb-4">More questions?</p>
                        <a 
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-all font-medium"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Section
const ContactSection = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const formSchema = z.object({
        name: z.string().min(2, 'Name must be at least 2 characters'),
        email: z.string().email('Invalid email address'),
        message: z.string().min(10, 'Message must be at least 10 characters'),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    useEffect(() => {
        // Check for prefilled message from URL params
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const prefilledMessage = params.get('message');
            if (prefilledMessage) {
                form.setValue('message', prefilledMessage);
                // Clear the URL params
                window.history.replaceState({}, '', '/#contact');
            }
        }
    }, [form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message,
                },
                PUBLIC_KEY
            );

            toast({
                title: "Message sent",
                description: "We'll be in touch within 24 hours.",
            });

            form.reset();
        } catch (error) {
            toast({
                title: "Failed to send",
                description: "Please try again or email us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={contactRef} className="py-32 bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-20">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                            Let's Start With A Conversation
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-[680px] mx-auto font-light">
                            Book a 30-minute strategy call. We'll discuss your business, your lead-generation challenges, and whether the Surge System is the right fit.
                        </p>
                        <p className="text-lg text-gray-500 mt-4">
                            No pressure. No sales pitch. Just honest advice.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    {...field}
                                                    placeholder="Your name"
                                                    className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder:text-gray-400"
                                                    suppressHydrationWarning
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
                                                    placeholder="Your email"
                                                    className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors bg-transparent placeholder:text-gray-400"
                                                    suppressHydrationWarning
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
                                                    placeholder="Tell us about your project"
                                                    rows={5}
                                                    className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors bg-transparent resize-none placeholder:text-gray-400"
                                                    suppressHydrationWarning
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-5 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Book Strategy Call
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </Form>

                        <div className="text-center mt-6 text-sm text-gray-500">
                            Typical response time: Within 24 hours on business days
                        </div>

                        {/* Contact info */}
                        <div className="grid sm:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-200">
                            <div>
                                <Mail className="w-6 h-6 text-gray-400 mb-3" />
                                <div className="text-sm text-gray-500 mb-1">Email</div>
                                <div className="text-gray-900 font-medium">hello@devilslab.co.in</div>
                            </div>
                            <div>
                                <MapPin className="w-6 h-6 text-gray-400 mb-3" />
                                <div className="text-sm text-gray-500 mb-1">Location</div>
                                <div className="text-gray-900 font-medium">Madhapur, Hyderabad</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main Component
export default function HomePagePremium() {
    return (
        <main className="antialiased">
            <PremiumHero />
            <FlagshipPackage />
            <PremiumServices />
            <FlagshipProductSection />
            <SelectedWorkSection />
            <HowWeWork />
            <FAQSection />
            <ContactSection />
        </main>
    );
}
