import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Our Process — DevilsLab Digitals",
  description:
    "See how DevilsLab works: from the first call to launch. A clear, structured process that keeps your project moving without surprises.",
};

export default function ProcessPage() {
  return <HomePagePremium />;
}
