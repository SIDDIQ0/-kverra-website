import { useEffect } from "react";

export function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Kverra Infotech";
  }, []);

  return (
    <section className="bg-paper-50 pt-16 pb-24 sm:pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-900">
          Terms of service
        </h1>
        <p className="mt-2 text-sm text-ink-900/50">Last updated September 2026</p>

        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-ink-900/75">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Orders and delivery</h2>
            <p className="mt-2">
              Delivery times listed on each service page are estimates and
              begin once we have received a complete, useable set of source
              files. Delivery may take longer for very large batches or
              unusually complex edits, and we will let you know if that is
              the case before we start.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Revisions</h2>
            <p className="mt-2">
              If a delivered edit does not match what was requested, tell us
              within seven days and we will revise it at no extra charge.
              Requests to change the brief after delivery (a different style,
              additional objects removed, and so on) are treated as a new
              edit.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Ownership</h2>
            <p className="mt-2">
              You retain ownership of the photos you send us and of the
              edited files we return. We do not use your property photos in
              our own marketing without asking first.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">Payment</h2>
            <p className="mt-2">
              Pricing shown per service is per image and may vary for bulk
              orders or custom requests; we will always confirm a total
              before starting work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
