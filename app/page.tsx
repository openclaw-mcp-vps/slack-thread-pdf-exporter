export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Productivity Tool for Teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Export Slack Threads as
          <span className="text-[#58a6ff]"> Beautiful PDFs</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Convert any Slack conversation thread into a formatted PDF document. Perfect for sharing with clients or archiving important discussions.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started – $5/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Connect Slack", desc: "Authenticate with your Slack workspace via OAuth in one click." },
            { step: "2", title: "Paste Thread URL", desc: "Copy any Slack thread link and paste it into the exporter." },
            { step: "3", title: "Download PDF", desc: "Get a beautifully formatted PDF with full threading and metadata." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-2">{item.step}</div>
              <div className="text-white font-medium mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$5<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to export Slack threads</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited PDF exports",
              "Full thread formatting",
              "Slack OAuth integration",
              "Message metadata & timestamps",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Slack plans are supported?",
              a: "All Slack plans are supported, including free workspaces. You just need permission to read the channels you want to export."
            },
            {
              q: "Is my Slack data stored on your servers?",
              a: "No. Thread data is fetched on-demand and used only to generate your PDF. Nothing is stored after the export is complete."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, you can cancel at any time from your billing portal. You'll retain access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-medium mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Slack Thread PDF Exporter. All rights reserved.
      </footer>
    </main>
  );
}
