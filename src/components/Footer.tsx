export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Data Portfolio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/hongwei-lee/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/hongweileeee" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:text-white transition-colors">GitHub</a>
          <a href="mailto:hongwei.careers@gmail.com" className="hover:text-foreground hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
