export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-zinc-500 font-medium mb-4 tracking-wide uppercase text-sm">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-6 group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">
              Data & CRM Systems
            </span>
            <br /> Analyst.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            I craft data-driven solutions and optimize CRM systems to drive operational
            efficiency and meaningful business insights. I bridge the gap between complex data
            and actionable strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium text-sm text-center tracking-wide hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-full font-medium text-sm text-center tracking-wide hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
