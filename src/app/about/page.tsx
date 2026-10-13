import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Quintessence Publishing",
  description:
    "Quintessence Publishing renders the classical inner sciences of Islam — Irfan, Sufism, and the contemplative Qurʾān — into faithful, readable English.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <article className="prose dark:prose-invert">
        <h1>About Quintessence Publishing</h1>

        <p>
          Quintessence Publishing brings the inner sciences of Islam — ʿirfān,
          taṣawwuf, and the contemplative Qurʾān — into clear, faithful English.
          We are a small press by intention: we would rather publish one book
          truly than many quickly.
        </p>

        <h2>The name</h2>
        <p>
          <em>Quintessence</em>{" "}is the &ldquo;fifth essence&rdquo; — the pure,
          subtle reality drawn out from the many, beyond the four elements. It is
          a Latin word for an idea native to this tradition: the alchemy behind
          it grew from Islamic{" "}<em>kīmiyāʾ</em>, and the Qurʾān keeps its own
          word for the kernel within the husk — <em>lubb</em>, whose possessors,
          the{" "}<em>ūlū al-albāb</em>, reach the essence of things. We take the
          name as our task: to draw out the essence of a text and render it
          without distortion.
        </p>

        <h2>What we publish</h2>
        <p>
          <strong>Irfan &amp; Sufism</strong>{" "}— the gnostic heart of the
          tradition, in the lineage of Ibn ʿArabī, al-Qūnawī, and Mullā Ṣadrā.
        </p>
        <p>
          <strong>Qurʾān &amp; Islam</strong>{" "}— translations and studies that
          read the Book and the teaching of the Ahl al-Bayt for the light within
          it.
        </p>
        <p>
          <strong>Poetry</strong>{" "}— where doctrine becomes music.
        </p>

        <h2>How we work</h2>
        <p>
          We work from sound sources and translate closely without stiffness, so
          that a text&rsquo;s meaning — not merely its words — comes through. Our
          orientation is the Akbarī–Ṣadrian gnosis of Shia Islam, with the Ahl
          al-Bayt as our locus.
        </p>

        <h2>Who is behind Quintessence</h2>
        <p>
          Quintessence Publishing was founded by Leyya Kalla — scholar and
          editor, for twelve years scribe to Shaykh Fadhlalla Haeri, and
          previously founder of Zahra Publications.
        </p>

        <p>
          New titles arrive a few times a year.{" "}
          <Link href="/subscribe">Join our reader list</Link>{" "}to hear when they
          do.
        </p>
      </article>
    </div>
  );
}
