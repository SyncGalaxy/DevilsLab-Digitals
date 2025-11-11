'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Code, Zap, Lightbulb, Shield, Rocket, Mail, Phone, MapPin, ArrowRight, CheckCircle, Users, Globe, Award, TrendingUp, Brain, Cpu, Database, Cloud } from 'lucide-react';
import FaqSection from './faq-section';

// Ultra-premium color palette
const colors = {
    navy: '#0a192f',
    white: '#ffffff'
};

// Falling Letter Physics
interface FallingLetter {
    x: number;
    y: number;
    text: string;
    fontSize: number;
    rotation: number;
    rotationSpeed: number;
    speedY: number;
    speedX: number;
    opacity: number;
}

// PHYSICS ANIMATION BACKGROUND
const PhysicsBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lettersRef = useRef<FallingLetter[]>([]);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const aiWords = ['AI', 'ML', 'GPT', 'NLP', 'LLM', 'RAG', 'API', 'WEB', 'CLOUD', 'CODE', 'DATA', 'NEXT'];
        
        // Create falling letter
        const createLetter = () => {
            const text = aiWords[Math.floor(Math.random() * aiWords.length)];
            const fontSize = Math.random() * 100 + 200; // 200-300px
            
            lettersRef.current.push({
                x: Math.random() * canvas.width,
                y: -fontSize - 100,
                text,
                fontSize,
                rotation: (Math.random() - 0.5) * 0.3,
                rotationSpeed: (Math.random() - 0.5) * 0.002,
                speedY: Math.random() * 0.5 + 0.3, // Slow falling
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.03 + 0.02 // 2-5% opacity
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw letters
            lettersRef.current = lettersRef.current.filter(letter => {
                letter.y += letter.speedY;
                letter.x += letter.speedX;
                letter.rotation += letter.rotationSpeed;

                // Remove if off screen
                if (letter.y > canvas.height + 200) {
                    return false;
                }

                // Draw letter
                ctx.save();
                ctx.translate(letter.x, letter.y);
                ctx.rotate(letter.rotation);
                ctx.font = `900 ${letter.fontSize}px 'Inter', sans-serif`;
                ctx.fillStyle = `rgba(10, 25, 47, ${letter.opacity})`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(letter.text, 0, 0);
                ctx.restore();

                return true;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize with some letters
        for (let i = 0; i < 3; i++) {
            setTimeout(createLetter, i * 800);
        }

        // Add new letters periodically
        const letterInterval = setInterval(createLetter, 2500);
        
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            clearInterval(letterInterval);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};

// ULTRA PREMIUM HERO
const UltraHero = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24" style={{ background: colors.white }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
                {/* Badge */}
                <div 
                    className="inline-flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-medium mb-8 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    style={{ 
                        borderColor: `${colors.navy}20`,
                        background: `${colors.navy}05`,
                        color: colors.navy,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease-out 0.2s'
                    }}
                >
                    <TrendingUp className="w-4 h-4" />
                    <span>Engineering Digital Excellence</span>
                </div>

                {/* Main Headline */}
                <h1 
                    className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mb-8"
                    style={{ 
                        color: colors.navy,
                        opacity: mounted ? 1 : 0,
                        filter: mounted ? 'blur(0px)' : 'blur(10px)',
                        transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 1s ease-out 0.4s'
                    }}
                >
                    DevilsLab
                </h1>

                {/* Subheadline */}
                <p 
                    className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 max-w-4xl"
                    style={{ 
                        color: `${colors.navy}CC`,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out 0.6s'
                    }}
                >
                    Crafting intelligent solutions with <span className="font-semibold" style={{ color: colors.navy }}>precision</span>, <span className="font-semibold" style={{ color: colors.navy }}>innovation</span>, and <span className="font-semibold" style={{ color: colors.navy }}>excellence</span>.
                </p>

                {/* Stats */}
                <div 
                    className="flex flex-wrap items-center gap-8 mb-12 text-sm"
                    style={{ 
                        color: `${colors.navy}99`,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease-out 0.8s'
                    }}
                >
                    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110" style={{ color: `${colors.navy}CC` }}>
                        <CheckCircle className="w-5 h-5" style={{ color: colors.navy }} />
                        <span>150+ Projects Delivered</span>
                    </div>
                    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110" style={{ color: `${colors.navy}CC` }}>
                        <Users className="w-5 h-5" style={{ color: colors.navy }} />
                        <span>98% Client Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110" style={{ color: `${colors.navy}CC` }}>
                        <Globe className="w-5 h-5" style={{ color: colors.navy }} />
                        <span>24/7 Support</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div 
                    className="flex flex-wrap gap-4"
                    style={{ 
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                        transition: 'all 0.8s ease-out 1s'
                    }}
                >
                    <button 
                        className="group flex items-center gap-3 px-10 py-5 font-semibold text-lg rounded-xl transition-all duration-300"
                        style={{ 
                            background: colors.navy,
                            color: colors.white,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                            e.currentTarget.style.boxShadow = `0 20px 40px ${colors.navy}40`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        type="button"
                        suppressHydrationWarning
                    >
                        <Mail className="w-5 h-5" />
                        <span>Contact Us</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button 
                        className="flex items-center gap-3 px-10 py-5 font-semibold text-lg rounded-xl border-2 transition-all duration-300"
                        style={{ 
                            borderColor: colors.navy,
                            color: colors.navy,
                            background: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                            e.currentTarget.style.background = `${colors.navy}05`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.background = 'transparent';
                        }}
                        suppressHydrationWarning
                        onClick={() => router.push('/projects')}
                        type="button"
                    >
                        <span>View Our Work</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

// SERVICES SECTION
const UltraServices = () => {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const services = [
        { icon: Code, title: 'Web Development', description: 'Modern, responsive applications built with cutting-edge technologies.' },
        { icon: Rocket, title: 'Mobile Solutions', description: 'Native and cross-platform experiences for iOS and Android.' },
        { icon: Cloud, title: 'Cloud Architecture', description: 'Scalable infrastructure for enterprise-grade applications.' },
        { icon: Brain, title: 'AI Integration', description: 'Intelligent automation powered by machine learning.' },
        { icon: Database, title: 'Data Engineering', description: 'Transform raw data into actionable business insights.' },
        { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive protection for your digital assets.' },
    ];

    return (
        <section ref={sectionRef} className="py-32 relative z-10" style={{ background: colors.white }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{ color: colors.navy }}>
                        Our Expertise
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: `${colors.navy}99` }}>
                        Comprehensive solutions engineered to elevate your business
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        const isHovered = hoveredIndex === index;
                        
                        return (
                            <div
                                key={`service-${index}`}
                                className="group p-10 border-2 transition-all duration-300 cursor-pointer"
                                style={{
                                    borderColor: isHovered ? colors.navy : `${colors.navy}20`,
                                    background: isHovered ? `${colors.navy}05` : colors.white,
                                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                                    boxShadow: isHovered ? `0 20px 40px ${colors.navy}15` : 'none'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Icon */}
                                <div 
                                    className="mb-6 transition-all duration-300"
                                    style={{
                                        transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)'
                                    }}
                                >
                                    <IconComponent 
                                        className="w-14 h-14" 
                                        style={{ color: colors.navy }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                                    {service.title}
                                </h3>
                                <p className="text-base leading-relaxed" style={{ color: `${colors.navy}CC` }}>
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                <div 
                                    className="mt-6 transition-all duration-300"
                                    style={{
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? 'translateX(0)' : 'translateX(-10px)'
                                    }}
                                >
                                    <ArrowRight className="w-6 h-6" style={{ color: colors.navy }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// STATS SECTION
const UltraStats = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const stats = [
        { icon: Users, value: '4', label: 'Happy Clients' },
        { icon: Globe, value: '45', label: 'Countries' },
        { icon: Award, value: '2', label: 'Awards Won' },
        { icon: Cpu, value: '99.9%', label: 'Uptime' }
    ];

    return (
        <section className="py-32 relative z-10" style={{ background: `${colors.navy}03` }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div 
                                key={index}
                                className="text-center p-8 border-2 transition-all duration-300 hover:scale-105"
                                style={{
                                    borderColor: `${colors.navy}20`,
                                    background: colors.white,
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                                    transition: `all 0.8s ease-out ${index * 0.1}s`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = colors.navy;
                                    e.currentTarget.style.background = `${colors.navy}05`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = `${colors.navy}20`;
                                    e.currentTarget.style.background = colors.white;
                                }}
                            >
                                <IconComponent className="w-10 h-10 mx-auto mb-4" style={{ color: colors.navy }} />
                                <div className="text-5xl font-black mb-2" style={{ color: colors.navy }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium" style={{ color: `${colors.navy}99` }}>
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// CONTACT SECTION
const UltraContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 relative z-10" style={{ background: colors.white }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: colors.navy }}>
                        Let's Work Together
                    </h2>
                    <p className="text-xl mb-8" style={{ color: `${colors.navy}99` }}>
                        Ready to transform your ideas into reality?
                    </p>
                    
                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <a 
                            href="mailto:support@devilslab.co.in"
                            className="flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{ color: colors.navy }}
                        >
                            <Mail className="w-5 h-5" />
                            <span>support@devilslab.co.in</span>
                        </a>
                        <a 
                            href="tel:+919100360159"
                            className="flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{ color: colors.navy }}
                        >
                            <Phone className="w-5 h-5" />
                            <span>+91 91003 60159</span>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto">
                    <form className="space-y-6" suppressHydrationWarning>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-8 py-5 text-lg border-2 transition-all duration-300"
                        style={{
                            borderColor: focusedField === 'name' ? colors.navy : `${colors.navy}20`,
                            background: focusedField === 'name' ? `${colors.navy}03` : colors.white,
                            color: colors.navy,
                            outline: 'none'
                        }}
                        autoComplete="name"
                        suppressHydrationWarning
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-8 py-5 text-lg border-2 transition-all duration-300"
                        style={{
                            borderColor: focusedField === 'email' ? colors.navy : `${colors.navy}20`,
                            background: focusedField === 'email' ? `${colors.navy}03` : colors.white,
                            color: colors.navy,
                            outline: 'none'
                        }}
                        autoComplete="email"
                        suppressHydrationWarning
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className="w-full px-8 py-5 text-lg border-2 transition-all duration-300 resize-none"
                        style={{
                            borderColor: focusedField === 'message' ? colors.navy : `${colors.navy}20`,
                            background: focusedField === 'message' ? `${colors.navy}03` : colors.white,
                            color: colors.navy,
                            outline: 'none'
                        }}
                        autoComplete="off"
                        suppressHydrationWarning
                    />

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300"
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
                        suppressHydrationWarning
                    >
                        <span>Send Message</span>
                        <CheckCircle className="w-5 h-5" />
                    </button>
                </form>
                </div>
            </div>
        </section>
    );
};

// MAIN COMPONENT
export default function UltraHomePage() {
    return (
        <>
            <PhysicsBackground />
            <main className="relative">
                <UltraHero />
                <UltraServices />
                <UltraStats />
                <FaqSection />
                <UltraContact />
            </main>
        </>
    );
}
