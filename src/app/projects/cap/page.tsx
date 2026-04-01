import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ui/ScrollBackground";

export default function CampaignAnalysisPlatform() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#09090b] pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
        
        <ScrollBackground imageSrc="/cap-bg.png" />

        <article className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <Link href="/#projects" className="inline-flex items-center text-sm font-mono text-zinc-300 hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
          </Link>

          {/* Title & Summary */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-full">
              DATA PLATFORM
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6 drop-shadow-md">
              Campaign Analysis Platform (CAP)
            </h1>
            <p className="text-xl text-zinc-200 leading-relaxed border-l-2 border-zinc-700 pl-6 drop-shadow-md font-medium">
              A unified data platform that consolidates fragmented CRM data into a single system for campaign analysis and decision-making.
            </p>
          </header>

          <div className="space-y-16 text-zinc-200 leading-relaxed drop-shadow-md">
            
            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">01.</span>
                The Problem
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  CRM data is highly fragmented. Campaign assets, subject lines, performance metrics, and click-level data are stored across different systems, making it difficult to analyse performance holistically or compare campaigns meaningfully.
                </p>
                <p>Teams also need to evaluate performance across multiple dimensions:</p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  <li>Across regions</li>
                  <li>Across segments</li>
                  <li>Across similar campaigns</li>
                </ul>
                <p>
                  Without a unified structure, these comparisons were slow, manual, and inconsistent.
                </p>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">02.</span>
                Approach & Solution
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  I designed and built a centralised platform that integrates multiple CRM data sources into a single structured system.
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 my-6">
                  <p className="mb-4 text-zinc-300">The platform enables:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-3">▹</span>
                      Side-by-side campaign comparisons
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-3">▹</span>
                      Cross-region and cross-segment analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-3">▹</span>
                      Standardised KPI tracking
                    </li>
                  </ul>
                </div>
                <p>
                  Additionally, I applied AI-assisted tagging using <strong>Gemini</strong> to analyse subject lines across a structured framework (Curiosity, Urgency, Tone, Emotion, Specificity).
                </p>
                <p>
                  This allowed 3 years of campaigns to be evaluated consistently and scored (1&ndash;5), creating a data-driven way to understand what drives engagement.
                </p>
              </div>
            </section>

            {/* Features */}
            <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 pb-4 border-b border-zinc-800">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Unified Datasets</h3>
                  <p className="text-zinc-400 text-base">Campaign-level and click-level datasets mapped cleanly together.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Cross-dimensional Filtering</h3>
                  <p className="text-zinc-400 text-base">Filter and drill down by region, segment, and campaign variables.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Side-by-side Comparison</h3>
                  <p className="text-zinc-400 text-base">Clear visual contrast between specific campaign runs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">AI-driven Scoring</h3>
                  <p className="text-zinc-400 text-base">Automated subject line analysis evaluating tone and psychological hooks.</p>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">03.</span>
                Business Impact
              </h2>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Reduced time required to analyse campaign performance drastically.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Enabled consistent comparisons across regions and segments.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Provided a scalable way to evaluate and improve subject line performance.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  <strong>Shifted analysis from fragmented exploration to structured decision-making.</strong>
                </li>
              </ul>
            </section>

            {/* Tools */}
            <section className="pt-8 border-t border-zinc-800">
              <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "BigQuery", "GCP", "Streamlit", "Docker", "Gemini", "SAP Hybris"].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-400">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
