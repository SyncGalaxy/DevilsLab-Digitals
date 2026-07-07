import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Our Work — DevilsLab Digitals",
  description:
    "Selected projects built by DevilsLab — websites, MVPs, CRM trackers, lead-generation systems, and dashboards for startups, agencies, and small businesses.",
};

export default function WorkPage() {
  return <HomePagePremium />;
}
