'use client';

import { useEffect, useState } from 'react';
import { MessageSquare, Code, Rocket, Brain, Users, Lightbulb, HelpCircle, Star } from 'lucide-react';
import PhysicsBackground from '@/components/common/physics-background';

const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

const forumCategories = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Discussions about frontend, backend, and full-stack development technologies.',
        topics: 234,
        posts: 1567
    },
    {
        icon: Brain,
        title: 'AI & Machine Learning',
        description: 'Share insights, models, and breakthroughs in artificial intelligence and ML.',
        topics: 189,
        posts: 982
    },
    {
        icon: Rocket,
        title: 'Project Showcase',
        description: 'Show off your latest projects, get feedback, and inspire the community.',
        topics: 145,
        posts: 723
    },
    {
        icon: Lightbulb,
        title: 'Ideas & Feedback',
        description: 'Propose new features, improvements, or share your innovative ideas.',
        topics: 98,
        posts: 456
    },
    {
        icon: Users,
        title: 'Collaboration Hub',
        description: 'Find partners, join teams, or recruit talent for your next big project.',
        topics: 167,
        posts: 834
    },
    {
        icon: HelpCircle,
        title: 'Help & Support',
        description: 'Get assistance with technical issues, questions, and troubleshooting.',
        topics: 312,
        posts: 1923
    },
    {
        icon: Star,
        title: 'Best Practices',
        description: 'Learn and share industry standards, coding patterns, and optimization tips.',
        topics: 123,
        posts: 678
    },
    {
        icon: MessageSquare,
        title: 'General Discussion',
        description: 'Off-topic conversations, community updates, and casual chat.',
        topics: 445,
        posts: 2891
    }
];

export default function ForumPageUltra() {
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
                            Community Forum
                        </h1>
                        <p 
                            className={`text-xl md:text-2xl max-w-3xl ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{ 
                                color: `${colors.navy}99`,
                                animationDelay: '0.1s'
                            }}
                        >
                            Connect with developers, share knowledge, and collaborate on innovative projects in our vibrant community.
                        </p>
                    </div>
                </section>

                {/* Forum Stats */}
                <section className="pb-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div 
                            className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-10 border ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                            style={{
                                borderColor: `${colors.navy}10`,
                                animationDelay: '0.2s'
                            }}
                        >
                            <div className="text-center">
                                <div 
                                    className="text-5xl font-black mb-2"
                                    style={{ color: colors.navy }}
                                >
                                    1,713
                                </div>
                                <div 
                                    className="text-sm font-semibold uppercase tracking-wider"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Total Topics
                                </div>
                            </div>
                            <div className="text-center">
                                <div 
                                    className="text-5xl font-black mb-2"
                                    style={{ color: colors.navy }}
                                >
                                    10,054
                                </div>
                                <div 
                                    className="text-sm font-semibold uppercase tracking-wider"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Total Posts
                                </div>
                            </div>
                            <div className="text-center">
                                <div 
                                    className="text-5xl font-black mb-2"
                                    style={{ color: colors.navy }}
                                >
                                    5,234
                                </div>
                                <div 
                                    className="text-sm font-semibold uppercase tracking-wider"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Members
                                </div>
                            </div>
                            <div className="text-center">
                                <div 
                                    className="text-5xl font-black mb-2"
                                    style={{ color: colors.navy }}
                                >
                                    342
                                </div>
                                <div 
                                    className="text-sm font-semibold uppercase tracking-wider"
                                    style={{ color: `${colors.navy}60` }}
                                >
                                    Online Now
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {forumCategories.map((category, index) => {
                                const Icon = category.icon;
                                return (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`block p-8 border transition-all duration-500 group ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
                                        style={{
                                            background: colors.white,
                                            borderColor: `${colors.navy}10`,
                                            animationDelay: `${0.3 + index * 0.1}s`,
                                            textDecoration: 'none'
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
                                        {/* Icon & Title */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div 
                                                className="p-3 transition-all duration-300 group-hover:scale-110"
                                                style={{ 
                                                    background: `${colors.navy}10`,
                                                    border: `2px solid ${colors.navy}10`
                                                }}
                                            >
                                                <Icon 
                                                    className="w-6 h-6"
                                                    style={{ color: colors.navy }}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 
                                                    className="text-2xl font-bold mb-2"
                                                    style={{ color: colors.navy }}
                                                >
                                                    {category.title}
                                                </h3>
                                                <p 
                                                    className="leading-relaxed"
                                                    style={{ color: `${colors.navy}90` }}
                                                >
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex gap-6 pt-4 border-t" style={{ borderColor: `${colors.navy}10` }}>
                                            <div>
                                                <span 
                                                    className="text-2xl font-black"
                                                    style={{ color: colors.navy }}
                                                >
                                                    {category.topics}
                                                </span>
                                                <span 
                                                    className="text-sm ml-2"
                                                    style={{ color: `${colors.navy}60` }}
                                                >
                                                    Topics
                                                </span>
                                            </div>
                                            <div>
                                                <span 
                                                    className="text-2xl font-black"
                                                    style={{ color: colors.navy }}
                                                >
                                                    {category.posts}
                                                </span>
                                                <span 
                                                    className="text-sm ml-2"
                                                    style={{ color: `${colors.navy}60` }}
                                                >
                                                    Posts
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-32 px-6">
                    <div 
                        className="max-w-4xl mx-auto text-center p-16 border"
                        style={{ borderColor: `${colors.navy}10` }}
                    >
                        <MessageSquare 
                            className="w-16 h-16 mx-auto mb-6"
                            style={{ color: colors.navy }}
                        />
                        <h3 
                            className="text-4xl md:text-5xl font-black mb-6"
                            style={{ color: colors.navy }}
                        >
                            Join Our Discord Community
                        </h3>
                        <p 
                            className="text-xl mb-8"
                            style={{ color: `${colors.navy}99` }}
                        >
                            Connect with developers, share knowledge, and collaborate in real-time on our Discord server.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="https://discord.gg/your-discord-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300 rounded-full"
                                style={{
                                    background: colors.navy,
                                    color: colors.white
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${colors.navy}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                                Join Discord Server
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
