"use client";

import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Mail, MessageCircle } from "lucide-react";
import LegalModal from "./legal-modal";
import { legalContent, LegalContentType } from "@/lib/legal-data";

const contactEmail = "work@devilslab.co.in";
const whatsappNumber = "15162656596";

const routeToSections: Record<string, string[]> = {
    "/services": ["services"],
    "/offers": ["flagship", "offers"],
    "/work": ["selected-work", "work", "flagship-product"],
    "/contact": ["contact"],
};

const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/offers", label: "Offers" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

const capabilityItems = [
    "Website and landing page systems",
    "Lead intake and CRM tracking",
    "Dashboards and operational workflows",
    "MVP foundations and product UI",
];

const findExistingSection = (sectionIds: string[]) => {
    if (typeof document === "undefined") return sectionIds[0];
    return sectionIds.find((id) => document.getElementById(id)) || sectionIds[0];
};

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) return false;

    const headerOffset = 88;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementTop - headerOffset;

    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
    });

    return true;
};

const handleCleanRouteClick = (href: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (href === "/") {
        window.history.pushState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const sectionIds = routeToSections[href];

    if (!sectionIds) {
        window.location.href = href;
        return;
    }

    const sectionId = findExistingSection(sectionIds);
    const didScroll = scrollToSection(sectionId);

    if (didScroll) {
        window.history.pushState(null, "", href);
        return;
    }

    sessionStorage.setItem("devilslab-scroll-target", sectionId);
    window.location.href = href;
};

const CleanRouteLink = ({
    href,
    children,
    className,
}: {
    href: string;
    children: ReactNode;
    className: string;
}) => {
    return (
        <Link href={href} onClick={(event) => handleCleanRouteClick(href, event)} className={className}>
            {children}
        </Link>
    );
};

const FooterColumn = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div>
            <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                {title}
            </h5>

            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
};

export default function Footer() {
    const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const storedTarget = sessionStorage.getItem("devilslab-scroll-target");
        const currentPath = window.location.pathname;
        const routeTargets = routeToSections[currentPath] || [];

        const sectionIds = storedTarget ? [storedTarget, ...routeTargets] : routeTargets;

        if (!sectionIds.length) return;

        const timer = window.setTimeout(() => {
            const sectionId = findExistingSection(sectionIds);
            scrollToSection(sectionId);
            sessionStorage.removeItem("devilslab-scroll-target");
        }, 350);

        return () => window.clearTimeout(timer);
    }, []);

    const openModal = (type: LegalContentType) => {
        setModalContent(legalContent[type]);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <footer className="bg-[#0f172a] text-white px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-28 pt-16 pb-8">
                <div className="w-full max-w-none">
                    {/* Top Brand Area */}
                    <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
                        <div>
                            <CleanRouteLink
                                href="/"
                                className="inline-block text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.08em] leading-none text-white hover:text-white/80 transition-colors"
                            >
                                DEVILSLAB
                            </CleanRouteLink>

                            <p className="mt-6 max-w-[680px] text-base sm:text-lg font-medium leading-relaxed text-white/55">
                                Digital execution studio for businesses that need cleaner websites,
                                better lead flow, organized systems, and product-ready builds.
                            </p>
                        </div>

                        <div className="lg:text-right">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35 mb-4">
                                Project Desk
                            </p>

                            <CleanRouteLink
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] transition-all duration-200 hover:bg-white/90"
                            >
                                Start a Project
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </CleanRouteLink>
                        </div>
                    </div>

                    {/* Main Footer */}
                    <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 xl:grid-cols-[1.1fr,0.75fr,1fr,0.9fr] xl:gap-14">
                        <div>
                            <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                                Studio Focus
                            </h5>

                            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/50">
                                We build practical digital systems with clear structure, clean handoff,
                                and business-ready execution.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/45">
                                    Websites
                                </span>
                                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/45">
                                    Lead Systems
                                </span>
                                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/45">
                                    CRM
                                </span>
                                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/45">
                                    MVPs
                                </span>
                            </div>
                        </div>

                        <FooterColumn title="Explore">
                            {navigationLinks.map((link) => (
                                <CleanRouteLink
                                    key={link.href}
                                    href={link.href}
                                    className="w-fit text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                                >
                                    {link.label}
                                </CleanRouteLink>
                            ))}
                        </FooterColumn>

                        <FooterColumn title="Capabilities">
                            {capabilityItems.map((item) => (
                                <p key={item} className="text-sm font-semibold leading-relaxed text-white/50">
                                    {item}
                                </p>
                            ))}
                        </FooterColumn>

                        <FooterColumn title="Contact">
                            <a
                                href={`mailto:${contactEmail}`}
                                className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                <Mail className="h-4 w-4" />
                                <span>{contactEmail}</span>
                            </a>

                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>WhatsApp Business</span>
                            </a>

                            <a
                                href="https://github.com/devilslab-io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://waitlist.dendrites.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/35 transition-colors duration-200 hover:text-white"
                            >
                                <span>Powered by Dendrites</span>
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </FooterColumn>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col gap-5 pt-7 lg:flex-row lg:items-center lg:justify-between">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/35">
                            © {new Date().getFullYear()} DEVILSLAB DIGITALS PVT LTD
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider">
                            <button
                                type="button"
                                className="text-white/35 transition-colors hover:text-white"
                                onClick={() => openModal("terms")}
                            >
                                Terms
                            </button>

                            <button
                                type="button"
                                className="text-white/35 transition-colors hover:text-white"
                                onClick={() => openModal("privacy")}
                            >
                                Privacy
                            </button>

                            <button
                                type="button"
                                className="text-white/35 transition-colors hover:text-white"
                                onClick={() => openModal("rnd")}
                            >
                                R&D Policy
                            </button>
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