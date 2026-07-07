import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "FAQ — DevilsLab Digitals",
  description:
    "Answers to common questions about working with DevilsLab — timelines, pricing, tech stack, revisions, and what happens after launch.",
};

export default function FaqPage() {
  return <HomePagePremium />;
}
