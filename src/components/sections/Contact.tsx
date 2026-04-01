export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-6">
        <span className="text-sm font-mono text-zinc-500 block mb-4">04. What&apos;s Next?</span> 
        Get In Touch
      </h2>
      <div className="text-zinc-400 mb-12 leading-relaxed space-y-4 max-w-lg mx-auto">
        <p>
          I&apos;m always interested in spotting where things can work better &mdash; and exploring how data, systems, or AI can help drive that change.
        </p>
        <p>
          If you&apos;re working through a problem or just want to exchange ideas, feel free to reach out.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="mailto:hongwei.careers@gmail.com" 
          className="inline-block px-8 py-4 bg-zinc-100 text-zinc-950 rounded-md font-medium text-sm tracking-wide hover:bg-zinc-300 transition-colors"
        >
          Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/hongwei-lee/" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-zinc-800/80 text-zinc-300 border border-zinc-700 rounded-md font-medium text-sm tracking-wide hover:bg-zinc-700 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/hongweileeee" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-zinc-800/80 text-zinc-300 border border-zinc-700 rounded-md font-medium text-sm tracking-wide hover:bg-zinc-700 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
