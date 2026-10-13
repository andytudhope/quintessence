import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/layout/NewsletterSignup";

export const metadata: Metadata = {
  title: "Join our reader list — Quintessence Publishing",
  description:
    "Subscribe to hear when Quintessence Publishing releases new titles in ʿIrfān, Sufism, the Qurʾān and poetry.",
};

export default function SubscribePage() {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="flex flex-col items-center justify-center px-4 py-16 bg-white"
    >
      {/* Make the EmailOctopus form blend into the page instead of sitting in a white card. */}
      <style>{`
        .nurture-container {
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
      `}</style>
      <div className="w-full max-w-md">
        <NewsletterSignup />
      </div>
      <Link href="/" className="mt-8 text-sm text-gray-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
