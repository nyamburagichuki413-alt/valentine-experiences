"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import FloatingHearts from "@/components/FloatingHearts";
import SparkleButton from "@/components/SparkleButton";
import { encodePayload, slugifyNamePair, Payload } from "@/lib/share";

export default function Page() {
  const r = useRouter();
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [message, setMessage] = useState("You make every day feel like a celebration. Be my Valentine?");
  const [activities, setActivities] = useState<string>("Dinner • Sunset walk • Movie night");
  const [theme, setTheme] = useState<Payload["theme"]>("classic");

  const disabled = useMemo(() => !yourName.trim() || !crushName.trim(), [yourName, crushName]);

  function createLink() {
    const payload: Payload = {
      yourName: yourName.trim(),
      crushName: crushName.trim(),
      message: message.trim(),
      activities: activities
        .split(/[•,\n]/)
        .map(s => s.trim())
        .filter(Boolean),
      theme
    };
    const slug = slugifyNamePair(yourName, crushName);
    const encoded = encodePayload(payload);
    r.push(`/p/${slug}?d=${encoded}`);
  }

  return (
    <main className="relative min-h-dvh">
      <FloatingHearts count={18} />
      <section className="container pt-20 pb-10">
        <header className="text-center space-y-3">
          <h1 className="heading">Will you be my Valentine?</h1>
          <p className="subtle">Craft a personalized, shareable page in seconds.</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <div>
              <label className="block text-sm mb-1">Your name</label>
              <input value={yourName} onChange={e => setYourName(e.target.value)}
                placeholder="Dennis"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-roseGlow" />
            </div>

            <div>
              <label className="block text-sm mb-1">Their name</label>
              <input value={crushName} onChange={e => setCrushName(e.target.value)}
                placeholder="Valentine"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-roseGlow" />
            </div>

            <div>
              <label className="block text-sm mb-1">Custom message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-roseGlow" />
            </div>

            <div>
              <label className="block text-sm mb-1">Activities (comma, bullet “•”, or new line)</label>
              <textarea value={activities} onChange={e => setActivities(e.target.value)}
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-roseGlow" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm">Theme</span>
              <select value={theme} onChange={e => setTheme(e.target.value as any)}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <option value="classic">Classic</option>
                <option value="bubbles">Bubbles</option>
              </select>
            </div>

            <div className="pt-2 flex gap-3">
              <SparkleButton onClick={createLink} variant="primary" >
                Create your proposal
              </SparkleButton>
              <SparkleButton variant="ghost" onClick={() => {
                setYourName("Dennis"); setCrushName("Valentine");
              }}>
                See an example
              </SparkleButton>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg mb-3">Live Preview</h3>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
              <div className="text-sm text-white/80">From</div>
              <div className="text-2xl font-semibold">{yourName || "Dennis"}</div>
              <div className="text-sm text-white/80">To</div>
              <div className="text-2xl font-semibold">{crushName || "Valentine"}</div>
              <p className="pt-2 text-white/90">{message || "You make every day feel like a celebration. Be my Valentine?"}</p>
              <ul className="list-disc ml-6 text-white/90">
                {(activities ? activities.split(/[•,\n]/).map(s => s.trim()).filter(Boolean) : ["Dinner", "Sunset walk"]).map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <div className="pt-2 text-xs text-white/60">Your final link is generated after you click “Create your proposal”.</div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-white/60 text-xs">
          Made with ❤️ in Nairobi
        </footer>
      </section>
    </main>
  );
}