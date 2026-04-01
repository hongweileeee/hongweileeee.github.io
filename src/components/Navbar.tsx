import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-muted-foreground transition-colors">
          Data<span className="text-zinc-500">Portfolio</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="#about" className="hover:text-zinc-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-zinc-400 transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-zinc-400 transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          {/* Mobile menu button could go here */}
          <span className="text-xs font-mono text-zinc-500">Menu</span>
        </div>
      </div>
    </nav>
  );
}
