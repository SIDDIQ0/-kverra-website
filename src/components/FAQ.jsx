import { useReveal, useStaggerReveal } from "../hooks/useReveal";

const faqs = [
  {
    q: "How fast can I actually get photos back?",
    a: "Interior retouching, object removal and flambient orders are usually done in under 24 hours. Twilight, day-to-dusk and panorama work take a little longer since more of the frame is rebuilt, typically 36 to 48 hours.",
  },
  {
    q: "What file types do you accept?",
    a: "RAW (CR2, NEF, ARW), TIFF and high-resolution JPEG all work. For interior retouching and flambient orders, send the individual bracketed exposures rather than a pre-blended file.",
  },
  {
    q: "Do you offer a trial before I commit?",
    a: "Yes. Send your first three photos and we edit them at no charge, so you can see the colour grade and turnaround before placing a paid order.",
  },
  {
    q: "Can I get a consistent look across a whole listing?",
    a: "That is the default, not an add-on. One editor works the full batch so every room, and every listing from the same agent, comes back matched.",
  },
  {
    q: "How do I pay, and when?",
    a: "We invoice after delivery for ongoing accounts, or take payment upfront for one-off orders. Bank transfer, card and PayPal are all supported.",
  },
  {
    q: "What if I need something outside these services?",
    a: "Message us on WhatsApp with the brief. Custom manipulation, floor plan tracing and video walkthroughs are handled case by case.",
  },
];

export function FAQ() {
  const headerRef = useReveal();
  const listRef = useStaggerReveal(".faq-item", { stagger: 0.06, y: 18 });

  return (
    <section className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Questions, <em className="text-blue-600">answered</em>.
          </h2>
        </div>

        <div ref={listRef} className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="faq-item border-t border-brand-900/10 pt-5">
              <p className="font-display text-lg font-semibold text-ink-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
