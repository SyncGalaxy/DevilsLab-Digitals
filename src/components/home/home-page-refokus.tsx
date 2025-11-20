"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Zap, Brain, Globe2, Users, CheckCircle, Mail, Phone, Clock, Briefcase } from 'lucide-react';
import Link from 'next/link';

const colors = {
  navy: '#0a192f',
  white: '#ffffff'
};

export default function HomePageRefokus() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split text into words for stagger animation
  const words = "Crafting intelligent solutions with precision, innovation, and excellence.".split(' ');

  return (
    <div style={{ background: colors.white }}>
      {/* Add custom CSS for dramatic animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes textShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(10, 25, 47, 0.15);
        }
        
        .gradient-text-hover:hover {
          background: linear-gradient(90deg, ${colors.navy}, #3b82f6, #8b5cf6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .shine-effect:hover::after {
          left: 100%;
        }
      `}</style>

      {/* Hero Section - Refined */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-float" style={{ background: `radial-gradient(circle, ${colors.navy}40, transparent)` }} />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 animate-float-delayed" style={{ background: `radial-gradient(circle, ${colors.navy}30, transparent)` }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
            style={{
              borderColor: `${colors.navy}20`,
              background: `${colors.navy}05`,
              color: colors.navy
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Award-Winning Digital Agency</span>
          </motion.div>

          {/* Main Headline with stagger */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-12" style={{ color: colors.navy }}>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40, filter: mounted ? 'blur(0px)' : 'blur(8px)' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block"
            >
              We Build Digital
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40, filter: mounted ? 'blur(0px)' : 'blur(8px)' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block"
              style={{ color: `${colors.navy}CC` }}
            >
              Products That
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40, filter: mounted ? 'blur(0px)' : 'blur(8px)' }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block"
            >
              Work
            </motion.span>
          </h1>

          {/* Subheadline with word stagger */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ color: `${colors.navy}99` }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ background: colors.navy, color: colors.white }}
            >
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold border-2 transition-all duration-300 hover:scale-105 relative"
              style={{ borderColor: `${colors.navy}20`, color: colors.navy, background: `${colors.navy}05` }}
            >
              <span>Start a Project</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
            </Link>
          </motion.div>

          {/* Stats with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 text-xs"
            style={{ color: `${colors.navy}60` }}
          >
            {[
              { icon: Clock, text: '5+ Years Experience' },
              { icon: Briefcase, text: '2 Projects Delivered' },
              { icon: Users, text: '4 Happy Clients' }
            ].map((stat, index) => (
              <motion.span
                key={stat.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="inline-flex items-center gap-2 font-semibold"
              >
                <stat.icon className="w-4 h-4" style={{ color: colors.navy }} />
                {stat.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do - Services Overview */}
      <section className="py-32 px-6 border-t" style={{ borderColor: `${colors.navy}10` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm mb-6"
              style={{ borderColor: `${colors.navy}20`, background: `${colors.navy}05`, color: `${colors.navy}99` }}
            >
              <Code2 className="w-4 h-4" />
              <span>What We Do</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: colors.navy }}
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl"
              style={{ color: `${colors.navy}99` }}
            >
              We create intelligent digital solutions that drive real business results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                description: 'Custom AI models, ChatGPT integrations, automation, and intelligent systems that learn and adapt to your business needs.',
                examples: 'Chatbots, Predictive Analytics, NLP'
              },
              {
                icon: Code2,
                title: 'Web Development',
                description: 'Modern, fast, and scalable web applications built with the latest technologies like Next.js, React, and Node.js.',
                examples: 'Websites, Web Apps, SaaS Platforms'
              },
              {
                icon: Globe2,
                title: 'Blockchain & Web3',
                description: 'Decentralized applications, smart contracts, and blockchain solutions for the future of the internet.',
                examples: 'DApps, NFTs, Token Systems'
              },
              {
                icon: Sparkles,
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces that users love. We focus on creating experiences that convert.',
                examples: 'Design Systems, Prototypes, Branding'
              },
              {
                icon: Zap,
                title: 'Business Automation',
                description: 'Streamline your operations with custom automation tools, workflows, and integrations.',
                examples: 'APIs, Workflows, Data Processing'
              },
              {
                icon: Users,
                title: 'Consulting & Strategy',
                description: 'Expert guidance on technology decisions, digital transformation, and scaling your business.',
                examples: 'Tech Audit, Roadmaps, Architecture'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group p-8 border rounded-2xl transition-all duration-500 relative overflow-hidden cursor-pointer hover-lift shine-effect"
                style={{ borderColor: `${colors.navy}10`, background: colors.white }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${colors.navy}, #3b82f6)` }} />
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 0 2px ${colors.navy}20` }} />
                
                <service.icon className="w-12 h-12 mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 relative z-10" style={{ color: colors.navy }} />
                <h3 className="text-2xl font-black mb-4 relative z-10 gradient-text-hover" style={{ color: colors.navy }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed mb-4 relative z-10 group-hover:text-black transition-colors duration-300" style={{ color: `${colors.navy}99` }}>
                  {service.description}
                </p>
                <div className="text-sm font-semibold relative z-10 group-hover:text-blue-600 transition-colors duration-300" style={{ color: `${colors.navy}60` }}>
                  {service.examples}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-32 px-6" style={{ background: `${colors.navy}02` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: colors.navy }}
            >
              How We Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl max-w-3xl"
              style={{ color: `${colors.navy}99` }}
            >
              A simple, transparent process from idea to launch.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your goals, challenges, and vision.' },
              { step: '02', title: 'Strategy', desc: 'We plan the perfect solution and technology stack.' },
              { step: '03', title: 'Build', desc: 'We design and develop your product with precision.' },
              { step: '04', title: 'Launch', desc: 'We deploy, test, and support your success.' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="text-7xl font-black mb-4 opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: colors.navy }}>
                  {phase.step}
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: colors.navy }}>
                  {phase.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: `${colors.navy}99` }}>
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: colors.navy }}
            >
              Why DevilsLab?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl max-w-3xl"
              style={{ color: `${colors.navy}99` }}
            >
              We're different. Here's why clients choose us.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              'Expert team with 5+ years in AI, Web3, and modern web development',
              'Fast delivery without compromising quality',
              'Transparent pricing - no hidden costs',
              'Ongoing support and maintenance included',
              'Latest technologies: Next.js, React, AI, Blockchain',
              'Direct communication with founders',
              '99.9% uptime guarantee',
              'Source code and full ownership'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.navy }} />
                <span className="text-lg" style={{ color: `${colors.navy}99` }}>{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Stats */}
      <section className="py-32 px-6" style={{ background: `${colors.navy}02` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '2', label: 'Projects Delivered' },
              { value: '4', label: 'Happy Clients' },
              { value: '2', label: 'Awards Won' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ color: colors.navy }}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold uppercase tracking-wide" style={{ color: `${colors.navy}99` }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: colors.navy }}>
              Let's Build Something Great
            </h2>
            <p className="text-xl md:text-2xl" style={{ color: `${colors.navy}99` }}>
              Ready to transform your idea into reality? Get in touch.
            </p>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="mailto:support@devilslab.co.in"
              className="flex items-center gap-3 px-6 py-4 border rounded-full hover:shadow-lg transition-all duration-300 group"
              style={{ borderColor: `${colors.navy}20` }}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: colors.navy }} />
              <span className="font-semibold" style={{ color: colors.navy }}>support@devilslab.co.in</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="tel:+919100360159"
              className="flex items-center gap-3 px-6 py-4 border rounded-full hover:shadow-lg transition-all duration-300 group"
              style={{ borderColor: `${colors.navy}20` }}
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: colors.navy }} />
              <span className="font-semibold" style={{ color: colors.navy }}>+91 91003 60159</span>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: `${colors.navy}20`, color: colors.navy }}
                suppressHydrationWarning
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-6 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: `${colors.navy}20`, color: colors.navy }}
                suppressHydrationWarning
              />
            </div>
            <input
              type="text"
              placeholder="Project Type (e.g., AI Chatbot, Website, Web3 App)"
              className="w-full px-6 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 transition-all"
              style={{ borderColor: `${colors.navy}20`, color: colors.navy }}
              suppressHydrationWarning
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full px-6 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 transition-all resize-none"
              style={{ borderColor: `${colors.navy}20`, color: colors.navy }}
              suppressHydrationWarning
            />
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: colors.navy, color: colors.white }}
              suppressHydrationWarning
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
