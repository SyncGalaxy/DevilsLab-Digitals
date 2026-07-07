import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Who We Help — DevilsLab Digitals",
  description:
    "DevilsLab works with startups, agencies, freelancers, local businesses, and solo founders who need a website, system, or digital product built fast and properly.",
};

export default function WhoWeHelpPage() {
  return <HomePagePremium />;
}
