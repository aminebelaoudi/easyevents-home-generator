const Footer = () => {
  return (
    <footer className="py-14" style={{ background: "var(--gradient-cta)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-heading font-extrabold text-2xl text-primary-foreground tracking-tight">
              Easy<span className="text-secondary">Events</span> Group
            </span>
            <p className="text-primary-foreground/50 text-sm mt-1.5">
              Genève · Suisse romande
            </p>
            <p className="text-primary-foreground/35 text-xs mt-3 max-w-[220px] leading-relaxed">
              Partenaire événementiel B2B depuis plus de 10 ans.
            </p>
          </div>

          {/* Navigation columns */}
          <div className="flex gap-16 text-sm">
            <div>
              <p className="text-primary-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">Nos services</p>
              <div className="flex flex-col gap-2">
                <a href="#services" className="text-primary-foreground/60 hover:text-secondary transition-colors">EasyFlair</a>
                <a href="#services" className="text-primary-foreground/60 hover:text-secondary transition-colors">EasyFlash</a>
                <a href="#services" className="text-primary-foreground/60 hover:text-secondary transition-colors">EasyChallenge</a>
              </div>
            </div>
            <div>
              <p className="text-primary-foreground/40 text-xs uppercase tracking-widest font-semibold mb-3">Entreprise</p>
              <div className="flex flex-col gap-2">
                <a href="#targets" className="text-primary-foreground/60 hover:text-secondary transition-colors">Pour qui ?</a>
                <a href="#showcase" className="text-primary-foreground/60 hover:text-secondary transition-colors">Réalisations</a>
                <a href="#cta-final" className="text-primary-foreground/60 hover:text-secondary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/35 text-xs">
            © {new Date().getFullYear()} EasyEvents Group. Tous droits réservés.
          </p>
          <p className="text-primary-foreground/20 text-xs">
            Genève, Suisse romande
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
