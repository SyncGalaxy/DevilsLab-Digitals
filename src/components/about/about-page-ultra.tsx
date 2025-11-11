"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, TrendingUp, Code, Globe, Zap, Heart, Shield, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';

const colors = {
  navy: '#0a192f',
  white: '#ffffff'
};

export default function AboutPageUltra() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ background: colors.white, color: colors.navy }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20" style={{ background: colors.white }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
            style={{ 
              borderColor: `${colors.navy}20`,
              background: `${colors.navy}05`,
              color: colors.navy
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Who We Are</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
            style={{ color: colors.navy }}
          >
            About DevilsLab
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-4xl mx-auto"
            style={{ color: `${colors.navy}CC` }}
          >
            We are a team of innovators, engineers, and creators building the future of digital experiences with <span className="font-semibold" style={{ color: colors.navy }}>passion</span>, <span className="font-semibold" style={{ color: colors.navy }}>precision</span>, and <span className="font-semibold" style={{ color: colors.navy }}>purpose</span>.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 lg:px-8 border-t" style={{ borderColor: `${colors.navy}10` }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-12" style={{ color: colors.navy }}>
              Our Story
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: `${colors.navy}99` }}>
              <p>
                DevilsLab was founded with a singular mission: to push the boundaries of what's possible in digital innovation. We believe that technology should not only solve problems but also inspire, empower, and transform.
              </p>
              <p>
                From humble beginnings to becoming a trusted partner for businesses worldwide, our journey has been driven by an unwavering commitment to excellence. We've built solutions that matter—products that users love, platforms that scale, and experiences that resonate.
              </p>
              <p>
                Today, we stand at the intersection of AI, Web3, and cutting-edge software development, ready to tackle the most ambitious challenges and turn visionary ideas into reality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-32 px-6 lg:px-8" style={{ background: `${colors.navy}02` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="mb-6">
                <Target className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" style={{ color: colors.navy }} />
              </div>
              <h3 className="text-3xl font-black mb-4" style={{ color: colors.navy }}>
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: `${colors.navy}99` }}>
                To engineer innovative digital solutions that empower businesses to thrive in the modern era, leveraging cutting-edge technology and creative thinking.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="mb-6">
                <Lightbulb className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" style={{ color: colors.navy }} />
              </div>
              <h3 className="text-3xl font-black mb-4" style={{ color: colors.navy }}>
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: `${colors.navy}99` }}>
                To become the world's most trusted partner in digital transformation, recognized for our innovation, integrity, and impact across industries.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="mb-6">
                <Heart className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" style={{ color: colors.navy }} />
              </div>
              <h3 className="text-3xl font-black mb-4" style={{ color: colors.navy }}>
                Our Values
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: `${colors.navy}99` }}>
                Excellence, integrity, innovation, and collaboration. We build with purpose, deliver with precision, and always put our clients first.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-20 text-center"
            style={{ color: colors.navy }}
          >
            What Drives Us
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Technical Excellence', desc: 'We write clean, scalable, and maintainable code that stands the test of time.' },
              { icon: Rocket, title: 'Innovation First', desc: 'We embrace emerging technologies and push the boundaries of what\'s possible.' },
              { icon: Users, title: 'Client-Centric', desc: 'Your success is our success. We listen, understand, and deliver beyond expectations.' },
              { icon: Shield, title: 'Security & Privacy', desc: 'We build secure systems that protect user data and maintain trust.' },
              { icon: TrendingUp, title: 'Continuous Growth', desc: 'We never stop learning, evolving, and improving our craft.' },
              { icon: Globe, title: 'Global Impact', desc: 'We create solutions that make a difference across borders and industries.' }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  borderColor: `${colors.navy}10`,
                  background: colors.white
                }}
              >
                <principle.icon className="w-10 h-10 mb-6 transition-transform duration-300 group-hover:scale-110" style={{ color: colors.navy }} />
                <h3 className="text-2xl font-black mb-3" style={{ color: colors.navy }}>
                  {principle.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: `${colors.navy}99` }}>
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8" style={{ background: `${colors.navy}02` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '2', label: 'Projects Delivered' },
              { value: '4', label: 'Happy Clients' },
              { value: '2', label: 'Awards Won' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ color: colors.navy }}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold tracking-wide uppercase" style={{ color: `${colors.navy}99` }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8" style={{ color: colors.navy }}>
              Let's Build Something Extraordinary
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: `${colors.navy}99` }}>
              Ready to transform your vision into reality? We're here to help.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: colors.navy,
                color: colors.white
              }}
            >
              Start Your Project
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
