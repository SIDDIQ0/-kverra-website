import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "@phosphor-icons/react";

export function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Kverra Infotech";
  }, []);

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-paper-50 px-4 py-32 text-center">
      <div>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/30">
          <Compass size={28} weight="bold" />
        </span>
        <p className="mt-6 font-display text-6xl font-semibold text-brand-900">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink-900">
          This page has not been edited yet.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-900/60">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="btn-glass btn-glass--primary btn-liquid mt-8 px-6 py-3.5 text-sm"
        >
          Back to home
          <ArrowRight size={18} weight="bold" />
        </Link>
      </div>
    </section>
  );
}
