'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

const researchPapers = [
    {
        title: 'Adaptive Learning Systems: A Survey of Neural Architecture Search',
        authors: 'DevilsLab Research Team',
        date: 'October 2025',
        abstract: 'An in-depth exploration of neural architecture search methodologies and their applications in creating adaptive AI systems. This survey covers the latest techniques in AutoML and their practical implications for real-world deployments.',
        topics: ['Neural Networks', 'AutoML', 'Deep Learning']
    },
    {
        title: 'Decentralized AI: Bridging Web3 and Machine Learning',
        authors: 'Dr. Sarah Chen, Michael Rodriguez',
        date: 'September 2025',
        abstract: 'This paper examines the intersection of blockchain technology and artificial intelligence, proposing novel frameworks for decentralized model training and inference while maintaining data privacy and security.',
        topics: ['Web3', 'AI', 'Blockchain']
    },
    {
        title: 'Sentiment Analysis at Scale: RNN vs Transformer Architectures',
        authors: 'Alex Kumar, Jennifer Lee',
        date: 'August 2025',
        abstract: 'A comprehensive comparison of Recurrent Neural Networks and Transformer models for sentiment analysis tasks across multiple languages and domains. Includes performance benchmarks and real-world deployment considerations.',
        topics: ['NLP', 'Transformers', 'Sentiment Analysis']
    },
    {
        title: 'Ethical AI Development: Frameworks for Responsible Innovation',
        authors: 'DevilsLab Ethics Committee',
        date: 'July 2025',
        abstract: 'Proposing practical frameworks and guidelines for developing AI systems that prioritize fairness, transparency, and accountability. This work addresses bias mitigation, explainability, and societal impact assessment.',
        topics: ['AI Ethics', 'Responsible AI', 'Governance']
    },
    {
        title: 'Real-Time Data Pipeline Optimization for ML Applications',
        authors: 'Thomas Anderson, Maya Patel',
        date: 'June 2025',
        abstract: 'Strategies for building efficient, scalable data pipelines that support machine learning workflows in production environments. Covers stream processing, feature engineering, and model serving architectures.',
        topics: ['MLOps', 'Data Engineering', 'Systems']
    }
];

export default function ResearchPageUltra() {
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
                    <div className="max-w-5xl mx-auto">
                        <h1 
                            className={`text-7xl md:text-8xl lg:text-9xl font-black mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ color: colors.navy }}
                        >
                            Pioneering Research
                        </h1>
                        <p 
                            className={`text-xl md:text-2xl max-w-3xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.1s'
                            }}
                        >
                            Pushing the boundaries of artificial intelligence, machine learning, and decentralized systems through rigorous research and experimentation.
                        </p>
                    </div>
                </section>

                {/* Research Papers List */}
                <section className="pb-32 px-6">
                    <div className="max-w-5xl mx-auto space-y-0">
                        {researchPapers.map((paper, index) => (
                            <article
                                key={index}
                                className={`py-12 border-b transition-all duration-300 hover:bg-opacity-50 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                style={{
                                    borderColor: `${colors.navy}10`,
                                    animationDelay: `${0.2 + index * 0.1}s`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `${colors.navy}03`;
                                    e.currentTarget.style.paddingLeft = '24px';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}
                            >
                                {/* Paper Title */}
                                <h2 
                                    className="text-3xl font-bold mb-4"
                                    style={{ color: colors.navy }}
                                >
                                    {paper.title}
                                </h2>

                                {/* Meta Information */}
                                <div className="flex flex-wrap gap-6 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Users 
                                            className="w-5 h-5"
                                            style={{ color: `${colors.navy}60` }}
                                        />
                                        <span 
                                            className="text-sm font-medium"
                                            style={{ color: `${colors.navy}80` }}
                                        >
                                            {paper.authors}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar 
                                            className="w-5 h-5"
                                            style={{ color: `${colors.navy}60` }}
                                        />
                                        <span 
                                            className="text-sm font-medium"
                                            style={{ color: `${colors.navy}80` }}
                                        >
                                            {paper.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Abstract */}
                                <p 
                                    className="text-lg leading-relaxed mb-4"
                                    style={{ color: `${colors.navy}70` }}
                                >
                                    {paper.abstract}
                                </p>

                                {/* Topics */}
                                <div className="flex flex-wrap gap-2">
                                    {paper.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 text-sm font-medium"
                                            style={{
                                                color: colors.navy,
                                                border: `1px solid ${colors.navy}20`,
                                                background: `${colors.navy}05`
                                            }}
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-32 px-6">
                    <div 
                        className="max-w-4xl mx-auto text-center p-16 border"
                        style={{ borderColor: `${colors.navy}10` }}
                    >
                        <BookOpen 
                            className="w-16 h-16 mx-auto mb-6"
                            style={{ color: colors.navy }}
                        />
                        <h3 
                            className="text-4xl md:text-5xl font-black mb-6"
                            style={{ color: colors.navy }}
                        >
                            Collaborate With Us
                        </h3>
                        <p 
                            className="text-xl mb-8"
                            style={{ color: `${colors.navy}99` }}
                        >
                            Interested in partnering on research or accessing our full publications? Get in touch with our research team.
                        </p>
                        <a
                            href="mailto:research@devilslab.com"
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
                            Contact Research Team
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
