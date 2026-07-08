"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Mail, Phone, MapPin, Loader2, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import HeroBackground from "@/components/home/hero-cube-background";
import { openWhatsApp } from '@/lib/utils';

// World-Class Hero with 3D Background
const PremiumHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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
                                Launch online. Build your systems.<br />Generate qualified leads.
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                                DevilsLab helps startups, agencies, and small businesses build websites, MVPs, mailing systems, CRM trackers, dashboards, and lead-generation systems.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3.5 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    Book a 15-Minute Growth Audit
                                </a>
                                <a 
                                    href="/services"
                                    className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    View Services
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
                                Launch online. Build your systems.<br />Generate qualified leads.
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed text-center">
                                DevilsLab helps startups, agencies, and small businesses build websites, MVPs, mailing systems, CRM trackers, dashboards, and lead-generation systems.
                            </p>

                            <div className="flex flex-col gap-4">
                                <a 
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3.5 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    Book a 15-Minute Growth Audit
                                </a>
                                <a 
                                    href="/services"
                                    className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200 inline-flex items-center justify-center"
                                >
                                    View Services
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
                <p className="text-gray-500 text-sm">• No fake guarantees • Execution-first</p>
            </div>
        </section>
    );
};

// Flagship Package Section
// Main Offers Section
const FlagshipPackage = () => {
    const packageRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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

    const offerLanes = [
        {
            number: "01",
            title: "Launch Setup",
            price: "from $499",
            label: "For going live",
            description:
                "A clean online foundation for new businesses: website, email, forms, booking or payment flow, and the basic setup needed to look serious from day one.",
            output: "Website / email / forms / launch setup",
            cta: "Start Launch Setup",
            details: [
                "Landing page or business website",
                "Domain email and signature setup",
                "Contact, booking, or payment flow",
                "Basic brand and social setup",
            ],
        },
        {
            number: "02",
            title: "Growth System",
            price: "from $1,497",
            label: "For getting organized leads",
            description:
                "A simple acquisition system for agencies and consultants: defined target profile, researched leads, outreach scripts, CRM tracker, dashboard, and follow-up flow.",
            output: "Leads / scripts / CRM / dashboard",
            cta: "Book Growth Audit",
            details: [
                "Qualified lead list",
                "LinkedIn or email outreach scripts",
                "CRM tracker and sales dashboard",
                "Follow-up process and handoff",
            ],
            featured: true,
        },
        {
            number: "03",
            title: "MVP Build",
            price: "from $2,499+",
            label: "For building product ideas",
            description:
                "A product build path for founders who need a working MVP with frontend, backend, database, authentication, admin panel, APIs, and deployment support.",
            output: "Frontend / backend / database / deploy",
            cta: "Discuss MVP Build",
            details: [
                "Frontend and backend foundation",
                "Database and authentication",
                "Admin panel or internal dashboard",
                "Deployment and technical handoff",
            ],
        },
    ];

    const sprintSteps = [
        {
            day: "Day 1",
            title: "Audit",
            text: "We review your offer, target market, and current lead flow.",
        },
        {
            day: "Day 2",
            title: "Profile",
            text: "We define your ideal client and build the research criteria.",
        },
        {
            day: "Days 3–4",
            title: "Leads",
            text: "We prepare a qualified lead list matched to your target.",
        },
        {
            day: "Day 5",
            title: "Scripts",
            text: "We write outreach messages for LinkedIn or email.",
        },
        {
            day: "Day 6",
            title: "Tracker",
            text: "We set up your CRM tracker and simple sales dashboard.",
        },
        {
            day: "Day 7",
            title: "Handoff",
            text: "We walk you through the system and next actions.",
        },
    ];

    const growthPackages = [
        {
            name: "Starter Audit",
            price: "$499",
            text: "Audit, 50 leads, and a basic tracker.",
        },
        {
            name: "7-Day Growth System",
            price: "$1,497",
            text: "300 leads, outreach scripts, CRM tracker, dashboard, and handoff call.",
            featured: true,
        },
        {
            name: "Premium Growth",
            price: "$2,997",
            text: "700 leads, scripts, CRM, dashboard, and two weeks of support.",
        },
    ];

    return (
        <section
            id="flagship"
            ref={packageRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_45%),radial-gradient(circle_at_top_right,#fde68a,transparent_50%),linear-gradient(180deg,#fafafa,#ffffff)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Intro */}
                    <div className="mb-14">
                        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 rounded-full mb-4">
                                    What We Build
                                </div>

                                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1e293b] leading-tight">
                                    Three clean paths.
                                    <br />
                                    One serious execution team.
                                </h2>
                            </div>

                            <div className="lg:pl-8">
                                <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                    DevilsLab is for businesses that need real digital infrastructure, not vague marketing promises.
                                    We build the assets, systems, trackers, dashboards, websites, and product foundations that help
                                    teams launch and operate better.
                                </p>

                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={bookingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                    >
                                        Book a 15-Minute Growth Audit
                                    </a>

                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                    >
                                        Email DevilsLab
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Offer Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden mb-16">
                        <div className="grid lg:grid-cols-[320px,1fr]">
                            <aside className="bg-[#f8fafc] border-b lg:border-b-0 lg:border-r border-gray-200 p-7 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Studio Offer Board
                                </p>

                                <h3 className="text-2xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    Choose based on what you need finished.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    No fake testimonials. No revenue guarantees. No confusing retainers before scope is clear.
                                </p>

                                <div className="space-y-3">
                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Best first step</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">15-minute audit call</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Delivery style</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Scoped build, then handoff</p>
                                    </div>
                                </div>
                            </aside>

                            <div>
                                {offerLanes.map((offer) => (
                                    <div
                                        key={offer.number}
                                        className={`group grid lg:grid-cols-[110px,1fr,230px] gap-6 p-7 sm:p-8 border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${
                                            offer.featured ? 'bg-white' : 'bg-white hover:bg-[#fbfdff]'
                                        }`}
                                    >
                                        <div>
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold ${
                                                offer.featured
                                                    ? 'bg-[#1e293b] text-white'
                                                    : 'bg-[#f8fafc] text-[#1e293b] border border-gray-200'
                                            }`}>
                                                {offer.number}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h4 className="text-2xl font-bold text-[#1e293b]">
                                                    {offer.title}
                                                </h4>
                                                <span className="px-3 py-1 rounded-full bg-[#f8fafc] border border-gray-200 text-xs font-semibold text-gray-600">
                                                    {offer.label}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed max-w-[900px] mb-5">
                                                {offer.description}
                                            </p>

                                            <div className="mb-5">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Typical Output
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b]">
                                                    {offer.output}
                                                </p>
                                            </div>

                                            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                                                {offer.details.map((item, detailIndex) => (
                                                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <span className="text-[#1e293b] mt-1">•</span>
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="lg:text-right flex flex-col lg:items-end justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Starting
                                                </p>
                                                <p className="text-2xl font-bold text-[#1e293b]">
                                                    {offer.price}
                                                </p>
                                            </div>

                                            <a
                                                href={bookingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                                                    offer.featured
                                                        ? 'bg-[#1e293b] text-white hover:bg-[#1e293b]/90'
                                                        : 'border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#1e293b] hover:text-white'
                                                }`}
                                            >
                                                {offer.cta}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Signature Sprint */}
                    <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 mb-12">
                        <div className="bg-[#1e293b] text-white rounded-[2rem] p-8 sm:p-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50 mb-5">
                                Signature Sprint
                            </p>

                            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                                7-Day Growth System
                            </h3>

                            <p className="text-white/75 leading-relaxed mb-8">
                                A fast client-acquisition setup for agencies and consultants. We define your target,
                                research qualified leads, write outreach scripts, set up a CRM tracker, build a dashboard,
                                and hand everything over in one focused sprint.
                            </p>

                            <div className="grid gap-3">
                                {growthPackages.map((pkg) => (
                                    <div
                                        key={pkg.name}
                                        className={`rounded-2xl border p-5 ${
                                            pkg.featured
                                                ? 'border-white/35 bg-white text-[#1e293b]'
                                                : 'border-white/10 bg-white/[0.04]'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h4 className={`font-semibold ${pkg.featured ? 'text-[#1e293b]' : 'text-white'}`}>
                                                {pkg.name}
                                            </h4>
                                            <span className={`font-bold ${pkg.featured ? 'text-[#1e293b]' : 'text-white'}`}>
                                                {pkg.price}
                                            </span>
                                        </div>
                                        <p className={`text-sm leading-relaxed ${pkg.featured ? 'text-gray-600' : 'text-white/62'}`}>
                                            {pkg.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-sm">
                            <div className="flex items-center justify-between gap-4 mb-8">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-2">
                                        How The Sprint Moves
                                    </p>
                                    <h3 className="text-2xl font-bold text-[#1e293b]">
                                        Seven days, one working system.
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-0">
                                {sprintSteps.map((step, index) => (
                                    <div key={step.day} className="relative grid grid-cols-[88px,1fr] gap-5 pb-6 last:pb-0">
                                        {index !== sprintSteps.length - 1 && (
                                            <div className="absolute left-[43px] top-9 bottom-0 w-px bg-gray-200" />
                                        )}

                                        <div className="relative z-10">
                                            <div className="w-[86px] rounded-full bg-[#f8fafc] border border-gray-200 px-3 py-2 text-center">
                                                <span className="text-xs font-semibold text-[#1e293b]">
                                                    {step.day}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-base font-semibold text-[#1e293b] mb-1">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={bookingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                            >
                                Book Growth Audit
                            </a>
                        </div>
                    </div>

                    {/* Bottom Trust + Payment */}
                    <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6">
                        <div className="bg-white/90 border border-gray-200 rounded-2xl p-6 sm:p-7">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Important Note
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                DevilsLab does not guarantee revenue or closed clients. We build systems, assets,
                                lead lists, trackers, dashboards, websites, and launch infrastructure that help businesses
                                operate and grow more effectively.
                            </p>
                        </div>

                        <div className="bg-white/90 border border-gray-200 rounded-2xl p-6 sm:p-7">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                Payment Structure
                            </p>

                            <div className="space-y-2 text-sm text-gray-700">
                                <p><span className="font-semibold text-[#1e293b]">Under $500:</span> 100% upfront</p>
                                <p><span className="font-semibold text-[#1e293b]">$1,497–$2,997:</span> 50% upfront</p>
                                <p><span className="font-semibold text-[#1e293b]">MVP/custom:</span> 40% upfront, 30% milestone, 30% before handoff</p>
                            </div>

                            <p className="text-xs text-gray-500 mt-4">
                                Invoice or PayPal payment link can be shared after scope is confirmed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services - List
// What DevilsLab Builds Section
const PremiumServices = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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

    const buildLanes = [
        {
            number: "01",
            title: "Launch & Online Presence",
            description:
                "For businesses that need to look serious online and go live with the right foundation.",
            includes: [
                "Websites & landing pages",
                "Domain email and business setup",
                "Contact forms, booking links, and payment flow",
                "Start-to-launch support",
            ],
            output: "Website / email / forms / launch flow",
        },
        {
            number: "02",
            title: "Growth & Operations",
            description:
                "For teams that need qualified leads, better tracking, and a simple system to manage follow-up.",
            includes: [
                "Lead generation systems",
                "CRM trackers and sales dashboards",
                "Outreach scripts and follow-up process",
                "Workflow automation",
            ],
            output: "Leads / CRM / dashboard / automation",
            featured: true,
        },
        {
            number: "03",
            title: "Product & MVP Builds",
            description:
                "For founders who need to turn a product idea into a working digital product or internal platform.",
            includes: [
                "MVP and product development",
                "Frontend and backend setup",
                "Database, authentication, and admin panels",
                "Deployment and technical handoff",
            ],
            output: "Frontend / backend / database / deployment",
        },
    ];

    return (
        <section
            id="services"
            ref={servicesRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#fef3c7,transparent_45%),radial-gradient(circle_at_top_right,#dbeafe,transparent_45%),linear-gradient(180deg,#ffffff,#f8fafc)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                Services
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                What DevilsLab
                                <br />
                                Builds
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                We build practical digital infrastructure for businesses that need to launch,
                                organize operations, generate leads, or turn a product idea into something usable.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Clean Build Lanes */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[340px,1fr]">
                            <aside className="bg-[#f8fafc] border-b xl:border-b-0 xl:border-r border-gray-200 p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Build Menu
                                </p>

                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    Three lanes. Clear scope. Clean handoff.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    Instead of selling random services, we group everything into the three types of systems
                                    most businesses need: launch, growth, and product.
                                </p>

                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Start With Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </aside>

                            <div>
                                {buildLanes.map((lane) => (
                                    <div
                                        key={lane.number}
                                        className={`grid lg:grid-cols-[90px,1fr,280px] gap-6 p-7 sm:p-8 lg:p-10 border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${
                                            lane.featured ? 'bg-white' : 'bg-white hover:bg-[#fbfdff]'
                                        }`}
                                    >
                                        <div>
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold ${
                                                lane.featured
                                                    ? 'bg-[#1e293b] text-white'
                                                    : 'bg-[#f8fafc] text-[#1e293b] border border-gray-200'
                                            }`}>
                                                {lane.number}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-3">
                                                {lane.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed max-w-[820px] mb-6">
                                                {lane.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                                                {lane.includes.map((item, index) => (
                                                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <span className="text-[#1e293b] mt-1">•</span>
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="lg:text-right flex flex-col lg:items-end justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Typical Output
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b] leading-relaxed">
                                                    {lane.output}
                                                </p>
                                            </div>

                                            <a
                                                href={bookingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                                                    lane.featured
                                                        ? 'bg-[#1e293b] text-white hover:bg-[#1e293b]/90'
                                                        : 'border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#1e293b] hover:text-white'
                                                }`}
                                            >
                                                Discuss This
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Small Note */}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        Every build is scoped around useful deliverables your team can operate after handoff.
                    </p>
                </div>
            </div>
        </section>
    );
};

// How We Work Section
// Process Section
const HowWeWork = () => {
    const workRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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

    const processSteps = [
        {
            number: "01",
            title: "Audit",
            description:
                "We review your current setup, offer, website, lead flow, tools, and the actual problem you need solved.",
            output: "Clear understanding of what needs to be built",
        },
        {
            number: "02",
            title: "Plan",
            description:
                "We map the scope, deliverables, timeline, tools, and the simplest execution path before any build starts.",
            output: "Project plan, scope, and next steps",
        },
        {
            number: "03",
            title: "Build",
            description:
                "We build the website, MVP, CRM tracker, dashboard, email setup, lead system, automation, or launch flow.",
            output: "Working digital infrastructure",
            featured: true,
        },
        {
            number: "04",
            title: "Handoff",
            description:
                "We explain what was built, how it works, where everything lives, and how your team can use it.",
            output: "Clean handoff and operating instructions",
        },
        {
            number: "05",
            title: "Support",
            description:
                "We help with final checks, small adjustments, launch questions, and post-handoff clarity based on the scope.",
            output: "Stable launch and smoother operation",
        },
    ];

    return (
        <section
            id="how-we-work"
            ref={workRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_42%),radial-gradient(circle_at_top_right,#fef3c7,transparent_45%),linear-gradient(180deg,#f8fafc,#ffffff)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                Process
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                How the work
                                <br />
                                moves forward.
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                We keep the process simple: understand the problem, define the scope, build the system,
                                hand it over clearly, and support the launch where needed.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Process Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[340px,1fr]">
                            <aside className="bg-[#f8fafc] border-b xl:border-b-0 xl:border-r border-gray-200 p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Execution Model
                                </p>

                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    Simple enough to follow. Structured enough to trust.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    Every project is handled with clear scope, visible deliverables, and a handoff your team can understand.
                                </p>

                                <div className="space-y-3">
                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Before build</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Audit and scope</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">During build</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Execution and updates</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">After build</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Handoff and support</p>
                                    </div>
                                </div>
                            </aside>

                            <div>
                                {processSteps.map((step) => (
                                    <div
                                        key={step.number}
                                        className={`grid lg:grid-cols-[96px,1fr,280px] gap-6 p-7 sm:p-8 lg:p-10 border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${
                                            step.featured ? 'bg-white' : 'bg-white hover:bg-[#fbfdff]'
                                        }`}
                                    >
                                        <div>
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold ${
                                                step.featured
                                                    ? 'bg-[#1e293b] text-white'
                                                    : 'bg-[#f8fafc] text-[#1e293b] border border-gray-200'
                                            }`}>
                                                {step.number}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-3">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed max-w-[900px]">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="lg:text-right flex flex-col lg:items-end justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Output
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b] leading-relaxed">
                                                    {step.output}
                                                </p>
                                            </div>

                                            {step.featured && (
                                                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#1e293b] text-white text-xs font-semibold">
                                                    Core Build Phase
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Small Note */}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        The goal is not to make the process complicated. The goal is to make the build clear, useful, and handoff-ready.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Flagship Product Section
// Selected Work & Associated Builds Section
const FlagshipProductSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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

    const builds = [
        {
            number: "01",
            name: "Dendrites",
            type: "Website & Ecosystem",
            description:
                "A digital product ecosystem connected to crypto payment infrastructure, product pages, launch messaging, and user-facing web experiences.",
            scope: "Website / ecosystem / product messaging",
            link: "https://dendrites.ai",
        },
        {
            number: "02",
            name: "Dendrites Waitlist",
            type: "Waitlist Funnel",
            description:
                "A focused waitlist and early-access funnel built to support registrations, user interest, and launch-stage community growth.",
            scope: "Waitlist / funnel / early access flow",
            link: "https://waitlist.dendrites.ai",
        },
        {
            number: "03",
            name: "Dendrites Testnet",
            type: "Product Testing Environment",
            description:
                "A product-facing testnet environment connected to payment flows, user testing, and early product validation.",
            scope: "Testnet / product UI / validation flow",
            link: "https://dendrites.xyz",
        },
        {
            number: "04",
            name: "SyncGalaxy",
            type: "Web & Business Platform",
            description:
                "A business platform connected to team workflows, product structure, and web-based operational infrastructure.",
            scope: "Platform / web system / internal product",
            link: "https://syncgalaxy.io",
        },
        {
            number: "05",
            name: "AZ Mobile",
            type: "Business Web Presence",
            description:
                "A business-facing web presence built to support visibility, service information, and customer contact paths.",
            scope: "Website / business presence / contact flow",
            link: "https://azmobileinc.com",
        },
    ];

    return (
        <section
            id="selected-work"
            ref={sectionRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_42%),radial-gradient(circle_at_top_right,#fef3c7,transparent_45%),linear-gradient(180deg,#f8fafc,#ffffff)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                Selected Work
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                Associated builds
                                <br />
                                connected to our work.
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                Projects and systems connected to our team’s work across websites, launch funnels,
                                product ecosystems, business platforms, and growth infrastructure.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Work Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[360px,1fr]">
                            <aside className="bg-[#f8fafc] border-b xl:border-b-0 xl:border-r border-gray-200 p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Work Note
                                </p>

                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    Real builds, not fake client proof.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    These are selected associated builds and product ecosystems connected to our team’s
                                    work. We do not present them as paid client logos unless that relationship is confirmed.
                                </p>

                                <div className="space-y-3">
                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Focus</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Web, product, launch systems</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Positioning</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Associated builds, not fake clients</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Output style</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Practical digital infrastructure</p>
                                    </div>
                                </div>
                            </aside>

                            <div>
                                {builds.map((build) => (
                                    <div
                                        key={build.number}
                                        className="grid lg:grid-cols-[96px,1fr,260px] gap-6 p-7 sm:p-8 lg:p-10 border-b border-gray-200 last:border-b-0 transition-colors duration-200 hover:bg-[#fbfdff]"
                                    >
                                        <div>
                                            <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] text-[#1e293b] border border-gray-200 flex items-center justify-center text-sm font-bold">
                                                {build.number}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b]">
                                                    {build.name}
                                                </h3>

                                                <span className="px-3 py-1 rounded-full bg-[#f8fafc] border border-gray-200 text-xs font-semibold text-gray-600">
                                                    {build.type}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed max-w-[900px] mb-5">
                                                {build.description}
                                            </p>

                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Scope
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b]">
                                                    {build.scope}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="lg:text-right flex flex-col lg:items-end justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Status
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b]">
                                                    Associated Build
                                                </p>
                                            </div>

                                            <a
                                                href={build.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#1e293b] text-[#1e293b] text-sm font-semibold hover:bg-[#1e293b] hover:text-white transition-all duration-200"
                                            >
                                                Visit
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Small Trust Note */}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        This section is intentionally written as associated work, not as fake testimonials or unverified client logos.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Selected Work Section
// Who We Help Section
const SelectedWorkSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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

    const helpGroups = [
        {
            number: "01",
            title: "Businesses Preparing To Launch",
            description:
                "For founders and small businesses that need a serious online presence, email setup, forms, booking flow, and launch-ready infrastructure.",
            examples: ["Startups", "Small businesses", "Local service brands"],
            fit: "Launch Setup",
        },
        {
            number: "02",
            title: "Teams That Need Better Lead Flow",
            description:
                "For agencies, consultants, and service businesses that need qualified leads, outreach scripts, CRM tracking, and follow-up structure.",
            examples: ["Agencies", "Consultants", "Service businesses"],
            fit: "Growth System",
            featured: true,
        },
        {
            number: "03",
            title: "Founders Building Products",
            description:
                "For SaaS founders, Web3 teams, and operators who need a working MVP, dashboard, backend, or internal product system.",
            examples: ["SaaS founders", "Web3 teams", "Product operators"],
            fit: "MVP Build",
        },
    ];

    return (
        <section
            id="who-we-help"
            ref={sectionRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#fef3c7,transparent_42%),radial-gradient(circle_at_top_right,#dbeafe,transparent_45%),linear-gradient(180deg,#ffffff,#f8fafc)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                Who We Help
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                Built for teams
                                <br />
                                that need execution.
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                DevilsLab is a fit when you need a website, system, lead process, CRM tracker, dashboard,
                                or product build finished properly — not just ideas, designs, or vague strategy.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Help Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[340px,1fr]">
                            <aside className="bg-[#f8fafc] border-b xl:border-b-0 xl:border-r border-gray-200 p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Best Fit
                                </p>

                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    Clear need. Clear scope. Clear handoff.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    We work best with teams that already know they need something built, organized,
                                    launched, tracked, or handed off cleanly.
                                </p>

                                <div className="space-y-3">
                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Good fit</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">You need execution and systems</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Not ideal for</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Guaranteed revenue promises</p>
                                    </div>
                                </div>
                            </aside>

                            <div>
                                {helpGroups.map((group) => (
                                    <div
                                        key={group.number}
                                        className={`grid lg:grid-cols-[96px,1fr,240px] gap-6 p-7 sm:p-8 lg:p-10 border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${
                                            group.featured ? 'bg-white' : 'bg-white hover:bg-[#fbfdff]'
                                        }`}
                                    >
                                        <div>
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold ${
                                                group.featured
                                                    ? 'bg-[#1e293b] text-white'
                                                    : 'bg-[#f8fafc] text-[#1e293b] border border-gray-200'
                                            }`}>
                                                {group.number}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-3">
                                                {group.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed max-w-[900px] mb-6">
                                                {group.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {group.examples.map((example) => (
                                                    <span
                                                        key={example}
                                                        className="px-3 py-1.5 rounded-full bg-[#f8fafc] border border-gray-200 text-xs font-semibold text-gray-600"
                                                    >
                                                        {example}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="lg:text-right flex flex-col lg:items-end justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                                    Best Match
                                                </p>
                                                <p className="text-sm font-semibold text-[#1e293b]">
                                                    {group.fit}
                                                </p>
                                            </div>

                                            <a
                                                href={bookingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                                                    group.featured
                                                        ? 'bg-[#1e293b] text-white hover:bg-[#1e293b]/90'
                                                        : 'border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#1e293b] hover:text-white'
                                                }`}
                                            >
                                                Discuss Fit
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Small Note */}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        If the project is not a fit, we will say that clearly during the audit call instead of forcing the wrong package.
                    </p>
                </div>
            </div>
        </section>
    );
};

// FAQ Section
// FAQ Section
const FAQSection = () => {
    const faqRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";

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
            question: "What does DevilsLab actually build?",
            answer:
                "DevilsLab builds practical digital infrastructure: websites, landing pages, business email setup, booking flows, CRM trackers, dashboards, lead-generation systems, workflow automation, and MVP/product builds.",
        },
        {
            question: "Which offer should I choose first?",
            answer:
                "If you need to go online, start with Launch Setup. If you need leads and tracking, choose the Growth System. If you are building a product, choose MVP Build. If you are not sure, book the 15-minute audit and we will suggest the right path.",
        },
        {
            question: "What is included in the 7-Day Growth System?",
            answer:
                "The 7-Day Growth System includes an ideal client profile, qualified lead research, outreach scripts, CRM tracker, simple sales dashboard, follow-up process, and a handoff call so you know how to use the system.",
        },
        {
            question: "Do you guarantee leads, revenue, or closed clients?",
            answer:
                "No. DevilsLab does not guarantee revenue, closed clients, or a specific number of leads. We build the systems, assets, trackers, dashboards, lead lists, websites, and infrastructure that help your business operate and grow more effectively.",
        },
        {
            question: "Can you build a complete website or MVP?",
            answer:
                "Yes. We can build websites, landing pages, MVPs, frontend/backend systems, databases, login flows, admin panels, dashboards, and deployment-ready product foundations based on the agreed scope.",
        },
        {
            question: "How does payment work?",
            answer:
                "For small projects under $500, payment is usually 100% upfront. For $1,497–$2,997 projects, payment is usually 50% upfront. MVP and custom builds can be split as 40% upfront, 30% milestone, and 30% before handoff.",
        },
        {
            question: "Can I pay through PayPal?",
            answer:
                "Yes, PayPal can be used where available. After the audit call and scope confirmation, we can share an invoice or payment link based on the project.",
        },
        {
            question: "Do you work only with businesses in Hyderabad?",
            answer:
                "No. DevilsLab can work remotely with startups, agencies, consultants, small businesses, SaaS founders, Web3 teams, and service businesses outside Hyderabad as well.",
        },
    ];

    return (
        <section
            id="faq"
            ref={faqRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_42%),radial-gradient(circle_at_top_right,#fef3c7,transparent_45%),linear-gradient(180deg,#f8fafc,#ffffff)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                FAQ
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                Questions before
                                <br />
                                we start?
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                Clear answers about how DevilsLab works, what we build, how payments work,
                                and what we do not promise.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[340px,1fr]">
                            <aside className="bg-[#f8fafc] border-b xl:border-b-0 xl:border-r border-gray-200 p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                                    Before The Call
                                </p>

                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1e293b] mb-4">
                                    No vague promises. No confusing scope.
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                                    The audit call is used to understand your need, confirm the right offer,
                                    and avoid forcing the wrong package.
                                </p>

                                <div className="space-y-3">
                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Call length</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">15 minutes</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Goal</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Find the right build path</p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                                        <p className="text-xs text-gray-500 mb-1">Promise</p>
                                        <p className="text-sm font-semibold text-[#1e293b]">Clear scope, not fake guarantees</p>
                                    </div>
                                </div>
                            </aside>

                            <div>
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <div
                                            key={index}
                                            className="border-b border-gray-200 last:border-b-0"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="w-full px-7 sm:px-8 lg:px-10 py-6 text-left transition-colors duration-200 hover:bg-[#fbfdff]"
                                            >
                                                <div className="grid sm:grid-cols-[56px,1fr,40px] gap-4 sm:gap-6 items-start">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                                        isOpen
                                                            ? 'bg-[#1e293b] text-white'
                                                            : 'bg-[#f8fafc] text-[#1e293b] border border-gray-200'
                                                    }`}>
                                                        {String(index + 1).padStart(2, "0")}
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] leading-tight pr-2">
                                                            {faq.question}
                                                        </h3>
                                                    </div>

                                                    <div className="hidden sm:flex justify-end">
                                                        <span className={`w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-2xl text-[#1e293b] transition-transform duration-300 ${
                                                            isOpen ? 'rotate-45' : 'rotate-0'
                                                        }`}>
                                                            +
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>

                                            <div
                                                className={`grid transition-all duration-500 ease-in-out ${
                                                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-7 sm:px-8 lg:px-10 pb-7 sm:pl-[120px] lg:pl-[146px]">
                                                        <p className="text-base text-gray-600 leading-relaxed max-w-[900px]">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Small Note */}
                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        Still unsure? Book the audit call. If the project is not a fit, we will say that clearly.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Contact Section
// Contact Section
const ContactSection = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const honeypotRef = useRef<HTMLInputElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const bookingLink = "https://calendly.com/growth-devilslab/30min";
    const contactEmail = "work@devilslab.co.in";
    const businessWhatsAppNumber = "15162656596";
    const displayPhone = "+1 (516) 265-6596";

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
        name: z.string().min(2, "Name must be at least 2 characters"),
        company: z.string().optional(),
        siteUrl: z.string().optional(),
        email: z.string().email("Enter a valid email address"),
        phone: z.string().min(7, "Phone number is required"),
        needHelp: z.string().min(1, "Please select what you need help with"),
        budgetRange: z.string().min(1, "Please select a budget range"),
        timeline: z.string().min(1, "Please select a timeline"),
        preferredContact: z.string().min(1, "Please select a preferred contact method"),
        message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            siteUrl: "",
            email: "",
            phone: "",
            needHelp: "",
            budgetRange: "",
            timeline: "",
            preferredContact: "WhatsApp",
            message: "",
        },
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const prefilledMessage = params.get("message");

            if (prefilledMessage) {
                form.setValue("message", prefilledMessage);
                window.history.replaceState({}, "", "/#contact");
            }
        }
    }, [form]);

    const buildWhatsAppMessage = (values: z.infer<typeof formSchema>) => {
        return `Hi DevilsLab team 👋

I came from the DevilsLab website and want to discuss a project.

Name:
${values.name}

Company:
${values.company || "Not provided"}

Phone:
${values.phone}

Email:
${values.email}

Website:
${values.siteUrl || "Not provided"}

Need help with:
${values.needHelp}

Budget range:
${values.budgetRange}

Timeline:
${values.timeline}

Preferred contact:
${values.preferredContact}

Project details:
${values.message}

Source:
DevilsLab Homepage Contact`;
    };

    const openBusinessWhatsApp = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    const saveLeadToGoogleSheets = async (values: z.infer<typeof formSchema>) => {
        const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

        if (!scriptUrl || scriptUrl === "your_google_apps_script_url_here") {
            throw new Error("Google Script URL not configured");
        }

        await fetch(scriptUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: values.name,
                company: values.company,
                website: values.siteUrl,
                email: values.email,
                phone: values.phone,
                needHelp: values.needHelp,
                budgetRange: values.budgetRange,
                timeline: values.timeline,
                preferredContact: values.preferredContact,
                message: values.message,
                source: "Homepage - Premium Contact Section",
                pageUrl: typeof window !== "undefined" ? window.location.href : "",
            }),
        });
    };

    const sendMailgunNotification = async (values: z.infer<typeof formSchema>) => {
        const payload = {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            service: values.needHelp,
            budget: values.budgetRange,
            message: [
                values.message,
                values.siteUrl ? `Website/Social: ${values.siteUrl}` : null,
                values.timeline ? `Timeline: ${values.timeline}` : null,
                values.preferredContact ? `Preferred Contact: ${values.preferredContact}` : null,
            ]
                .filter(Boolean)
                .join("\n\n"),
            website: honeypotRef.current?.value || "",
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || !data.ok) {
            throw new Error(data.error || "Email notification failed.");
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        const whatsappMessage = buildWhatsAppMessage(values);

        // Open WhatsApp immediately after validation so the browser does not block it.
        openBusinessWhatsApp(whatsappMessage);

        try {
            await saveLeadToGoogleSheets(values);

            // Send Mailgun email notification — non-blocking, silently logged if it fails
            sendMailgunNotification(values).catch((err) =>
                console.error("Mailgun notification error:", err)
            );

            toast({
                title: "Inquiry prepared",
                description: "WhatsApp opened with your project details. Your inquiry was also saved.",
            });

            form.reset({
                name: "",
                company: "",
                siteUrl: "",
                email: "",
                phone: "",
                needHelp: "",
                budgetRange: "",
                timeline: "",
                preferredContact: "WhatsApp",
                message: "",
            });
        } catch (error) {
            console.error("Contact form error:", error);

            toast({
                title: "WhatsApp opened",
                description: "Your WhatsApp message is ready. Google Sheets/email may need setup.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        "w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-[#1e293b] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1e293b] focus:ring-4 focus:ring-[#1e293b]/10";

    const selectClass =
        "w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-[#1e293b] outline-none transition-all duration-200 focus:border-[#1e293b] focus:ring-4 focus:ring-[#1e293b]/10";

    return (
        <section
            id="contact"
            ref={contactRef}
            className="min-h-screen py-24 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_42%),radial-gradient(circle_at_top_right,#fef3c7,transparent_45%),linear-gradient(180deg,#f8fafc,#ffffff)]"
        >
            <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {/* Header */}
                    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-end mb-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
                                Contact
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                                Ready to build your
                                <br />
                                launch or growth system?
                            </h2>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-[900px]">
                                Tell us what you need built. We will review your details and continue the conversation
                                through WhatsApp, email, or a short growth audit call.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                >
                                    Book a 15-Minute Growth Audit
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-all duration-200"
                                >
                                    Email DevilsLab
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Board */}
                    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
                        <div className="grid xl:grid-cols-[420px,1fr]">
                            {/* Left Panel */}
                            <aside className="bg-[#1e293b] text-white p-7 sm:p-8 lg:p-10 xl:p-12">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50 mb-5">
                                    Direct Contact
                                </p>

                                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-5">
                                    Start with the right details.
                                </h3>

                                <p className="text-white/70 leading-relaxed mb-8">
                                    The form opens WhatsApp with your project details already formatted, so the conversation
                                    starts cleanly and nothing important is missed.
                                </p>

                                <div className="space-y-3 mb-8">
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-start gap-4 hover:bg-white/[0.08] transition-all duration-200"
                                    >
                                        <Mail className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-white/45 mb-1">Email</p>
                                            <p className="text-sm font-semibold text-white">{contactEmail}</p>
                                        </div>
                                    </a>

                                    <a
                                        href={`https://wa.me/${businessWhatsAppNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-start gap-4 hover:bg-white/[0.08] transition-all duration-200"
                                    >
                                        <Phone className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-white/45 mb-1">WhatsApp / Phone</p>
                                            <p className="text-sm font-semibold text-white">{displayPhone}</p>
                                        </div>
                                    </a>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-white/45 mb-1">Location</p>
                                            <p className="text-sm font-semibold text-white">USA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-white text-[#1e293b] p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                        Best first step
                                    </p>
                                    <p className="text-lg font-bold mb-3">
                                        15-Minute Growth Audit
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                                        Best if you want us to understand your requirement and suggest the right path.
                                    </p>
                                    <a
                                        href={bookingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1e293b] text-white text-sm font-semibold hover:bg-[#1e293b]/90 transition-all duration-200"
                                    >
                                        Book Audit
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </aside>

                            {/* Form */}
                            <div className="p-7 sm:p-8 lg:p-10 xl:p-12">
                                <div className="mb-8">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 mb-3">
                                        Project Inquiry
                                    </p>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-3">
                                        Send the details once. Continue on WhatsApp.
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-[800px]">
                                        After you submit, WhatsApp opens with a clean project summary addressed to the DevilsLab business account.
                                    </p>
                                </div>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <input
                                                                {...field}
                                                                placeholder="Your name *"
                                                                className={inputClass}
                                                                suppressHydrationWarning
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <input
                                                                {...field}
                                                                placeholder="Phone / WhatsApp number *"
                                                                className={inputClass}
                                                                suppressHydrationWarning
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <input
                                                                {...field}
                                                                type="email"
                                                                placeholder="Email address *"
                                                                className={inputClass}
                                                                suppressHydrationWarning
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="company"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <input
                                                                {...field}
                                                                placeholder="Company / business name"
                                                                className={inputClass}
                                                                suppressHydrationWarning
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="siteUrl"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <input
                                                            {...field}
                                                            placeholder="Website or social link, if any"
                                                            className={inputClass}
                                                            suppressHydrationWarning
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="needHelp"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <select {...field} className={selectClass} suppressHydrationWarning>
                                                                <option value="">What do you need help with? *</option>
                                                                <option value="Launch Setup">Launch Setup</option>
                                                                <option value="Growth System">Growth System</option>
                                                                <option value="7-Day Growth System">7-Day Growth System</option>
                                                                <option value="MVP / Product Build">MVP / Product Build</option>
                                                                <option value="Website / Landing Page">Website / Landing Page</option>
                                                                <option value="CRM / Dashboard / Automation">CRM / Dashboard / Automation</option>
                                                                <option value="Not sure yet">Not sure yet</option>
                                                            </select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="budgetRange"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <select {...field} className={selectClass} suppressHydrationWarning>
                                                                <option value="">Budget range *</option>
                                                                <option value="Under $500">Under $500</option>
                                                                <option value="$500 - $1,500">$500 - $1,500</option>
                                                                <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                                                                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                                                                <option value="$5,000+">$5,000+</option>
                                                                <option value="Need guidance">Need guidance</option>
                                                            </select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="timeline"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <select {...field} className={selectClass} suppressHydrationWarning>
                                                                <option value="">Timeline *</option>
                                                                <option value="Immediately">Immediately</option>
                                                                <option value="This week">This week</option>
                                                                <option value="Within 2 weeks">Within 2 weeks</option>
                                                                <option value="This month">This month</option>
                                                                <option value="Flexible">Flexible</option>
                                                            </select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="preferredContact"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <select {...field} className={selectClass} suppressHydrationWarning>
                                                                <option value="WhatsApp">Prefer WhatsApp</option>
                                                                <option value="Email">Prefer Email</option>
                                                                <option value="Call">Prefer Call</option>
                                                                <option value="Either">Either is fine</option>
                                                            </select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <textarea
                                                            {...field}
                                                            placeholder="Tell us what you want to build, fix, launch, or improve *"
                                                            rows={5}
                                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-[#1e293b] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1e293b] focus:ring-4 focus:ring-[#1e293b]/10 resize-none"
                                                            suppressHydrationWarning
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {/* Honeypot — hidden from real users, caught by the API to block bots */}
                                        <input
                                            ref={honeypotRef}
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            className="hidden"
                                            aria-hidden="true"
                                        />

                                        <div className="grid lg:grid-cols-[1fr,auto] gap-4 items-center pt-2">
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                By submitting, your details are prepared for WhatsApp and saved to Google Sheets if your Apps Script is configured.
                                            </p>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#25D366]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_14px_35px_rgba(37,211,102,0.25)]"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Opening WhatsApp...
                                                    </>
                                                ) : (
                                                    <>
                                                        <MessageCircle className="w-4 h-4" />
                                                        Send & Open WhatsApp
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500 max-w-[900px] mx-auto leading-relaxed">
                        Typical response time: within 24 hours on business days. For urgent requests, WhatsApp is the fastest path.
                    </p>
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