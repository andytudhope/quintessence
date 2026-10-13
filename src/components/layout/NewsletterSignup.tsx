"use client";

import { useEffect, useRef } from "react";

// EmailOctopus embedded form (Quintessence Readers list).
// To swap the form later, replace this ID with the new form's ID
// from EmailOctopus → Forms → Publish/Embed.
const EMAILOCTOPUS_FORM_ID = "6cdbb7fa-850a-11f1-8292-435f9dc04346";

const NewsletterSignup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    // Guard against double-injection (React Strict Mode runs effects twice in dev).
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://eomail6.com/form/${EMAILOCTOPUS_FORM_ID}.js`;
    script.setAttribute("data-form", EMAILOCTOPUS_FORM_ID);
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
};

export default NewsletterSignup;
