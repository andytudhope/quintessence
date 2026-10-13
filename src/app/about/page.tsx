import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Quintessence Publishing",
  description:
    "Quintessence Publishing brings the inner sciences of Islam — Irfan, Sufism, and the contemplative Qurʾān — into publication.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <article className="prose dark:prose-invert">
        <h1>About Quintessence Publishing</h1>

        <p>
          Quintessence Publishing renders and publishes the classical inner
          sciences of Islam — Irfan, Sufism, and the contemplative Qurʾān,
          rooted in the tradition and the teaching of the Ahl al-Bayt.
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
          <strong>Qurʾān &amp; Islam</strong>{" "}— translations and studies that
          read the Book and the teaching of the Ahl al-Bayt for the light within
          it.
        </p>
        <p>
          <strong>Irfan &amp; Sufism</strong>{" "}— the gnostic heart of the
          tradition, in the lineage of Ibn ʿArabī, al-Qūnawī, and Mullā Ṣadrā.
        </p>
        <p>
          <strong>Poetry</strong>{" "}— where doctrine becomes music.
        </p>

        <h2>How we work</h2>
        <p>
          Our orientation is the gnosis of Islam, with the Ahl al-Bayt as our
          locus.
        </p>

        <h2>Who is behind Quintessence</h2>
        <p>
          Quintessence Publishing was founded by{" "}
          <a
            href="https://www.linkedin.com/in/leyya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leyya Kalla
          </a>
          {" "}— entrepreneur and Chief Editor, twelve years a scribe to{" "}
          <a
            href="https://shaykhfadhlallahaeri.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaykh Fadhlalla Haeri
          </a>
          .
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
