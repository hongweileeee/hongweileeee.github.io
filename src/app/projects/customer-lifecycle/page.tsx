import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ui/ScrollBackground";

export default function CustomerLifecycle() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#09090b] pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
        <ScrollBackground imageSrc="/members-bg.png" />
        <article className="max-w-4xl mx-auto relative z-10">
          
          <Link href="/#projects" className="inline-flex items-center text-sm font-mono text-zinc-300 hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
          </Link>

          <header className="mb-16">
            <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-full">
              CUSTOMER ANALYTICS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6 drop-shadow-md">
              Customer Lifecycle & Membership Dashboard
            </h1>
            <p className="text-xl text-zinc-200 leading-relaxed border-l-2 border-zinc-700 pl-6 drop-shadow-md font-medium">
              A dashboard to track member acquisition, behaviour, and lifecycle progression across regions.
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
                  Organizations often struggle to map the entire end-to-end customer journey. In this case, understanding member behaviour across the acquisition, engagement, and retention stages was highly fragmented.
                </p>
                <p>
                  This fragmentation limited strategic visibility into what truly drives long-term customer lifetime value (LTV).
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
                  To solve the structural gap in member tracking, I architected and built a dedicated Lifecycle & Membership dashboard that unified multiple touchpoints.
                </p>
                <p>The dashboard continuously tracks:</p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  <li>Member acquisition volume and trends</li>
                  <li>Tier upgrades (and downgrades) over time</li>
                  <li>Correlated purchase behaviour and frequency</li>
                  <li>Initial channel attribution (identifying where highest-LTV members originate)</li>
                </ul>
              </div>
            </section>

            <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 pb-4 border-b border-zinc-800">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">End-to-End Lifecycle Tracking</h3>
                  <p className="text-zinc-400 text-base">Monitoring the crucial flow from Acquisition → Engagement → Retention.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Tier Progression Analysis</h3>
                  <p className="text-zinc-400 text-base">Identifying blockers and accelerators in loyalty tier upgrades.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Purchase & Behavioural Insights</h3>
                  <p className="text-zinc-400 text-base">Linking engagement metrics directly to transactional revenue data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-200">Channel-Level Attribution</h3>
                  <p className="text-zinc-400 text-base">Pinpointing the most profitable acquisition funnels for marketing spend.</p>
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
                  Drastically improved the business&apos;s understanding of member behaviour across the complete lifecycle.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Enabled CRM teams to identify the quantitative drivers of retention and high customer value.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500/70 mr-3">↗</span>
                  Supported marketing leadership in making significantly more informed, data-backed CRM strategies.
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
