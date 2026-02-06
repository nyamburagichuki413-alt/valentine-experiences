import FloatingHearts from "../../../components/FloatingHearts";
import SparkleButton from "../../../components/SparkleButton";
import CopyButton from "../../../components/CopyButton";
import { decodePayload, Payload } from "../../../lib/share";

export default function ExperiencePage({ searchParams }: { params: { id: string }, searchParams: { d?: string } }) {
  const data = searchParams?.d ? decodePayload<Payload>(searchParams.d) : null;

  if (!data) {
    return (
      <main className="min-h-dvh container grid place-items-center text-center">
        <div className="space-y-3">
          <h1 className="heading">Link corrupted or missing</h1>
          <p className="subtle">Go back and generate a fresh proposal.</p>
        </div>
      </main>
    );
  }

  const { yourName, crushName, message, activities, theme } = data;

  return (
    <main className="relative min-h-dvh">
      <FloatingHearts count={theme === "bubbles" ? 28 : 18} />
      <section className="container pt-20 pb-16">
        <header className="text-center space-y-2">
          <p className="subtle">From {yourName}</p>
          <h1 className="heading">{crushName}, will you be my Valentine?</h1>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          <div className="card space-y-4">
            <p className="text-lg leading-relaxed">{message}</p>
            {activities?.length ? (
              <>
                <div className="text-white/80 text-sm">Here’s what I have in mind:</div>
                <ul className="list-disc ml-6 space-y-1">
                  {activities.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </>
            ) : null}

            <div className="flex gap-3 pt-3">
              <SparkleButton variant="primary">Yes ❤️</SparkleButton>
              <SparkleButton variant="ghost">Of course 💖</SparkleButton>
            </div>

            <div className="pt-4 text-xs text-white/60">
              Clicking either button makes me the happiest person today.
            </div>
          </div>

          <aside className="card space-y-3">
            <h3 className="text-lg font-semibold">Share this page</h3>
            <p className="text-sm text-white/70">Send it to {crushName} or post it.</p>
            <CopyButton text={typeof window !== "undefined" ? window.location.href : ""} />
          </aside>
        </div>

        <footer className="text-center mt-12 text-white/60 text-xs">
          Crafted with ❤️ by {yourName}
        </footer>
      </section>
    </main>
  );

}
