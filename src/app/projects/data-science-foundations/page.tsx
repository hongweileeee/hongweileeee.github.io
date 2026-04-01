import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ui/ScrollBackground";

export default function DataScienceFoundations() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#09090b] pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
        
        <ScrollBackground imageSrc="/abstract-runner-bg.png" />

        <article className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <Link href="/#projects" className="inline-flex items-center text-sm font-mono text-zinc-300 hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
          </Link>

          {/* Title */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 mb-6 border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-mono rounded-full">
              FOUNDATION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-8">
              Data Science Foundations
            </h1>
          </header>

          <div className="space-y-16 text-zinc-200 leading-relaxed drop-shadow-md">
            {/* Intro */}
            <section className="text-lg space-y-6">
              <p>
                This collection of projects was completed during General Assembly&apos;s Data Science Immersive, where I explored how different data techniques can be applied to real-world problems.
              </p>
              <p>
                Rather than focusing on a single domain, the goal was to understand how to work with different types of data &mdash; from text to video &mdash; and how to structure problems in a way that makes them measurable and solvable.
              </p>
            </section>

            {/* Featured Project */}
            <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center">
                <span className="text-amber-500 mr-3">★</span>
                Featured Project: Running Gait Analysis (Computer Vision)
              </h2>
              <div className="space-y-4">
                <p>
                  Built a proof-of-concept classifier to detect overstriding in runners using pose estimation and sequence modelling (CNN + LSTM).
                </p>
                <p>
                  This project involved working with unstructured video data, extracting keypoint features, and modelling temporal movement patterns &mdash; an early experience in turning raw, complex data into structured inputs for analysis.
                </p>
                <p>
                  The broader goal was to explore how computer vision could be applied in a coaching context to reduce injury risk.
                </p>
              </div>
            </section>

            {/* Other Projects */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 pb-4 border-b border-zinc-800">
                Other Projects
              </h2>
              <div className="space-y-10 border-l border-zinc-800 ml-3 pl-8">
                
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[38px] top-2 border border-zinc-900"></div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-3">Ad Copy Relevancy Classifier (NLP)</h3>
                  <p>
                    Developed a text classification model to evaluate how well advertising headlines align with brand voice, exploring how subjective creative decisions can be translated into measurable signals.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[38px] top-2 border border-zinc-900"></div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-3">HDB Resale Price Prediction</h3>
                  <p>
                    Built a regression model to estimate resale prices based on family-oriented features, focusing on feature engineering and translating real-world constraints into predictive variables.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[38px] top-2 border border-zinc-900"></div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-3">Mild Stroke Prediction</h3>
                  <p>
                    Explored clustering and classification techniques to identify patterns in patient data, with an emphasis on handling ambiguity in loosely defined problem spaces.
                  </p>
                </div>

              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-8 relative z-10">
                Key Takeaways
              </h2>
              <ul className="space-y-4 mb-8 text-zinc-100 relative z-10">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▹</span>
                  Learned to work across different data types: structured, text, and video
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▹</span>
                  Developed an approach to breaking down ambiguous problems into measurable components
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">▹</span>
                  Built a strong foundation in feature engineering, modelling, and evaluation
                </li>
                <li className="flex items-start font-medium text-zinc-200">
                  <span className="text-amber-500 mr-3 mt-1">▹</span>
                  Most importantly, learned that the core challenge is often not the model &mdash; but how the problem is defined and structured
                </li>
              </ul>
              <p className="pt-6 border-t border-zinc-700 text-zinc-200 relative z-10 font-medium">
                These experiences continue to shape how I approach my work today, particularly in designing data systems that turn raw inputs into usable, decision-ready outputs.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
