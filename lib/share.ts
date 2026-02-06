export type Payload = {
  yourName: string;
  crushName: string;
  activities: string[]; // optional list
  message: string;
  theme?: "classic" | "bubbles";
};

export function encodePayload(payload: Payload) {
  const json = JSON.stringify(payload);
  return Buffer.from(json, "utf-8").toString("base64url");
}

export function decodePayload<T = Payload>(input: string): T | null {
  try {
    const json = Buffer.from(input, "base64url").toString("utf-8");
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}

export function slugifyNamePair(a: string, b: string) {
  const clean = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return `${clean(a)}-and-${clean(b)}` || "valentine";
}