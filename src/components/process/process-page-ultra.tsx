'use client';

import { useEffect, useState } from 'react';
import { Lightbulb, Pencil, Code, TestTube, Rocket, HeartHandshake } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

const processSteps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        icon: Lightbulb,
        activities: [
            'Stakeholder interviews and requirement gathering',
            'Market research and competitive analysis',
            'Technical feasibility assessment',
            'Project roadmap and milestone planning'
        ]
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        icon: Pencil,
        activities: [
            'User experience (UX) research and personas',
            'Wireframing and information architecture',
            'Visual design and brand integration',
            'Interactive prototypes and user testing'
        ]
    },
    {
        number: '03',
        title: 'Development',
        icon: Code,
        activities: [
            'Agile sprint planning and setup',
            'Front-end and back-end development',
            'API integration and database design',
            'Code reviews and version control'
        ]
    },
    {
        number: '04',
        title: 'Testing & QA',
        icon: TestTube,
        activities: [
            'Automated and manual testing protocols',
            'Performance and security audits',
            'Cross-browser and device compatibility',
            'Bug tracking and resolution'
        ]
    },
    {
        number: '05',
        title: 'Launch & Deployment',
        icon: Rocket,
        activities: [
            'Production environment setup',
            'Data migration and system integration',
            'Soft launch and monitoring',
            'Training and documentation delivery'
        ]
    },
    {
        number: '06',
        title: 'Support & Optimization',
        icon: HeartHandshake,
        activities: [
            'Post-launch monitoring and analytics',
            'User feedback collection and analysis',
            'Continuous improvement iterations',
            'Ongoing maintenance and updates'
        ]
    }
];

export default function ProcessPageUltra() {
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
                            From Concept to Creation
                        </h1>
                        <p 
                            className={`text-xl md:text-2xl max-w-3xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.1s'
                            }}
                        >
                            Our proven methodology combines strategic thinking, creative design, and technical excellence to deliver exceptional digital products.
                        </p>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.number}
                                    className={`flex flex-col lg:flex-row gap-12 items-start ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                >
                                    {/* Large Number */}
                                    <div className="flex-shrink-0">
                                        <span 
                                            className="text-9xl md:text-[12rem] font-black leading-none block"
                                            style={{ 
                                                color: `${colors.navy}10`,
                                                WebkitTextStroke: `2px ${colors.navy}20`
                                            }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Card with Content */}
                                    <div 
                                        className="flex-1 p-10 border transition-all duration-500 hover:shadow-2xl group"
                                        style={{
                                            background: colors.white,
                                            borderColor: `${colors.navy}10`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 20px 60px ${colors.navy}15`;
                                            e.currentTarget.style.borderColor = `${colors.navy}30`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.borderColor = `${colors.navy}10`;
                                        }}
                                    >
                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div 
                                                className="p-4 transition-all duration-300"
                                                style={{ 
                                                    background: `${colors.navy}05`,
                                                    border: `2px solid ${colors.navy}10`
                                                }}
                                            >
                                                <Icon 
                                                    className="w-8 h-8 transition-transform group-hover:scale-110"
                                                    style={{ color: colors.navy }}
                                                />
                                            </div>
                                            <h2 
                                                className="text-4xl font-black"
                                                style={{ color: colors.navy }}
                                            >
                                                {step.title}
                                            </h2>
                                        </div>

                                        {/* Activities List */}
                                        <ul className="space-y-3">
                                            {step.activities.map((activity, actIndex) => (
                                                <li 
                                                    key={actIndex}
                                                    className="flex items-start gap-3 text-lg"
                                                >
                                                    <span 
                                                        className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                        style={{ background: colors.navy }}
                                                    />
                                                    <span style={{ color: `${colors.navy}90` }}>
                                                        {activity}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-32 px-6">
                    <div 
                        className="max-w-4xl mx-auto text-center p-16 border"
                        style={{ borderColor: `${colors.navy}10` }}
                    >
                        <h3 
                            className="text-4xl md:text-5xl font-black mb-6"
                            style={{ color: colors.navy }}
                        >
                            Ready to Start Your Project?
                        </h3>
                        <p 
                            className="text-xl mb-8"
                            style={{ color: `${colors.navy}99` }}
                        >
                            Let's discuss how our process can bring your vision to life.
                        </p>
                        <a
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
                            Start a Project
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
