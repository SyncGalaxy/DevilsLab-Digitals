import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Offers — DevilsLab Digitals",
  description:
    "DevilsLab's flagship packages: Launch Setup, 7-Day Growth System, and the full Surge System. Everything you need to go from zero to live.",
};

export default function OffersPage() {
  return <HomePagePremium />;
}
