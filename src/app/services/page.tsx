import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Services — DevilsLab Digitals",
  description:
    "Explore DevilsLab's services: website builds, MVPs, lead-generation systems, CRM trackers, dashboards, and growth systems for startups, agencies, and small businesses.",
};

export default function ServicesPage() {
  return <HomePagePremium />;
}
