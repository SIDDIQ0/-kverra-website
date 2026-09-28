import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappLink } from "../data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 motion-safe:animate-[whatsapp-pulse_2.6s_ease-in-out_infinite] sm:right-8 sm:bottom-8"
    >
      <WhatsappLogo size={30} weight="fill" />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 motion-safe:animate-[whatsapp-ring_2.6s_ease-out_infinite]"
      />
    </a>
  );
}
