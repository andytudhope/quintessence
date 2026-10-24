import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Quintessence Publishing",
  description:
    "Get in touch with Quintessence Publishing — email info@qpublish.com for rights and permissions, submissions, orders and enquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <article className="prose">
        <h1>Contact us</h1>

        <p>
          We&rsquo;d love to hear from you — whether about rights and
          permissions, a submission, an order, or any other enquiry.
        </p>

        <p>
          Write to us at{" "}
          <a href="mailto:info@qpublish.com">info@qpublish.com</a>{" "}and we&rsquo;ll
          get back to you.
        </p>

        <p>Quintessence Publishing is based in Johannesburg, South Africa.</p>
      </article>

      <div className="mt-8">
        <a
          href="mailto:info@qpublish.com"
          className="inline-block rounded-full px-6 py-3 bg-[#006838] text-white font-semibold hover:bg-[#00572f] transition-colors"
        >
          Email info@qpublish.com
        </a>
      </div>
    </div>
  );
}
