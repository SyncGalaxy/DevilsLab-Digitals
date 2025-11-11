'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';
import { projects } from '@/lib/projects-data';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

export default function ProjectsPageUltra() {
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
                        <h1 
                            className={`text-7xl md:text-8xl lg:text-9xl font-black mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ color: colors.navy }}
                        >
                            Our Work
                        </h1>
                        <p 
                            className={`text-xl md:text-2xl max-w-3xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.1s'
                            }}
                        >
                            Transforming ideas into exceptional digital experiences through cutting-edge technology and innovative design.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div
                                    key={project.slug}
                                    className={`group bg-white border transition-all duration-500 hover:shadow-2xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                    style={{
                                        borderColor: `${colors.navy}10`,
                                        animationDelay: `${0.2 + index * 0.1}s`
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
                                    {/* Project Image */}
                                    <div 
                                        className="h-64 flex items-center justify-center overflow-hidden"
                                        style={{ background: `${colors.navy}05` }}
                                    >
                                        {project.imageUrl ? (
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span 
                                                className="text-6xl font-black opacity-10"
                                                style={{ color: colors.navy }}
                                            >
                                                {project.title.substring(0, 2).toUpperCase()}
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-8">
                                        <h3 
                                            className="text-2xl font-bold mb-3"
                                            style={{ color: colors.navy }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p 
                                            className="mb-4 leading-relaxed"
                                            style={{ color: `${colors.navy}99` }}
                                        >
                                            {project.tagline}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-sm font-medium"
                                                    style={{
                                                        color: colors.navy,
                                                        border: `1px solid ${colors.navy}20`,
                                                        background: `${colors.navy}05`
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="flex items-center gap-2 text-sm font-semibold group/link"
                                                style={{ color: colors.navy }}
                                            >
                                                View Case Study
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-semibold group/link"
                                                    style={{ color: `${colors.navy}99` }}
                                                >
                                                    Live Site
                                                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
