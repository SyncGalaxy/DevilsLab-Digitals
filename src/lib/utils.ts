import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface OpenWhatsAppParams {
  mode: "general" | "quotation";
  service?: string;
  budget?: string;
  message?: string;
  source?: string;
}

export function openWhatsApp({
  mode,
  service = "",
  budget = "",
  message = "I'd like to connect.",
  source = "Website"
}: OpenWhatsAppParams) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  
  let formattedMessage: string;

  if (mode === "general") {
    // GENERAL MESSAGE MODE: Only greeting + user's exact message
    formattedMessage = `Hi devilsLab team 👋\n\n${message}`;
  } else {
    // QUOTATION MODE: Full template with service and budget
    formattedMessage = `Hi devilsLab team 👋

I'm interested in:
${service || "Services to be discussed"}

Estimated budget:
${budget || "To be discussed"}

Message:
${message}

Source:
${source}`;
  }

  const encodedMessage = encodeURIComponent(formattedMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
