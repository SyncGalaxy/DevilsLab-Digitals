 'use client';

import { useState, useEffect } from 'react';
import { projects } from '@/lib/projects-data';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';
import Image from 'next/image';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

export default function ProjectDetailPageUltra({ project }: { project: any }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <PhysicsBackground />
            <article className="relative min-h-screen" style={{ background: colors.white }}>
                {/* Back Button */}
                <div className="pt-32 px-6 max-w-7xl mx-auto">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 mb-12 font-semibold group"
                        style={{ color: colors.navy }}
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="px-6 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 
                            className={`text-6xl md:text-7xl lg:text-8xl font-black mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ color: colors.navy }}
                        >
                            {project.title}
                        </h1>
                        <p 
                            className={`text-2xl md:text-3xl mb-8 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.1s'
                            }}
                        >
                            {project.heroTagline}
                        </p>

                                <div className="flex items-center gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                            style={{
                                                background: colors.navy,
                                                color: colors.white,
                                                animationDelay: '0.2s'
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
                                            Visit Live Site
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}

                                    {/* Share / Copy Link */}
                                    <button
                                        type="button"
                                        className={`inline-flex items-center gap-3 px-6 py-3 text-md font-medium border transition-all duration-200 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                        style={{
                                            borderColor: `${colors.navy}20`,
                                            color: colors.navy,
                                            background: colors.white,
                                            animationDelay: '0.25s'
                                        }}
                                        onClick={async () => {
                                            try {
                                                await navigator.clipboard.writeText(window.location.href);
                                                // simple visual feedback could be added; keep minimal
                                            } catch (err) {
                                                console.warn('copy failed', err);
                                            }
                                        }}
                                    >
                                        Copy Link
                                    </button>
                                </div>
                            </div>

                            {/* Hero image - single preview */}
                            <div className="w-full rounded-xl overflow-hidden shadow-sm bg-white">
                                {project.images && project.images.length > 0 ? (
                                    <div className="relative w-full h-80">
                                        <Image src={project.images[0]} alt={project.title} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                ) : project.imageUrl ? (
                                    <div className="relative w-full h-80">
                                        <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                ) : (
                                    <div className="w-full h-80 flex items-center justify-center text-sm" style={{ color: `${colors.navy}66` }}>
                                        No preview available
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Info Grid */}
                <section className="px-6 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div 
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 border ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{
                                background: colors.white,
                                borderColor: `${colors.navy}10`,
                                animationDelay: '0.3s'
                            }}
                        >
                            <div>
                                <h4 
                                    className="text-sm font-bold uppercase tracking-wider mb-3"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Client
                                </h4>
                                <p 
                                    className="text-lg font-semibold"
                                    style={{ color: colors.navy }}
                                >
                                    {project.overview.client}
                                </p>
                            </div>
                            <div>
                                <h4 
                                    className="text-sm font-bold uppercase tracking-wider mb-3"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Services
                                </h4>
                                <p 
                                    className="text-lg font-semibold"
                                    style={{ color: colors.navy }}
                                >
                                    {project.overview.services}
                                </p>
                            </div>
                            <div>
                                <h4 
                                    className="text-sm font-bold uppercase tracking-wider mb-3"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Timeline
                                </h4>
                                <p 
                                    className="text-lg font-semibold"
                                    style={{ color: colors.navy }}
                                >
                                    {project.overview.timeline}
                                </p>
                            </div>
                            <div>
                                <h4 
                                    className="text-sm font-bold uppercase tracking-wider mb-3"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.overview.techStack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-medium"
                                            style={{
                                                color: colors.navy,
                                                border: `1px solid ${colors.navy}20`,
                                                background: `${colors.navy}05`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Two Column Layout: Solution & Results */}
                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* The Challenge & Solution */}
                            <div className={`space-y-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                                <div>
                                    <h2 
                                        className="text-4xl md:text-5xl font-black mb-6"
                                        style={{ color: colors.navy }}
                                    >
                                        The Challenge
                                    </h2>
                                    <p 
                                        className="text-lg leading-relaxed"
                                        style={{ color: `${colors.navy}99` }}
                                    >
                                        {project.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h2 
                                        className="text-4xl md:text-5xl font-black mb-6"
                                        style={{ color: colors.navy }}
                                    >
                                        The Solution
                                    </h2>
                                    <p 
                                        className="text-lg leading-relaxed"
                                        style={{ color: `${colors.navy}99` }}
                                    >
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Results & Impact */}
                            <div className={`${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                                <h2 
                                    className="text-4xl md:text-5xl font-black mb-6"
                                    style={{ color: colors.navy }}
                                >
                                    Results & Impact
                                </h2>
                                <ul className="space-y-4 mb-12">
                                    {project.results.map((result: string, index: number) => (
                                        <li 
                                            key={index}
                                            className="flex items-start gap-4"
                                        >
                                            <CheckCircle 
                                                className="w-6 h-6 flex-shrink-0 mt-1"
                                                style={{ color: colors.navy }}
                                            />
                                            <span 
                                                className="text-lg leading-relaxed"
                                                style={{ color: `${colors.navy}99` }}
                                            >
                                                {result}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Quote */}
                                {project.quote && (
                                    <div 
                                        className="p-8 border-l-4"
                                        style={{ 
                                            borderColor: colors.navy,
                                            background: `${colors.navy}03`
                                        }}
                                    >
                                        <p 
                                            className="text-xl italic mb-4"
                                            style={{ color: colors.navy }}
                                        >
                                            "{project.quote.text}"
                                        </p>
                                        <p 
                                            className="font-semibold"
                                            style={{ color: `${colors.navy}80` }}
                                        >
                                            — {project.quote.author}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline & Team */}
                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <h3 className="text-3xl font-black mb-4" style={{ color: colors.navy }}>Project Timeline</h3>
                                {project.timelineSteps && project.timelineSteps.length > 0 ? (
                                    <ol className="space-y-6">
                                        {project.timelineSteps.map((step: any, idx: number) => (
                                            <li key={idx} className="p-6 border rounded-lg" style={{ borderColor: `${colors.navy}10` }}>
                                                <div className="text-sm font-semibold mb-2" style={{ color: `${colors.navy}80` }}>{step.title}</div>
                                                <div className="text-base" style={{ color: `${colors.navy}99` }}>{step.description}</div>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p style={{ color: `${colors.navy}99` }}>{project.overview?.timeline}</p>
                                )}
                            </div>

                            <aside className="space-y-8 p-6 border rounded-lg" style={{ borderColor: `${colors.navy}10` }}>
                                <h4 className="text-xl font-bold" style={{ color: colors.navy }}>Team</h4>
                                {project.team && project.team.length > 0 ? (
                                    <ul className="space-y-4">
                                        {project.team.map((member: any, i: number) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100">
                                                    {member.avatar ? (
                                                        <Image src={member.avatar} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center" style={{ color: `${colors.navy}66` }}>{member.name?.split(' ').map((n: string) => n[0]).slice(0,2).join('')}</div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-semibold" style={{ color: colors.navy }}>{member.name}</div>
                                                    <div className="text-sm" style={{ color: `${colors.navy}99` }}>{member.role}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ color: `${colors.navy}99` }}>Core team details not published.</p>
                                )}

                                {/* Metrics */}
                                <div>
                                    <h4 className="text-md font-bold mb-3" style={{ color: colors.navy }}>Key Metrics</h4>
                                    {project.metrics ? (
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(project.metrics).map(([k, v]) => (
                                                <div key={k} className="p-3 border rounded" style={{ borderColor: `${colors.navy}10` }}>
                                                    <div className="text-sm" style={{ color: `${colors.navy}80` }}>{k}</div>
                                                    <div className="text-lg font-bold" style={{ color: colors.navy }}>{String(v)}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-sm" style={{ color: `${colors.navy}99` }}>No public metrics available.</div>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 pb-32">
                    <div 
                        className="max-w-4xl mx-auto text-center p-16 border"
                        style={{ borderColor: `${colors.navy}10` }}
                    >
                        <h3 
                            className="text-4xl md:text-5xl font-black mb-6"
                            style={{ color: colors.navy }}
                        >
                            Have a similar project in mind?
                        </h3>
                        <p 
                            className="text-xl mb-8"
                            style={{ color: `${colors.navy}99` }}
                        >
                            Let's build the future together.
                        </p>
                        <Link
                            href="/#contact"
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
                            Get In Touch
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <section className="px-6 pb-40">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-black mb-8" style={{ color: colors.navy }}>Related Case Studies</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects
                                .filter((p) => p.slug !== project.slug && p.tags && project.tags && p.tags.some(t => p.tags.includes(t)))
                                .slice(0,6)
                                .map((p) => (
                                    <Link key={p.slug} href={`/projects/${p.slug}`} className="block p-6 border rounded-lg transition-all hover:scale-105" style={{ borderColor: `${colors.navy}10`, background: colors.white }}>
                                        <div className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>{p.title}</div>
                                        <div className="text-sm" style={{ color: `${colors.navy}99` }}>{p.tagline}</div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            </article>

            {/* Powered By - Outside article for proper footer placement */}
            <footer className="relative w-full border-t py-8" style={{ borderColor: `${colors.navy}20`, background: colors.white, zIndex: 10 }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <a 
                        href="https://waitlist.dendrites.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold bg-gradient-to-r from-black/5 via-black/8 to-black/5 hover:from-black/10 hover:via-black/15 hover:to-black/10 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
                    >
                        {/* Animated background shimmer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        
                        <span className="relative flex items-center gap-1.5 text-black/70 group-hover:text-black transition-colors">
                            <span>Powered by</span>
                            <span className="font-black tracking-tight bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">Dendrites</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70 group-hover:text-black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </footer>
        </>
    );
}
