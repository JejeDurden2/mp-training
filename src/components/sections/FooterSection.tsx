export function FooterSection() {
  return (
    <footer
      className="py-8 px-4 bg-black border-t border-brand-gray-dark/30"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-light text-brand-gray-dark">
        <p>© 2026 MP Training Nice - Studio de coaching sportif privé à Nice</p>

        <nav className="flex gap-6" aria-label="Liens légaux">
          <a
            href="#"
            className="text-brand-gray-dark hover:opacity-70 transition-opacity"
            rel="nofollow"
          >
            Mentions légales
          </a>
          <a
            href="#"
            className="text-brand-gray-dark hover:opacity-70 transition-opacity"
            rel="nofollow"
          >
            Politique de confidentialité
          </a>
        </nav>
      </div>
    </footer>
  );
}
