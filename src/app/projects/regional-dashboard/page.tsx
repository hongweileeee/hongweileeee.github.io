import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ui/ScrollBackground";

export default function RegionalDashboard() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#09090b] pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
        <ScrollBackground imageSrc="/campaign-performance-bg.png" />
        <article className="max-w-4xl mx-auto relative z-10">
          
          <Link href="/#projects" className="inline-flex items-center text-sm font-mono text-zinc-300 hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
          </Link>

          <header className="mb-16">
            <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-full">
              PERFORMANCE ANALYTICS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6 drop-shadow-md">
              Regional Campaign Performance Dashboard
            </h1>
            <p className="text-xl text-zinc-200 leading-relaxed border-l-2 border-zinc-700 pl-6 drop-shadow-md font-medium">
              A dashboard designed to make large-scale campaign data easier to explore, compare, and translate into actionable insights.
            </p>
          </header>

          <div className="space-y-16 text-zinc-200 leading-relaxed drop-shadow-md">
            
            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">01.</span>
                The Problem
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  Campaign data is inherently large and complex. Performance was often spread across multiple layers of the funnel &mdash; from delivery to engagement to conversion &mdash; making it difficult to quickly understand how campaigns were performing end-to-end.
                </p>
                <p>
                  Without a structured way to navigate this complexity, extracting insights or supporting strategic decisions required significant manual effort.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">02.</span>
                Approach & Solution
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  I designed a dashboard that breaks campaign performance into clear, structured views across the funnel &mdash; from receiving an email to engaging with it and ultimately converting.
                </p>
                <p>
                  The goal was not to redefine metrics, but to make them easier to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  <li>interpret</li>
                  <li>compare</li>
                  <li>act on</li>
                </ul>
                <p>
                  Users can filter and analyse campaigns across multiple dimensions, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  <li>campaign wave and phase</li>
                  <li>customer segments</li>
                  <li>country and region</li>
                </ul>
                <p>
                  This allows teams to quickly generate data-backed insights and validate strategic recommendations.
                </p>
              </div>
            </section>

            <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 pb-4 border-b border-zinc-800">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Funnel-Based Performance Views</h3>
                  <p className="text-zinc-400 text-base">Clear breakdown of campaign performance across delivery, engagement, and conversion stages.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Flexible Filtering & Comparison</h3>
                  <p className="text-zinc-400 text-base">Ability to slice data by wave, phase, segment, and region for fast, targeted analysis.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Time-Based Tracking</h3>
                  <p className="text-zinc-400 text-base">View performance trends across different campaign periods to identify patterns and shifts.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Decision-Oriented Design</h3>
                  <p className="text-zinc-400 text-base">Structured to support quick turnaround of insights, rather than deep technical exploration.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center drop-shadow-md">
                <span className="text-amber-500 mr-3 text-lg drop-shadow-md">03.</span>
                Business Impact
              </h2>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Enabled faster turnaround of data-backed insights to support strategy teams
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Improved clarity in understanding campaign performance across the funnel
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Reduced manual effort required to analyse large campaign datasets
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Made cross-market comparisons more accessible through structured filtering
                </li>
              </ul>
            </section>

            <section className="pt-8 border-t border-zinc-800">
              <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["SQL", "BigQuery", "LookerStudio"].map((tool) => (
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
