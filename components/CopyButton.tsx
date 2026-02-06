"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        } catch {}
      }}
      className="text-sm bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 rounded-lg"
    >
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}