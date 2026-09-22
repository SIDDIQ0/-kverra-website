import { Link } from "react-router-dom";
import {
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import logoMark from "../assets/kverra-logo-mark.png";
import { services } from "../data/services";
import { whatsappLink, CONTACT_EMAIL } from "../data/site";

const socials = [
  { icon: InstagramLogo, href: "#", label: "Instagram" },
  { icon: FacebookLogo, href: "#", label: "Facebook" },
  { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 pt-16 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoMark} alt="Kverra" className="h-8 w-auto" />
              <span className="font-display text-lg font-semibold tracking-[0.2em] text-white">
                INFOTECH
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Real estate photo editing for agents, photographers and
              brokerages across the USA, UK and India.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-semibold text-white/80 transition-colors hover:text-white">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><a href="/#what-we-do" className="transition-colors hover:text-white">What we do</a></li>
              <li><Link to="/portfolio" className="transition-colors hover:text-white">Portfolio</Link></li>
              <li><a href="/#process" className="transition-colors hover:text-white">Process</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <EnvelopeSimple size={16} weight="bold" />
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="btn-glass btn-glass--secondary btn-glass--icon h-9 w-9"
                >
                  <s.icon size={16} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gold-500/15 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kverra Infotech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms of service</Link>
          </div>
          <p>Innovate. Build. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
