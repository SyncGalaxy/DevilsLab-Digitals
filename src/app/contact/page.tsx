import type { Metadata } from "next";
import HomePagePremium from "@/components/home/home-page-premium-v2";

export const metadata: Metadata = {
  title: "Contact — DevilsLab Digitals",
  description:
    "Get in touch with DevilsLab. Tell us what you need built — website, MVP, CRM, or lead-generation system — and we'll continue on WhatsApp or a 15-minute Growth Audit call.",
};

export default function ContactPage() {
  return <HomePagePremium />;
}
