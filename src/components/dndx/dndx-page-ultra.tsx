'use client';

import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DNDXPageUltra() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider border border-gray-200 bg-gray-50 text-gray-700">
                            Technology Partner
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1e293b] tracking-tight">
                        Powered by DNDX
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        DNDX (Dendrites) is our technology infrastructure partner, providing blockchain-based systems for secure collaboration and payment processing.
                    </p>
                    <p className="text-base text-gray-500 max-w-xl mx-auto">
                        We leverage DNDX protocols to ensure transparency, security, and efficiency in our client delivery systems.
                    </p>
                </div>
            </section>

            {/* How DNDX Powers Our Systems */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-12 text-center">
                        How DNDX Powers Our Systems
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                                Secure Infrastructure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                DNDX provides cryptographic security layers that protect client data and transaction integrity across our delivery pipeline.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                                Fast Settlements
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Instant payment processing and milestone-based settlements through smart contract automation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center mb-4">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                                Transparent Tracking
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete audit trails and transparency for all project milestones and deliverables.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
                        Ready to Build Your System?
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Start with the Surge System or explore custom development options.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/#flagship"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200"
                        >
                            View Surge System
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/quotation"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 transition-all duration-200"
                        >
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* About DNDX */}
            <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-medium">
                        About DNDX
                    </p>
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        Dendrites (DNDX) is a decentralized protocol for secure, trustless collaboration and payment infrastructure. It enables businesses to operate with transparency, security, and efficiency through blockchain-based systems.
                    </p>
                    <a 
                        href="https://dendrites.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1e293b] font-medium hover:underline"
                    >
                        Learn more about DNDX
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </main>
    );
}
