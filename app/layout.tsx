import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Valentine Experiences",
  description: "Create a personalized Valentine experience link.",
  openGraph: {
    title: "Valentine Experiences",
    description: "Create a personalized Valentine experience link.",
    type: "website"
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export const viewport: Viewport = {
  themeColor: "#ff2a83"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">{children}</body>
    </html>
  );
}