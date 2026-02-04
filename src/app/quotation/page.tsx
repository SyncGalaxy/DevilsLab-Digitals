"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Service {
    id: string;
    name: string;
    price: number;
    category: string;
}

export default function QuotationPage() {
    const [selectedServices, setSelectedServices] = useState<{[key: string]: boolean}>({});

    const services: Service[] = [
        { id: 'surge', name: 'Surge System', price: 75000, category: 'flagship' },
        { id: 'static', name: 'Static Website', price: 25000, category: 'web' },
        { id: 'dynamic', name: 'Dynamic Website', price: 60000, category: 'web' },
        { id: 'saas-mvp', name: 'SaaS MVP', price: 150000, category: 'saas' },
        { id: 'saas-scalable', name: 'Scalable SaaS Platform', price: 400000, category: 'saas' },
        { id: 'web3-integration', name: 'Web3 Integration', price: 100000, category: 'web3' },
        { id: 'web3-platform', name: 'Full Web3 Platform', price: 250000, category: 'web3' },
        { id: 'rnd', name: 'R&D (per month)', price: 75000, category: 'rnd' }
    ];

    const isSurgeSelected = selectedServices['surge'] || false;
    const isDynamicSelected = selectedServices['dynamic'] || false;
    const LANDING_PAGE_CREDIT = 15000;

    const toggleService = (serviceId: string) => {
        if (serviceId === 'surge') {
            if (!isSurgeSelected) {
                // Selecting Surge - disable static but keep others
                const newSelection: {[key: string]: boolean} = { ...selectedServices, surge: true };
                delete newSelection['static'];
                setSelectedServices(newSelection);
            } else {
                // Deselecting Surge
                setSelectedServices(prev => ({
                    ...prev,
                    surge: false
                }));
            }
        } else if (serviceId === 'static' && isSurgeSelected) {
            // Cannot select static when surge is selected
            return;
        } else {
            setSelectedServices(prev => ({
                ...prev,
                [serviceId]: !prev[serviceId]
            }));
        }
    };

    const calculateTotal = () => {
        return services.reduce((total, service) => {
            if (!selectedServices[service.id]) return total;
            
            // Apply landing page credit if both Surge and Dynamic are selected
            if (service.id === 'dynamic' && isSurgeSelected && isDynamicSelected) {
                return total + (service.price - LANDING_PAGE_CREDIT);
            }
            
            return total + service.price;
        }, 0);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const total = calculateTotal();

    const handleRequestQuotation = () => {
        const selected = services
            .filter(s => selectedServices[s.id])
            .map(s => s.name)
            .join(', ');
        
        const message = `Selected Services: ${selected || 'None'}\nEstimated Total: ${formatPrice(total)}`;
        
        const params = new URLSearchParams({
            message: message
        });
        
        window.location.href = `/#contact?${params.toString()}`;
    };

    const groupedServices = {
        flagship: services.filter(s => s.category === 'flagship'),
        web: services.filter(s => s.category === 'web'),
        saas: services.filter(s => s.category === 'saas'),
        web3: services.filter(s => s.category === 'web3'),
        rnd: services.filter(s => s.category === 'rnd')
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-20 px-6 sm:px-8 lg:px-16 border-b border-gray-200">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] mb-6">
                        Build Your Custom Quotation
                    </h1>
                    <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
                        Select the services you need. Instantly see an estimated project cost.
                    </p>
                </div>
            </section>

            {/* Quotation Builder */}
            <section className="py-20 px-6 sm:px-8 lg:px-16">
                <div className="max-w-[1000px] mx-auto">
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
                        
                        {/* Surge System */}
                        <div className="mb-8 pb-8 border-b-2 border-gray-200">
                            <h3 className="text-lg font-semibold text-[#1e293b] mb-4 uppercase tracking-wider">Flagship Service</h3>
                            {groupedServices.flagship.map((service) => (
                                <label 
                                    key={service.id}
                                    className="flex items-center justify-between p-5 rounded-lg border-2 border-[#1e293b] bg-[#1e293b]/5 cursor-pointer transition-all hover:border-[#1e293b]/80"
                                >
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedServices[service.id] || false}
                                            onChange={() => toggleService(service.id)}
                                            className="w-5 h-5 rounded border-gray-300 text-[#1e293b] focus:ring-[#1e293b] cursor-pointer"
                                        />
                                        <div>
                                            <span className="text-base font-semibold text-gray-900 block">{service.name}</span>
                                            <span className="text-sm text-gray-600">Complete lead generation infrastructure</span>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-[#1e293b]">{formatPrice(service.price)}</span>
                                </label>
                            ))}
                            {isSurgeSelected && (
                                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> Surge System includes a ₹15,000 landing page. Static website option is not available. Dynamic website receives a ₹15,000 credit.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Web Development */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1e293b] mb-4 uppercase tracking-wider">Web Development</h3>
                            <div className="space-y-3">
                                {groupedServices.web.map((service) => {
                                    const isStaticDisabled = service.id === 'static' && isSurgeSelected;
                                    const showDynamicCredit = service.id === 'dynamic' && isSurgeSelected && isDynamicSelected;
                                    
                                    return (
                                        <div key={service.id}>
                                            <label 
                                                className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 transition-all ${
                                                    isStaticDisabled
                                                        ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                                                        : 'hover:border-gray-300 cursor-pointer'
                                                }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedServices[service.id] || false}
                                                        onChange={() => toggleService(service.id)}
                                                        disabled={isStaticDisabled}
                                                        className="w-5 h-5 rounded border-gray-300 text-[#1e293b] focus:ring-[#1e293b] cursor-pointer disabled:cursor-not-allowed"
                                                    />
                                                    <span className="text-base font-medium text-gray-900">{service.name}</span>
                                                </div>
                                                <span className="text-base font-semibold text-gray-700">{formatPrice(service.price)}</span>
                                            </label>
                                            {isStaticDisabled && (
                                                <p className="text-xs text-gray-500 mt-1 ml-9 italic">Included in Surge System</p>
                                            )}
                                            {showDynamicCredit && (
                                                <p className="text-xs text-green-600 mt-1 ml-9 italic">₹15,000 landing page credit applied from Surge System</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* SaaS Development */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1e293b] mb-4 uppercase tracking-wider">SaaS Development</h3>
                            <div className="space-y-3">
                                {groupedServices.saas.map((service) => (
                                    <label 
                                        key={service.id}
                                        className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedServices[service.id] || false}
                                                onChange={() => toggleService(service.id)}
                                                className="w-5 h-5 rounded border-gray-300 text-[#1e293b] focus:ring-[#1e293b] cursor-pointer"
                                            />
                                            <span className="text-base font-medium text-gray-900">{service.name}</span>
                                        </div>
                                        <span className="text-base font-semibold text-gray-700">{formatPrice(service.price)}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Web3 Development */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1e293b] mb-4 uppercase tracking-wider">Web3 Development</h3>
                            <div className="space-y-3">
                                {groupedServices.web3.map((service) => (
                                    <label 
                                        key={service.id}
                                        className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedServices[service.id] || false}
                                                onChange={() => toggleService(service.id)}
                                                className="w-5 h-5 rounded border-gray-300 text-[#1e293b] focus:ring-[#1e293b] cursor-pointer"
                                            />
                                            <span className="text-base font-medium text-gray-900">{service.name}</span>
                                        </div>
                                        <span className="text-base font-semibold text-gray-700">{formatPrice(service.price)}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* R&D */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1e293b] mb-4 uppercase tracking-wider">Research & Development</h3>
                            <div className="space-y-3">
                                {groupedServices.rnd.map((service) => (
                                    <label 
                                        key={service.id}
                                        className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedServices[service.id] || false}
                                                onChange={() => toggleService(service.id)}
                                                className="w-5 h-5 rounded border-gray-300 text-[#1e293b] focus:ring-[#1e293b] cursor-pointer"
                                            />
                                            <span className="text-base font-medium text-gray-900">{service.name}</span>
                                        </div>
                                        <span className="text-base font-semibold text-gray-700">{formatPrice(service.price)}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="border-t-2 border-gray-200 pt-8 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl font-bold text-[#1e293b]">Estimated Total</span>
                                <span className="text-4xl font-bold text-[#1e293b]">{formatPrice(total)}</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                    * This is an estimated quotation only. Final pricing may vary based on project requirements, scope, complexity, and specific customizations. This quote does not constitute a binding agreement.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleRequestQuotation}
                            className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-[#1e293b] text-white text-base font-medium hover:bg-[#1e293b]/90 transition-all duration-200"
                        >
                            Request Detailed Quotation
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
