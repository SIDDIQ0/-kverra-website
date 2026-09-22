import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Kverra Infotech";
  }, []);

  return (
    <section className="bg-paper-50 pt-16 pb-24 sm:pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-900">
          Privacy policy
        </h1>
        <p className="mt-2 text-sm text-ink-900/50">Last updated September 2026</p>

        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-ink-900/75">
          <p>
            Kverra Infotech ("we", "us") provides real estate photo and video
            editing services. This page explains what information we collect
            when you contact us or send us photos to edit, and how we use it.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">What we collect</h2>
            <p className="mt-2">
              When you reach out through WhatsApp, email, or an order form, we
              collect your name, contact details, and the photos or files you
              send us for editing. We do not request payment card details
              through chat or email.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">How we use it</h2>
            <p className="mt-2">
              Photos you send are used only to complete your editing order and
              are stored only as long as needed to deliver your files and
              handle any revision requests. Contact details are used to
              communicate about your order and, if you agree, to share
              occasional updates about our services.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Sharing</h2>
            <p className="mt-2">
              We do not sell your information. Files may be processed by
              members of our editing team under confidentiality obligations,
              and by the tools we use to receive and deliver orders (such as
              WhatsApp and email).
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Your choices</h2>
            <p className="mt-2">
              You can ask us to delete photos or contact details we hold for
              you at any time by messaging us on WhatsApp or emailing the
              address in our footer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
