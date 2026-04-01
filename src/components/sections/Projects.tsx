const placeholderProjects = [
  {
    id: "cap",
    title: "Campaign Analysis Platform (CAP)",
    description: "A unified system that consolidates fragmented CRM data into a single platform for campaign analysis, comparison, and decision-making.",
    tools: ["Python", "BigQuery", "GCP", "Streamlit", "Gemini", "SAP Hybris"],
    link: "/projects/cap",
    tag: "DATA PLATFORM",
    bgImage: "/cap-bg.png"
  },
  {
    id: "regional-dashboard",
    title: "Regional Campaign Performance Dashboard",
    description: "A dashboard designed to standardise campaign performance tracking across regions, enabling comparison across segments, channels, and time.",
    tools: ["SQL", "BigQuery", "LookerStudio"],
    link: "/projects/regional-dashboard",
    tag: "PERFORMANCE ANALYTICS",
    bgImage: "/campaign-performance-bg.png"
  },
  {
    id: "customer-lifecycle",
    title: "Customer Lifecycle & Membership Dashboard",
    description: "A dashboard that tracks member acquisition, behaviour, and lifecycle progression to better understand what drives long-term value.",
    tools: ["SQL", "BigQuery", "LookerStudio"],
    link: "/projects/customer-lifecycle",
    tag: "CUSTOMER ANALYTICS",
    bgImage: "/members-bg.png"
  },
  {
    id: "data-science-foundations",
    title: "Foundations in Data Science",
    description: "Exploring computer vision, NLP, and predictive modelling — and learning how to turn messy, real-world problems into structured, measurable ones.",
    tools: ["Python", "Computer Vision", "NLP", "Predictive Modelling"],
    link: "/projects/data-science-foundations",
    tag: "FOUNDATION",
    bgImage: "/abstract-runner-bg.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-16 flex items-center">
        <span className="text-sm font-mono text-zinc-500 mr-4">02.</span> Selected Work
        <span className="block h-px w-32 md:w-96 bg-zinc-800 ml-6"></span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderProjects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-[#121214] border border-zinc-800 rounded-lg overflow-hidden hover:-translate-y-2 hover:border-zinc-500 transition-all duration-300 h-full"
          >
            {project.bgImage && (
              <div 
                className="absolute inset-0 z-0 opacity-20 mix-blend-screen group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            )}
            <div className="relative z-10 p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-800/50 rounded-md">
                <svg className="w-6 h-6 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <a href={project.link} className="text-zinc-500 hover:text-zinc-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            
            {project.tag && (
              <span className="text-[10px] font-mono text-amber-500/80 bg-amber-500/10 px-2 py-1 rounded inline-block mb-3 border border-amber-500/20">
                {project.tag}
              </span>
            )}
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-4 group-hover:text-amber-100/80 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.tools.map((tool) => (
                <li key={tool} className="text-xs font-mono text-zinc-500 bg-zinc-950/80 backdrop-blur-sm px-2 py-1 rounded">
                  {tool}
                </li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 border-t border-zinc-800 pt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8">
          How I Think About Data Systems
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-zinc-400">
          <li className="flex items-start">
            <span className="text-zinc-600 mr-4 mt-1">▹</span>
            <span className="leading-relaxed">Data is only useful if it can be compared consistently across dimensions</span>
          </li>
          <li className="flex items-start">
            <span className="text-zinc-600 mr-4 mt-1">▹</span>
            <span className="leading-relaxed">Most problems are not modelling problems, but structuring problems</span>
          </li>
          <li className="flex items-start">
            <span className="text-zinc-600 mr-4 mt-1">▹</span>
            <span className="leading-relaxed">Dashboards should answer decisions, not just display metrics</span>
          </li>
          <li className="flex items-start">
            <span className="text-zinc-600 mr-4 mt-1">▹</span>
            <span className="leading-relaxed">Systems should reduce manual work, not add to it</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
