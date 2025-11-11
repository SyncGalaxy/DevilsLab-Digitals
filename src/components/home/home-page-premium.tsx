'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Code, Zap, Lightbulb, LineChart, Shield, Rocket, Mail, Phone, MapPin, ArrowRight, CheckCircle, Users, Globe, Award, TrendingUp } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Premium color palette
const colors = {
    navy: '#0a192f',
    white: '#ffffff',
    lightGray: '#f8f9fa',
    accent: '#64ffda'
};

// PREMIUM HERO SECTION WITH 3D LOGO
const PremiumHeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3D Logo Animation
    useEffect(() => {
        if (!canvasRef.current || !mounted) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 400;
        canvas.height = 400;

        let rotation = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            rotation += 0.01;
            
            // Draw abstract 3D shape (hexagon with depth)
            ctx.save();
            ctx.translate(centerX, centerY);
            
            // Back faces (darker)
            ctx.fillStyle = colors.navy;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 80 + 10;
                const y = Math.sin(angle) * 80 + 10;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            
            // Front faces (solid)
            ctx.globalAlpha = 1;
            ctx.fillStyle = colors.navy;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 80;
                const y = Math.sin(angle) * 80;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            
            // Inner hexagon
            ctx.strokeStyle = colors.white;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + rotation;
                const x = Math.cos(angle) * 50;
                const y = Math.sin(angle) * 50;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            
            // Center dot
            ctx.fillStyle = colors.white;
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
            
            requestAnimationFrame(animate);
        };
        animate();
    }, [mounted]);

    useEffect(() => {
        if (!heroRef.current || !mounted) return;
        const ctx = gsap.context(() => {
            gsap.from('.hero-title', {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power3.out'
            });
            gsap.from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out'
            });
            gsap.from('.hero-cta', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.6,
                ease: 'power3.out'
            });
        }, heroRef);
        return () => ctx.revert();
    }, [mounted]);

    return (
        <section 
            ref={heroRef} 
            className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
            style={{ paddingTop: '80px' }}
        >
            {/* Subtle parallax shapes - only render after mount to avoid hydration issues */}
            {mounted && (
                <>
                    <div 
                        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
                        style={{ 
                            background: colors.navy,
                            transform: `translateY(${scrollY * 0.3}px)`
                        }}
                    />
                    <div 
                        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
                        style={{ 
                            background: colors.navy,
                            transform: `translateY(${scrollY * -0.2}px)`
                        }}
                    />
                </>
            )}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10">
                {/* Left: Content */}
                <div className="space-y-8">
                    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ color: colors.navy }}>
                        DevilsLab
                    </h1>
                    <p className="hero-subtitle text-xl md:text-2xl text-gray-600 leading-relaxed">
                        Engineering tomorrow's solutions with precision, innovation, and excellence.
                    </p>
                    <div className="hero-cta flex gap-4 flex-wrap">
                        <button 
                            className="group px-8 py-4 font-semibold text-white rounded-none transition-all duration-300 flex items-center gap-2 hover:gap-4 hover:shadow-2xl"
                            style={{ background: colors.navy }}
                            suppressHydrationWarning
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button 
                            className="px-8 py-4 font-semibold rounded-none border-2 transition-all duration-300 hover:bg-gray-50"
                            style={{ color: colors.navy, borderColor: colors.navy }}
                            suppressHydrationWarning
                        >
                            Our Work
                        </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8">
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>150+</div>
                            <div className="text-sm text-gray-600 mt-1">Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>98%</div>
                            <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold" style={{ color: colors.navy }}>24/7</div>
                            <div className="text-sm text-gray-600 mt-1">Support</div>
                        </div>
                    </div>
                </div>

                {/* Right: 3D Logo Animation */}
                <div className="flex items-center justify-center">
                    <canvas 
                        ref={canvasRef} 
                        className="w-full max-w-md h-auto"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs tracking-widest" style={{ color: colors.navy }}>SCROLL</span>
                <div className="w-px h-16 animate-pulse" style={{ background: colors.navy }}></div>
            </div>
        </section>
    );
};

// SERVICES SECTION WITH HOVER ANIMATIONS
const PremiumServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Crafting responsive, high-performance web applications with modern frameworks and best practices.'
        },
        {
            icon: Rocket,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.'
        },
        {
            icon: Zap,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and seamless deployment strategies for enterprise-grade applications.'
        },
        {
            icon: Lightbulb,
            title: 'AI & Machine Learning',
            description: 'Intelligent automation and machine learning solutions tailored to your business needs.'
        },
        {
            icon: LineChart,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with advanced analytics and visualization.'
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Robust security protocols and comprehensive protection for your digital assets.'
        },
        {
            icon: Globe,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions.'
        },
        {
            icon: Users,
            title: 'Digital Strategy',
            description: 'Comprehensive digital transformation strategies aligned with your business objectives.'
        },
        {
            icon: TrendingUp,
            title: 'SEO & Marketing',
            description: 'Data-driven digital marketing campaigns that boost your online presence and ROI.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.navy }}>
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions designed to elevate your business to new heights
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={`service-${index}`}
                                className="service-card group relative p-10 border-2 transition-all duration-300 cursor-pointer"
                                style={{ 
                                    borderColor: hoveredIndex === index ? colors.navy : '#e5e7eb',
                                    background: hoveredIndex === index ? colors.lightGray : colors.white
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Icon */}
                                <div 
                                    className="mb-6 transition-all duration-300"
                                    style={{
                                        transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                                    }}
                                >
                                    <IconComponent 
                                        className="w-12 h-12" 
                                        style={{ color: colors.navy }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover Arrow */}
                                <div 
                                    className="absolute bottom-8 right-8 transition-all duration-300"
                                    style={{
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        transform: hoveredIndex === index ? 'translate(0, 0)' : 'translate(-10px, 10px)'
                                    }}
                                >
                                    <ArrowRight style={{ color: colors.navy }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// ABOUT SECTION WITH PARALLAX
const PremiumAboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [mounted, setMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !mounted) return;
        const ctx = gsap.context(() => {
            gsap.from('.about-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out'
            });
            gsap.from('.about-stats', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                x: 50,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [mounted]);

    const stats = [
        { icon: Users, value: '500+', label: 'Clients Worldwide' },
        { icon: Globe, value: '45', label: 'Countries Served' },
        { icon: Award, value: '25+', label: 'Industry Awards' },
        { icon: TrendingUp, value: '15M+', label: 'Lines of Code' }
    ];

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden" style={{ background: colors.lightGray }}>
            {/* Parallax Shape - only render after mount */}
            {mounted && (
                <div 
                    className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
                    style={{ 
                        background: colors.navy,
                        transform: `translateY(${(scrollY - 1000) * 0.2}px)`
                    }}
                />
            )}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left: Content */}
                <div className="about-content space-y-6">
                    <h2 className="text-5xl md:text-6xl font-bold" style={{ color: colors.navy }}>
                        Who We Are
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        DevilsLab is a premium digital agency specializing in cutting-edge technology solutions. 
                        We combine creative excellence with technical expertise to deliver exceptional results.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our team of world-class engineers, designers, and strategists work collaboratively 
                        to transform your vision into reality. With a focus on quality, innovation, and 
                        scalability, we've helped hundreds of businesses achieve their digital goals.
                    </p>
                    <button 
                        className="mt-6 px-8 py-4 font-semibold text-white rounded-none transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
                        style={{ background: colors.navy }}
                        suppressHydrationWarning
                    >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Right: Stats Grid */}
                <div className="about-stats grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="p-8 bg-white border-2 transition-all duration-300 hover:shadow-xl group"
                            style={{ borderColor: '#e5e7eb' }}
                        >
                            <stat.icon 
                                className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" 
                                style={{ color: colors.navy }} 
                            />
                            <div className="text-4xl font-bold mb-2" style={{ color: colors.navy }}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CONTACT SECTION
const PremiumContactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !mounted) return;
        const ctx = gsap.context(() => {
            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [mounted]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                formData,
                PUBLIC_KEY
            );
            setSubmitMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section ref={sectionRef} className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.navy }}>
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your next project? Let's create something extraordinary together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 border-2" style={{ borderColor: colors.navy }}>
                                <Mail style={{ color: colors.navy }} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>Email</h3>
                                <p className="text-gray-600">contact@devilslab.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 border-2" style={{ borderColor: colors.navy }}>
                                <Phone style={{ color: colors.navy }} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 border-2" style={{ borderColor: colors.navy }}>
                                <MapPin style={{ color: colors.navy }} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>Location</h3>
                                <p className="text-gray-600">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form space-y-6" suppressHydrationWarning>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border-2 focus:outline-none transition-colors"
                            style={{ 
                                borderColor: '#e5e7eb',
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.navy}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                            autoComplete="name"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border-2 focus:outline-none transition-colors"
                            style={{ 
                                borderColor: '#e5e7eb',
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.navy}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                            autoComplete="email"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-6 py-4 border-2 focus:outline-none resize-none transition-colors"
                            style={{ 
                                borderColor: '#e5e7eb',
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.navy}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl disabled:opacity-50 flex items-center justify-center gap-2"
                            style={{ background: colors.navy }}
                            suppressHydrationWarning
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <CheckCircle className="w-5 h-5" />}
                        </button>
                        {submitMessage && (
                            <p className={`text-center ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

// MAIN COMPONENT
export default function PremiumHomePage() {
    return (
        <main className="relative">
            <PremiumHeroSection />
            <PremiumServicesSection />
            <PremiumAboutSection />
            <PremiumContactSection />
        </main>
    );
}
