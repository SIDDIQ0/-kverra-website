import { ShieldCheck, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { whatsappLink, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "../data/site";

export function UtilityBar() {
  return (
    <div className="utility-bar relative z-40 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 px-4 py-2 text-center text-[11px] sm:px-6 sm:text-xs lg:px-8">
        <p className="flex items-center gap-1.5 font-medium tracking-wide text-gold-300">
          <ShieldCheck size={14} weight="fill" />
          Best Price Guarantee
        </p>
        <span className="hidden text-gold-500/40 sm:inline">•</span>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-gold-300"
        >
          <WhatsappLogo size={14} weight="fill" />
          <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
        </a>
        <span className="hidden text-gold-500/40 sm:inline">•</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-gold-300"
        >
          <EnvelopeSimple size={14} weight="bold" />
          <span className="whitespace-nowrap">{CONTACT_EMAIL}</span>
        </a>
      </div>
    </div>
  );
}
