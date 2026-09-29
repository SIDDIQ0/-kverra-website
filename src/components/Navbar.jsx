import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  CaretDown,
  List,
  X,
  House,
  Buildings,
  Eraser,
  MoonStars,
  Waves,
  Drone,
  CloudSun,
  ArrowsClockwise,
  Armchair,
  Flame,
  ArrowRight,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import logoMark from "../assets/kverra-logo-mark.png";
import { services } from "../data/services";
import { whatsappLink } from "../data/site";
import { useLenis } from "../lenis/LenisContext.jsx";

const icons = {
  House,
  Buildings,
  Eraser,
  MoonStars,
  Waves,
  Drone,
  CloudSun,
  ArrowsClockwise,
  Armchair,
  Flame,
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const mobileRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const lenis = lenisRef?.current;
    if (lenis) {
      const onScroll = (e) => setScrolled(e.scroll > 12);
      lenis.on("scroll", onScroll);
      return () => lenis.off("scroll", onScroll);
    }
    // No Lenis instance under prefers-reduced-motion: fall back to a plain,
    // passive listener for this simple threshold toggle only.
    const onNativeScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    return () => window.removeEventListener("scroll", onNativeScroll);
  }, [lenisRef]);

  useEffect(() => {
    if (!panelRef.current) return;
    if (servicesOpen) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [servicesOpen]);

  useEffect(() => {
    const lenis = lenisRef?.current;
    if (mobileOpen) {
      // The overlay only mounts (and mobileRef only attaches) once mobileOpen
      // is true, so this guard belongs to the open branch alone. Guarding
      // the whole effect with it meant the close branch below silently
      // never ran: by the time this effect re-fires with mobileOpen=false,
      // React has already unmounted the overlay and cleared the ref, so an
      // early return here skipped the cleanup and left the page permanently
      // unscrollable after the menu was closed once.
      if (!mobileRef.current) return;
      document.body.style.overflow = "hidden";
      // Lenis owns wheel/touch scroll independently of body overflow, so a
      // touch drag on the overlay can still smooth-scroll the page behind
      // it unless Lenis itself is paused too. But `lenis.stop()` disables
      // scroll input *globally*, not just on the page behind the overlay -
      // it was silently blocking the overlay's own `overflow-y-auto` too,
      // which made Portfolio (and the CTA below it) unreachable once the
      // services list pushed the menu taller than the viewport. The
      // `data-lenis-prevent` attribute on the overlay below is Lenis's own
      // documented escape hatch for exactly this: it tells Lenis to skip
      // its scroll interception for that element regardless of stop/start
      // state, so its native scroll works independently of the page lock.
      lenis?.stop();
      gsap.fromTo(
        mobileRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileRef.current.querySelectorAll(".mobile-link"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.1, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
  }, [mobileOpen, lenisRef]);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !e.target.closest("[data-services-trigger]")) {
        setServicesOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const servicesActive = location.pathname.startsWith("/services");
  const navLinkClass = ({ isActive }) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-ink-900/70 hover:bg-paper-100 hover:text-ink-900"
    }`;

  return (
    <>
    {/* Sticky, not fixed: the navbar reserves its own space in normal flow
        so the slim UtilityBar above it (rendered as a separate, non-sticky
        sibling in App.jsx) scrolls away naturally while this bar takes over
        the top of the viewport - no manual page-level padding math needed. */}
    <header
      ref={navRef}
      className={`sticky top-0 z-40 bg-paper-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(37,99,235,0.35),0_12px_24px_-18px_rgba(23,32,51,0.25)]" : "shadow-[0_1px_0_rgba(37,99,235,0.2)]"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={closeAll}>
          <img src={logoMark} alt="Kverra Infotech" className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <div className="relative">
            <button
              data-services-trigger
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                servicesActive ? "text-blue-600" : "text-ink-900/70 hover:bg-paper-100 hover:text-ink-900"
              }`}
              aria-expanded={servicesOpen}
            >
              Services
              <CaretDown
                size={14}
                weight="bold"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                ref={panelRef}
                className="glass-panel-light absolute top-full left-1/2 mt-3 w-[620px] -translate-x-1/2 overflow-hidden rounded-2xl p-3 shadow-2xl shadow-brand-900/15"
              >
                <div className="grid grid-cols-2 gap-1">
                  {services.map((s) => {
                    const Icon = icons[s.icon];
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={closeAll}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-paper-100/80"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20">
                          {Icon && <Icon size={18} weight="bold" />}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink-900">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-secondary-500">
                            {s.delivery}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/services"
                  onClick={closeAll}
                  className="glass-panel-light mt-2 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-brand-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                >
                  View all services
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass btn-glass--primary btn-liquid hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="btn-glass btn-glass--secondary-light btn-glass--icon lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <List size={22} />
          </button>
        </div>
      </nav>
    </header>

      {mobileOpen && (
        <div
          ref={mobileRef}
          data-lenis-prevent
          className="glass-overlay fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <img src={logoMark} alt="Kverra Infotech" className="h-9 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="btn-glass btn-glass--secondary btn-glass--icon"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-1">
            <Link to="/" onClick={closeAll} className="mobile-link rounded-xl px-3 py-3 text-lg font-semibold text-white">
              Home
            </Link>

            <p className="mobile-link mt-4 px-3 text-xs font-semibold tracking-[0.2em] text-blue-400/70">
              SERVICES
            </p>
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={closeAll}
                  className="mobile-link flex items-center gap-3 rounded-xl px-3 py-2.5 text-white/85"
                >
                  {Icon && <Icon size={18} weight="bold" className="text-blue-400" />}
                  {s.name}
                </Link>
              );
            })}
            <Link
              to="/services"
              onClick={closeAll}
              className="mobile-link px-3 py-2.5 text-sm font-semibold text-blue-400"
            >
              View all services →
            </Link>

            <Link to="/portfolio" onClick={closeAll} className="mobile-link mt-4 rounded-xl px-3 py-3 text-lg font-semibold text-white">
              Portfolio
            </Link>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link btn-glass btn-glass--primary btn-liquid mt-6 px-5 py-3.5 text-center text-base"
            >
              Contact us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
