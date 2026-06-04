import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread PDF Exporter – Export Slack Threads as PDFs",
  description: "Convert Slack conversation threads into formatted PDF documents for sharing with clients or archiving important discussions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5996d63b-7d6a-463f-8f5b-a5d18ff6e061"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
