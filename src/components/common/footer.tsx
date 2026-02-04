"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github, Globe, Mail, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import LegalModal from './legal-modal';
import { legalContent, LegalContentType } from '@/lib/legal-data';


const FooterLink = ({ href, children, target }: { href: string, children: React.ReactNode, target?: string }) => (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="block mb-3 text-sm font-bold text-black/60 hover:text-black transition-colors duration-200">{children}</a>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
     <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-3 text-sm font-bold text-black/60 hover:text-black transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </a>
)

export default function Footer() {
    const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

    const openModal = (type: LegalContentType) => {
        setModalContent(legalContent[type]);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <footer className="bg-white border-t-2 border-black/10 text-black pt-20 pb-8 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        <div className="lg:col-span-1">
                            <h4 className="text-black text-3xl font-black mb-6 tracking-tighter">
                                DEVILSLAB
                            </h4>
                            <p className="text-base font-medium text-black/60 max-w-xs leading-relaxed">
                                We build systems. One flagship system for growth (Surge), and custom systems for clients who need deeper engineering work.
                            </p>
                        </div>

                        <div>
                            <h5 className="text-black font-black mb-6 text-sm tracking-widest uppercase">Services</h5>
                            <FooterLink href="/#flagship">Surge System</FooterLink>
                            <FooterLink href="/#services">SaaS Development</FooterLink>
                            <FooterLink href="/#services">Web3 Development</FooterLink>
                            <FooterLink href="/#services">R&D Services</FooterLink>
                        </div>
                        
                        <div>
                            <h5 className="text-black font-black mb-6 text-sm tracking-widest uppercase">Product</h5>
                            <FooterLink href="https://syncgalaxy.io/" target="_blank">SyncGalaxy</FooterLink>
                        </div>
                        
                        <div>
                            <h5 className="text-black font-black mb-6 text-sm tracking-widest uppercase">Company</h5>
                            <FooterLink href="/#how-we-work">How We Work</FooterLink>
                            <FooterLink href="/#faq">FAQ</FooterLink>
                            <FooterLink href="/#contact">Contact</FooterLink>
                            <FooterLink href="/dndx">Powered by DNDX</FooterLink>
                        </div>

                        <div>
                            <h5 className="text-black font-black mb-6 text-sm tracking-widest uppercase">Connect</h5>
                            <SocialLink href="https://x.com/DevilsLab0455?t=WupYuPib7LZ7pb4aIrl0Xw&s=09" icon={<Twitter size={18} />} label="Twitter" />
                            <SocialLink href="https://github.com/devilslab-io" icon={<Github size={18} />} label="GitHub" />
                            <SocialLink href="https://www.instagram.com/devilslab_digitals_pvt?igsh=MWh5eTd3amY3a20wNA==" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
                        </div>

                    </div>

                    <div className="pt-8 border-t border-black/10 space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-black/60">
                            <p className="mb-0">© {new Date().getFullYear()} DEVILSLAB DIGITALS PVT LTD • SYSTEM BUILDERS • HYDERABAD</p>
                            <div className="flex gap-8 items-center">
                                <a 
                                    href="#" 
                                    className="text-black/60 hover:text-black transition-colors uppercase tracking-wider"
                                    onClick={(e) => { e.preventDefault(); openModal('terms'); }}
                                >
                                    Terms
                                </a>
                                <a 
                                    href="#" 
                                    className="text-black/60 hover:text-black transition-colors uppercase tracking-wider"
                                    onClick={(e) => { e.preventDefault(); openModal('privacy'); }}
                                >
                                    Privacy
                                </a>
                                <a 
                                    href="#" 
                                    className="text-black/60 hover:text-black transition-colors uppercase tracking-wider"
                                    onClick={(e) => { e.preventDefault(); openModal('rnd'); }}
                                >
                                    R&D Policy
                                </a>
                            </div>
                        </div>
                        
                        {/* Powered by Dendrites - Unique Design */}
                        <div className="text-center py-2">
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
                    </div>
                </div>
            </footer>
            {modalContent && (
                <LegalModal 
                    isOpen={!!modalContent} 
                    onClose={closeModal} 
                    title={modalContent.title}
                    content={modalContent.content}
                />
            )}
        </>
    );
}
